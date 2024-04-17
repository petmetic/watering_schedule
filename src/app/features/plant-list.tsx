"use client";
import useSWR from "swr";
import { ProgressBar } from "@/app/features/progress-bar";
import { PlantSmall } from "@/app/features/plants/plant-small";
import { useState } from "react";

export default function PlantList() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR("/api/plants", fetcher);

  let plants = data?.data?.results;
  console.log(plants);

  const [watered, setWatered] = useState(true);
  const [expanded, setExpanded] = useState(false);

  const handleChange = () => {
    console.log("status has been changed");
    // todo: make a fetch request to PATCH
    setWatered(!watered);
  };

  const handleExpand = () => {
    console.log("component has been expanded");
    setExpanded(!expanded);
  };

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
            <PlantSmall
              key={plant.id}
              plant={plant}
              onWaterChange={handleChange}
              onExpand={handleExpand}
              expanded={expanded}
              watered={watered}
            />
          ))}
        </div>
      </div>
    );
  }
}
