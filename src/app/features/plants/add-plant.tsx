"use client";
import { PlantForm } from "@/app/features/plants/plant-form";
import * as z from "zod";
import { formSchemaSubmit, PlantSchema } from "@/app/lib/schema";
import { prepareAddPlantData } from "@/app/lib/actions";
import { useRouter } from "next/navigation";

interface PlantProps {
  plant?: PlantSchema;
  onSubmit: any;
}
export function AddPlant() {
  const router = useRouter();

  async function onSubmit(data: z.infer<typeof formSchemaSubmit>) {
    const newPlantData = prepareAddPlantData(data);
    const plant = await fetch(`/api/plants/`, {
      method: "POST",
      body: newPlantData,
    }).then(async (res) => {
      return await res.json();
    });

    if (plant?.data?.id) {
      router.push(`/dashboard/plants/${plant.data.id}/`);
    }

    // TODO: reply the form has been submitted
  }
  return (
    <div>
      <PlantForm onSubmit={onSubmit} />
    </div>
  );
}
