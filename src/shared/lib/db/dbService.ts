import { Document, Model } from "mongoose";
import { PaginatedResponse, PaginationParams } from "./types";
import { PAGINATION_CONFIG } from "@/src/shared/config/pagination";
import dbConnect from "./dbConnect";

function serializeData<T>(data: unknown): T {
  if (data === undefined) return undefined as unknown as T;
  return JSON.parse(JSON.stringify(data)) as T;
}

export async function getPaginatedData<T, D extends Document>(
  model: Model<D>,
  params: PaginationParams<T>,
): Promise<PaginatedResponse<T>> {
  await dbConnect();

  const {
    page = PAGINATION_CONFIG.DEFAULT_PAGE,
    limit = PAGINATION_CONFIG.DEFAULT_LIMIT,
    sort = { createdAt: -1 },
    filter = {},
  } = params;

  const safeLimit = Math.min(limit, PAGINATION_CONFIG.MAX_LIMIT);
  const skip = (page - 1) * safeLimit;

  const [rawItems, total] = await Promise.all([
    model
      .find(filter)
      .sort(sort)
      .skip(skip)
      .limit(safeLimit)
      .lean<T[]>()
      .exec(),
    model.countDocuments(filter).exec(),
  ]);

  const totalPages = Math.ceil(total / safeLimit);

  return {
    items: serializeData<T[]>(rawItems),
    metadata: {
      total,
      pages: totalPages,
      currentPage: page,
      hasNextPage: page < totalPages,
    },
  };
}
