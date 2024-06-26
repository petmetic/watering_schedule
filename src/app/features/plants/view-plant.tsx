"use client";

import { useParams, useRouter } from "next/navigation";
import useSWR from "swr";
import { ProgressBar } from "@/app/features/progress-bar";

import { PlantSmall } from "@/app/features/plants/plant-small";
import { PlantSchemaSingle } from "@/app/lib/schema";

interface PlantProps {
  plant: PlantSchemaSingle;
  onWaterChange: any;
  watered: boolean;
}

export function ViewPlant({ watered }: PlantProps) {
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
        <PlantSmall plant={data.data} watered={watered} />
      </div>
    );
  }
}
