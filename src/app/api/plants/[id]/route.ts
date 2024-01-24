export const dynamic = "force-dynamic"; // defaults to auto
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const res = await fetch(`http://127.0.0.1:8000/plants/${id}`, {
    headers: {
      "Content-Type": "application/json",
      // 'API-KEY': process.env.DATA_API_KEY,
    },
  });
  const data = await res.json();

  return Response.json({ data });
}
