import { NextResponse } from "next/server";
import { plantSchema } from "@/app/lib/schema";

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  const id = params.id;
  const random = Math.random();
  const res = await fetch(
    `http://127.0.0.1:8000/plants/${id}/?format=json&_nocache=${random}`,
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
  let parsed = plantSchema.safeParse(data);
  if (parsed.success) {
    return NextResponse.json({ data });
  } else {
    console.log(parsed.error);
    return NextResponse.json({ error: parsed.error });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } },
) {
  console.log("PATCH request is to be executed");
  const id = params.id;
  console.log("id of plant to be patched", id);
  const random = Math.random();
  const jsonData = await request.json();
  console.log(jsonData);
  // const id = formData.id;
  const res = await fetch(
    `http://127.0.0.1:8000/plants/${id}/?format=json&_nocache=${random}`,
    {
      method: "PATCH",
      headers: {
        // Bearer: "mytoken",
      },
      body: jsonData,
    },
  );
  const data = await res.json();
  console.log("response data", data);
  return NextResponse.json({ data });
}
