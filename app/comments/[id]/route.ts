import { comments } from "../data";


// get all data 
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const commentId = parseInt(id, 10);

  const comment = comments.find((comment) => comment.id === commentId);

  if (!comment) {
    return new Response(JSON.stringify({ message: "Comment not found" }), {
      status: 404,
    });
  }

  return Response.json(comment);
}


// updated data 
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const { text } = await request.json();

  const index = comments.findIndex(
    (comment) => comment.id === parseInt(id, 10)
  );

  if (index === -1) {
    return new Response(
      JSON.stringify({ message: "Comment not found" }),
      { status: 404 }
    );
  }

  // ✅ শুধু text update
  comments[index].text = text;

  return Response.json(comments[index]);
}


// deleted data 
export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const index = comments.findIndex(
    (comment) => comment.id === parseInt(id, 10)
  );

  // ❗ important check
  if (index === -1) {
    return new Response(
      JSON.stringify({ message: "Comment not found" }),
      { status: 404 }
    );
  }

  // delete করার আগে store করো
  const deletedComment = comments[index];

  comments.splice(index, 1);

  return Response.json({
    message: "Comment deleted successfully",
    comment: deletedComment,
  });
}
