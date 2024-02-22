import { useParams } from "next/navigation";

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
  return Response.json({ data });
}
