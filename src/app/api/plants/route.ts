import { NextResponse } from "next/server";
import { FormSchemaGet } from "@/app/lib/schema";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: Request) {
  // noStore();
  const random = Math.random();
  const res = await fetch(
    `http://127.0.0.1:8000/plants/?format=json&_nocache=${random}`,
    {
      // next: { revalidate: 1 },
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  const data = await res.json();
  let parsed = FormSchemaGet.safeParse(data.results);
  console.log(parsed);
  if (parsed.success) {
    console.log("success");
    return NextResponse.json({ data });
  } else {
    console.log(parsed.error);
    return NextResponse.json({ error: parsed.error });
  }
}

export async function POST(formData: FormData) {
  const res = await fetch("http://127.0.0.1:8000/plants/", {
    method: "POST",
    headers: {
      // Bearer: "mytoken",
    },
    body: formData,
  });
  const data = await res.json();
  return data.id;
}
