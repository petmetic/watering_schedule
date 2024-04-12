import dayjs from "dayjs";
import { PlantSchema } from "@/app/lib/schema";
import { Card, CardContent } from "@/components/ui/card";

interface PlantProps {
  plant: PlantSchema;
}

export function PlantExtended({ plant }: PlantProps) {
  return (
    <Card className="border-0">
      <CardContent>
        <div className="border">
          <p className="font-semibold">Instructions</p>
          <p>{plant.instructions}</p>
        </div>
        <div className="border">
          <p className="font-semibold">Volume of water</p>
          <p>{plant.volume}</p>
        </div>
        <div className="border">
          <p className="font-semibold">Start of watering date</p>
          <p>{dayjs(plant?.start).format("DD MMM YYYY")}</p>
        </div>
        <div className="border">
          <p className="font-semibold">End of watering date</p>
          <p>{dayjs(plant?.end).format("DD MMM YYYY")}</p>
        </div>
        <div className="border">
          <p className="font-semibold">Watering frequency</p>
          <p>{plant.frequency}</p>
        </div>
      </CardContent>
    </Card>
  );
}
