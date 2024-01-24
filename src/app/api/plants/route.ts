export const dynamic = "force-dynamic"; // defaults to auto
export async function GET(request: Request) {
  const res = await fetch("http://127.0.0.1:8000/plants/", {
    headers: {
      "Content-Type": "application/json",
      // 'API-KEY': process.env.DATA_API_KEY,
    },
  });
  const data = await res.json();

  return Response.json({ data });
}

export async function POST() {
  const res = await fetch("http://127.0.0.1:8000/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'API-KEY': process.env.DATA_API_KEY,
    },
    // body: JSON.stringify({ plants: plants.toISOString() }),
  });
  const data = await res.json();

  return Response.json({ data });
}
