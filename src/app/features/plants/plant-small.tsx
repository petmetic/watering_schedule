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

interface PlantProps {
  plant: PlantSchema;
}

export function PlantSmall({ plant }: PlantProps) {
  return (
    <Card className={cn("w-[340px]")}>
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
      <CardFooter className="flex items-center space-x-2">
        <Switch id="plant-watered" />
        <Label htmlFor="plant-watered">Plant is watered.</Label>
      </CardFooter>
    </Card>
  );
}
