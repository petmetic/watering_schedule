"use client";
import Breadcrumbs from "@/app/ui/plants/breadcrumbs";
import { GET } from "@/app/api/plants/[id]/route";
import { useParams, useRouter } from "next/navigation";
import * as z from "zod";
import { prepareAddPlantData } from "@/app/lib/actions";
import { POST } from "@/app/api/plants/route";

export default function Page() {
  const { id } = useParams<{ id: string }>();
  console.log(`in Page function ${id}`);
  async function getPlant(id: string) {
    const viewPlantData = GET(id);
  }
  let plantData = getPlant(id);
  console.log(plantData);

  return (
    <main>
      <p></p>
      <h1>View added plant</h1>
      {/*<Breadcrumbs*/}
      {/*  breadcrumbs={[*/}
      {/*    { label: "Plants", href: "/dashboard/plants" },*/}
      {/*    {*/}
      {/*      label: "View Plant",*/}
      {/*      href: "/dashboard/plants/[id]",*/}
      {/*      active: true,*/}
      {/*    },*/}
      {/*  ]}*/}
      {/*/>*/}
      {/*<PlantForm />*/}
    </main>
  );
}
