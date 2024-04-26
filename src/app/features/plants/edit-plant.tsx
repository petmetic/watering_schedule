"use client";
import { ProgressBar } from "@/app/features/progress-bar";
import { PlantForm } from "@/app/features/plants/plant-form";
import useSWR from "swr";
import { useParams } from "next/navigation";
import { PlantSchema } from "@/app/lib/schema";

interface PlantProps {
  plant: PlantSchema;
  onWaterChange: any;
  onExpand: any;
  expanded: boolean;
  watered: boolean;
}

export function EditPlant({ watered }: PlantProps) {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useSWR(`/api/plants/${id}`, fetcher);

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
        <PlantForm plant={data.data} watered={watered} />
      </div>
    );
  }
}
