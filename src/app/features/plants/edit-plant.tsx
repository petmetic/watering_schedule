"use client";
import { ProgressBar } from "@/app/features/progress-bar";
import { PlantForm } from "@/app/features/plants/plant-form";
import useSWR from "swr";
import { useParams } from "next/navigation";
import { PlantSchemaGetSingle } from "@/app/lib/schema";

interface PlantProps {
  plant: PlantSchemaGetSingle;
}

export function EditPlant() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useSWR(`/api/plants/${id}`, fetcher);

  let plant = data?.data;

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
        <PlantForm plant={plant} />
      </div>
    );
  }
}
