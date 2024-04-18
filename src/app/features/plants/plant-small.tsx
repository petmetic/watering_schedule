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
import { ArrowRight } from "@/components/ui/icons";

interface PlantProps {
  plant: PlantSchema;
  onWaterChange?: any;
  watered: boolean;
}

export function PlantSmall({ plant, onWaterChange, watered }: PlantProps) {
  return (
    <Card className={cn("w-[500px]")}>
      <CardHeader>
        <CardTitle className="text-primary">{plant.name}</CardTitle>
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
      <CardContent className="flex items-center space-x-2">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <Label htmlFor="plant-watered">
              <div>
                {watered ? (
                  <p className="text-primary font-bold">
                    Plant needs watering.
                  </p>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Plant is watered.
                  </p>
                )}
              </div>
            </Label>
            <Switch id="plant-watered" onCheckedChange={onWaterChange} />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <PlantExtended plant={plant} />
      </CardFooter>
    </Card>
  );
}
