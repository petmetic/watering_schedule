export const dynamic = "force-dynamic"; // defaults to auto
export const revalidate = 1;
export const fetchCache = "force-no-store";

export async function GET(request: Request) {
  const random = Math.random();
  const res = await fetch(
    `http://127.0.0.1:8000/plants/?format=json&_nocache=${random}`,
    {
      next: { revalidate: 1 },
      headers: {
        "Content-Type": "application/json",
        pragma: "no-cache",
        "cache-control": "no-cache",

        // 'API-KEY': process.env.DATA_API_KEY,
      },
    },
  );
  const data = await res.json();
  // add zod schema
  console.log(`these are from  GET `);
  console.log(data);
  return data.results;
}

export async function POST() {
  const res = await fetch("http://127.0.0.1:8000/plants/?format=json", {
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
