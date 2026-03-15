import dbConnect from "@/app/lib/dbConnect";
import Post from "@/app/models/Post";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();

    const posts = await Post.find({}).sort({ publishedAt: -1 }).lean();

    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error("[API_POSTS_GET]", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
