export const dynamic = "force-static";

export async function GET() {
    const categories = [
        {id:1,name:"Electronics"},
        {id:2,name:"book"},
        {id:3,name:"Enics"},
        {id:4,name:"ronics"},
    ]

    return Response.json(categories)
}