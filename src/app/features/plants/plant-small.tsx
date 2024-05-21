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
import { useState } from "react";

interface PlantProps {
  plant: PlantSchemaSingle;
}

export function PlantSmall({ plant }: PlantProps) {
  const [watered, setWatered] = useState(false);
  const handleIsWatered = () => {
    console.log("status has been changed");
    // todo: make a fetch request to PATCH
    setWatered(!watered);
  };

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
          <Switch id="plant-watered" onCheckedChange={handleIsWatered} />
          <Label htmlFor="airplane-mode">
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
