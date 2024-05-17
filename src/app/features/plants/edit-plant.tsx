"use client";
import { useParams, useRouter } from "next/navigation";
import useSWR from "swr";
import { ProgressBar } from "@/app/features/progress-bar";
import * as z from "zod";
import { formSchemaSubmit } from "@/app/lib/schema";
import { prepareAddPlantData, prepareEditPlantData } from "@/app/lib/actions";
import { PlantForm } from "@/app/features/plants/plant-form";

export function EditPlant() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const router = useRouter();

  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useSWR(`/api/plants/${id}`, fetcher);

  let oldData = data;
  async function onSubmit(data: z.infer<typeof formSchemaSubmit>) {
    const editPlantData = prepareEditPlantData(data, oldData);
    const plant = await fetch(`/api/plants/`, {
      method: "PATCH",
      body: editPlantData,
    }).then(async (res) => {
      return await res.json();
    });

    if (plant?.data?.id) {
      router.push(`/dashboard/plants/${plant.data.id}/`);
    }

    // TODO: reply the form has been submitted
  }

  if (isLoading) {
    return (
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <ProgressBar />
      </div>
    );
  } else if (error) {
    return <p>No plant data to show</p>;
  } else {
    return (
      <div>
        <PlantForm onSubmit={onSubmit} plant={data.data} />
      </div>
    );
  }
}
