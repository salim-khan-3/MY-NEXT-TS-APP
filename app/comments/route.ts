import { NextRequest } from "next/server";
import { comments } from "./data";

export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  const filteredComments = query
    ? comments.filter((comment) =>
        comment.comments
          .toLowerCase()
          .includes(query.toLowerCase())
      )
    : comments;

  return Response.json(filteredComments);
}



export async function POST(request: Request) {
  const body = await request.json();

  const newComment = {
    id: comments.length + 1,
    comments: body.comments, // ✅ request থেকে data
  };

  comments.push(newComment);

  return Response.json(newComment, { status: 201 });
}