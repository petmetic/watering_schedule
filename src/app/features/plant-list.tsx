"use client";
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
import useSWR from "swr";
import { Switch } from "@/components/ui/switch";
import { ProgressBar } from "@/app/features/progress-bar";
import { ViewPlant } from "@/app/features/plants/view-plant";
import { PlantSmall } from "@/app/features/plants/plant-small";

export default function PlantList() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR("/api/plants", fetcher);

  let plants = data?.data?.results;
  console.log(plants);

  if (isLoading) {
    return (
      <div className="flex h-screen flex-col md:flex-row">
        <ProgressBar />
      </div>
    );
  } else if (error) {
    return <p>No plant data to show</p>;
  } else {
    return (
      <div>
        <div className="grid auto-rows-max items-start gap-6">
          {plants.map((plant: any) => (
            <PlantSmall key={plant.id} plant={plant} />
          ))}
        </div>
      </div>
    );
  }
}
