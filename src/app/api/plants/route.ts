export const dynamic = "force-dynamic"; // defaults to auto
export const revalidate = 1;
export const fetchCache = "force-no-store";

// import { unstable_noStore as noStore } from "next/cache";

export async function GET(request: Request) {
  // noStore();
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

export async function POST(form: {}) {
  const formData = new FormData();
  const res = await fetch("http://127.0.0.1:8000/plants/", {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
      // boundary = "",
      // 'API-KEY': process.env.DATA_API_KEY,
    },
    body: formData,
  });
  const data = await res.json();
  console.log(`the form has been POSTED ${data}`);
  console.log(data);
  return Response.json({ data });
}
