import { NextResponse } from "next/server";
import { formSchemaGet } from "@/app/lib/schema";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: Request) {
  // noStore();
  const random = Math.random();
  const res = await fetch(
    `${process.env["SERVER_ENDPOINT"]}/plants/?format=json&_nocache=${random}`,
    {
      // next: { revalidate: 1 },
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  const data = await res.json();
  let parsed = formSchemaGet.safeParse(data.results);
  if (parsed.success) {
    return NextResponse.json({ data });
  } else {
    return NextResponse.json({ error: parsed.error });
  }
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const res = await fetch(`${process.env["SERVER_ENDPOINT"]}/plants/`, {
    method: "POST",
    headers: {
      // Bearer: "mytoken",
    },
    body: formData,
  });
  const data = await res.json();
  return NextResponse.json({ data });
}
