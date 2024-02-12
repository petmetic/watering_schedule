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

export async function POST(form: HTMLFormElement) {
  const photoField = document.getElementById("photo") as HTMLInputElement;
  const file = photoField?.files ? photoField.files[0] : null;
  const addPlant = document.getElementById("add-plant") as HTMLFormElement;
  const formData = new FormData(addPlant);
  formData.append("photo", file, file.name);

  console.log(formData);

  const res = await fetch("http://127.0.0.1:8000/plants/", {
    method: "POST",
    headers: {
      //   // 'API-KEY': process.env.DATA_API_KEY,
    },
    body: formData,
  });
  const data = await res.json();
  console.log(`the form has been POSTED ${data}`);
  console.log(data);
  return Response.json({ data });
}
