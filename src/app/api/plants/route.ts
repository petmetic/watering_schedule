export const dynamic = "force-dynamic"; // defaults to auto
export const revalidate = 1;
// export const fetchCache = "force-no-store";

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
      },
    },
  );
  const data = await res.json();
  // TODO: add zod schema
  return data.results;
}

export async function POST(formData: FormData) {
  const res = await fetch("http://127.0.0.1:8000/plants/", {
    method: "POST",
    headers: {},
    body: formData,
  });
  const data = await res.json();
  // console.log(`response`);
  console.log(data);
  const id = data.id;
  console.log(id);
  return id;
}
