import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // defaults to auto
// export const revalidate = 1;
// export const fetchCache = "force-no-store";

// import { unstable_noStore as noStore } from "next/cache";

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
<<<<<<< HEAD
        pragma: "no-cache",
        "cache-control": "no-cache",
=======
        // pragma: "no-cache",
        // "cache-control": "no-cache",
>>>>>>> origin/main
      },
    },
  );
  const data = await res.json();
<<<<<<< HEAD
  // TODO: add zod schema
  return data.results;
=======

  return NextResponse.json({ data });
>>>>>>> origin/main
}

export async function POST(formData: FormData) {
  const res = await fetch("http://127.0.0.1:8000/plants/", {
    method: "POST",
<<<<<<< HEAD
    headers: {},
    body: formData,
  });
  const data = await res.json();
  return Response.json({ data });
=======
    headers: {
      // Bearer: "mytoken",
    },
    body: formData,
  });
  const data = await res.json();

  return data.id;
>>>>>>> origin/main
}
