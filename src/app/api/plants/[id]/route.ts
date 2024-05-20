import { NextResponse } from "next/server";
import { plantSchema } from "@/app/lib/schema";

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  const id = params.id;
  const random = Math.random();

  const res = await fetch(
    `${process.env["SERVER_ENDPOINT"]}/plants/${id}/?format=json&_nocache=${random}`,
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
    return NextResponse.json({ error: parsed.error });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } },
) {
  const id = params.id;
  const random = Math.random();
  const editPlantData = await request.formData();
  const res = await fetch(
    `http://127.0.0.1:8000/plants/${id}/?format=json&_nocache=${random}`,
    {
      method: "PATCH",
      headers: {
        // Bearer: "mytoken",
      },
      body: editPlantData,
    },
  );
  const data = await res.json();
  return NextResponse.json({ data });
}
