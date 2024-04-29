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
import { Button } from "@/components/ui/button";
import { ArrowDown } from "@/components/ui/icons";

interface PlantProps {
  plant: PlantSchema;
  onWaterChange?: any;
  watered: boolean;
}

export function PlantSmall({ plant, onWaterChange, watered }: PlantProps) {
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
        <Switch id="plant-watered" onCheckedChange={onWaterChange} />
        <Label htmlFor="plant-watered">
          <p>{watered ? "Plant is watered." : "Plant needs watering."}</p>
        </Label>
      </CardContent>
      <CardFooter className="flex items-center">
        <PlantExtended plant={plant} />
      </CardFooter>
    </Card>
  );
}
