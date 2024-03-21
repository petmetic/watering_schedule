import { NextResponse } from "next/server";
import { FormSchemaGet, FormSchemaGetSingle } from "@/app/lib/schema";

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
  let parsed = FormSchemaGetSingle.safeParse(data);
  if (parsed.success) {
    console.log("success");
    return NextResponse.json({ data });
  } else {
    console.log(parsed.error);
    return NextResponse.json({ error: parsed.error });
  }
}

// export async function PATCH(request: Request) {
//   const formData = await request.formData();
//   const res = await fetch(`http://127.0.0.1:8000/plants/${id}`, {
//     method: "PATCH",
//     headers: {
//       // Bearer: "mytoken",
//     },
//     body: formData,
//   });
//   const data = await res.json();
//   return NextResponse.json({ data });
// }
