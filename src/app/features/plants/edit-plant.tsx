"use client";
import { PlantEditForm } from "@/app/features/plants/plant-form-edit";
import { useParams } from "next/navigation";
import useSWR from "swr";
import { ProgressBar } from "@/app/features/progress-bar";

export function EditPlant() {
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
        <PlantEditForm plant={data.data} />
      </div>
    );
  }
}
