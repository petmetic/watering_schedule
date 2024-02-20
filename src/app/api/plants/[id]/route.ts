export async function GET(id: string) {
  console.log(`id in GET request params ${id}`);
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
  console.log(`after fetch ${data}`);
  console.log(data);
  // TODO: add zod schema
  return data;
}
