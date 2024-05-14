"use client";
import { ProgressBar } from "@/app/features/progress-bar";
import { PlantForm } from "@/app/features/plants/plant-form";
import useSWR from "swr";
import { useParams } from "next/navigation";
import { formSchemaSubmit, PlantSchemaGetSingle } from "@/app/lib/schema";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface PlantProps {
  plant: PlantSchemaGetSingle;
}

export function EditPlant() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useSWR(`/api/plants/${id}`, fetcher);
  let plant = data.data;

  const form = useForm<z.infer<typeof formSchemaSubmit>>({
    resolver: zodResolver(formSchemaSubmit),
    defaultValues: {
      // to populate form, add data in default values
      name: plant.name ? plant.name : "",
      location: plant.location ? plant.location : "Select plant location",
      frequency: plant.frequency ? plant.frequency : "0",
      status: plant.status ? plant.status : "needs watering",
      start: plant.start ? plant.start : null,
      end: plant.end ? plant.end : null,
      volume: plant.volume ? plant.volume : "Select volume of water",
      instructions: plant.instructions ? plant.instructions : "",
      photo: plant.photo ? plant.photo : "insert photo of plant here",
    },
  });

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
        <PlantForm plant={plant} form={form} />
      </div>
    );
  }
}
