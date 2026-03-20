export type SearchParams = Promise<{
  [key: string]: string | string[] | undefined;
}>;

export async function getValidPage(
  searchParams: SearchParams,
): Promise<number> {
  const params = await searchParams;
  const pageParam = Array.isArray(params?.page) ? params.page[0] : params?.page;
  const page = Number(pageParam);

  return Number.isNaN(page) || page < 1 ? 1 : page;
}
