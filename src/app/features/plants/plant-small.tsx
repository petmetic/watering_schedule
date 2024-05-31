import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { PlantSchemaSingle } from "@/app/lib/schema";
import { PlantExtended } from "@/app/features/plants/plantExtended";
import { ChangeEvent, useState } from "react";
import { prepareStatusChange } from "@/app/lib/actions";

interface PlantProps {
  plant: PlantSchemaSingle;
}

export function PlantSmall({ plant }: PlantProps) {
  const [watered, setWatered] = useState(false);
  const handleChangeWatered = (event: ChangeEvent<HTMLInputElement>) => {
    const checkWatered = event.target.checked;
    setWatered(checkWatered);
    console.log("status has been changed");
    console.log("watered", watered);
  };

  let plantId = plant?.id;
  console.log("status", watered);

  //const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
  //     const value = event.target.checked;
  //     setValue(label, value);
  //   };

  // async function changeStatus = await fetch(`/api/plants/${plantId}/`, {
  //   method: "PATCH",
  //   body: watered,
  // }).then(async (res) => {
  //   return await res.json();
  // });

  // add button to manage errors

  return (
    <Card className={cn("w-[700px]")}>
      <CardHeader>
        <CardTitle>{plant.name}</CardTitle>
        <CardDescription>location: {plant.location}</CardDescription>
      </CardHeader>

      <CardContent>
        <Image
          src={plant.photo}
          width={70}
          height={70}
          className="hidden md:block rounded-full"
          alt={`${plant.photo}'s picture`}
        />
      </CardContent>
      <CardContent>
        <div className="flex items-center space-x-2">
          <Switch
            id="plant-watered"
            // checked={watered}
            onCheckedChange={handleChangeWatered}
          />
          <Label htmlFor="plant-watered">
            {watered ? " Watered" : "Water me"}
          </Label>
        </div>
      </CardContent>
      <CardFooter className="flex items-center">
        <PlantExtended plant={plant} />
      </CardFooter>
    </Card>
  );
}
