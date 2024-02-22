"use client";

import { useParams, useRouter } from "next/navigation";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

export default function Page() {
  const { id } = useParams<{ id: string }>();

  // console.log(`id in pages` + id);

  async function getPlant() {
    const getPlantData = await fetch(`/api/plants/${id}`);
    // console.log(getPlantData);
  }

  let plantData = null;
  getPlant().then((data) => {
    console.log(`data from page after getPlant()` + data);
    plantData = data;
  });

  return (
    <main>
      <h1>View added plant</h1>
      {/*<p>plant id: {plantData.id}</p>*/}
    </main>
  );
}
