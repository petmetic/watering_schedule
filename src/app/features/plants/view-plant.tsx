"use client";

import { useParams, useRouter } from "next/navigation";
import useSWR from "swr";
import { ProgressBar } from "@/app/features/progress-bar";

import { PlantSmall } from "@/app/features/plants/plant-small";
import { PlantExtended } from "@/app/features/plants/plantExtended";
import { PlantSchema } from "@/app/lib/schema";

interface PlantProps {
  plant: PlantSchema;
  onExpand: any;
  expanded: boolean;
}

export function ViewPlant() {
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
        <PlantSmall plant={data.data} />
      </div>
    );
  }
}
