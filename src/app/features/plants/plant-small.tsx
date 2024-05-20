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
import { PlantSchema } from "@/app/lib/schema";
import { PlantExtended } from "@/app/features/plants/plantExtended";
import { useState } from "react";

interface PlantProps {
  plant: PlantSchema;
}

export function PlantSmall({ plant }: PlantProps) {
  const [watered, setWatered] = useState(false);
  const handleChange = () => {
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
        <Switch id="plant-watered" onCheckedChange={handleChange} />
        <Label htmlFor="plant-watered" className="pt-6">
          <p className="pt-2">
            {watered ? " ✅ Plant is watered." : "Plant needs watering."}
          </p>
        </Label>
      </CardContent>
      <CardFooter className="flex items-center">
        <PlantExtended plant={plant} />
      </CardFooter>
    </Card>
  );
}
