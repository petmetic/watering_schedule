"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { formSchemaSubmit } from "@/app/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlantForm } from "@/app/features/plants/plant-form";
import { prepareAddPlantData } from "@/app/lib/actions";

export function AddPlant() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchemaSubmit>>({
    resolver: zodResolver(formSchemaSubmit),
    defaultValues: {
      name: "",
      location: "Select plant location",
      frequency: "0",
      status: "needs watering",
      volume: "Select volume of water",
      instructions: "",
      photo: "insert photo of plant here",
    },
  });

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
      <PlantForm form={form} handleSubmit={onSubmit} />
    </div>
  );
}
