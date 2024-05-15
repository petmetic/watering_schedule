import dayjs from "dayjs";
import { PlantSchema, PlantSchemaSingle } from "@/app/lib/schema";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ArrowsDown } from "@/components/ui/icons";
import { useRouter, useParams } from "next/navigation";

interface PlantProps {
  plant: PlantSchemaSingle;
}

export function PlantExtended({ plant }: PlantProps) {
  const router = useRouter();
  const plantId = plant.id;

  const handleClick = () => {
    console.log("Edit button has been pressed");
    router.push(`/dashboard/plants/${plantId}/edit`);
  };
  return (
    <Collapsible>
      <CollapsibleTrigger>
        <div className="flex gap-1">
          <ArrowsDown /> Details
        </div>
      </CollapsibleTrigger>
      <div className="flex flex-col gap-2 p-3">
        <div className="p-2">
          <CollapsibleContent>
            <p className="font-light text-primary">Instructions</p>
            <div className="rounded-md border">{plant.instructions}</div>
          </CollapsibleContent>
        </div>
        <div className="p-2">
          <CollapsibleContent>
            <p className="font-light text-primary">Volume of water</p>
            <div className="rounded-md border">{plant.volume}</div>
          </CollapsibleContent>
        </div>
        <div className="p-2">
          <CollapsibleContent>
            <p className="font-light text-primary">Start of watering date</p>
            <div className="rounded-md border">
              {dayjs(plant?.start).format("DD MMM YYYY")}
            </div>
          </CollapsibleContent>
        </div>
        <div className="p-2">
          <CollapsibleContent>
            <p className="font-light text-primary">End of watering date</p>
            <div className="rounded-md border">
              {dayjs(plant?.end).format("DD MMM YYYY")}
            </div>
          </CollapsibleContent>
        </div>
        <div className="p-2">
          <CollapsibleContent>
            <p className="font-light text-primary">Watering frequency</p>
            <div className="rounded-md border">{plant.frequency}</div>
          </CollapsibleContent>
        </div>

        <CollapsibleContent>
          <Button
            variant="outline"
            className="text-primary border-primary"
            onClick={handleClick}
          >
            Edit
          </Button>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}
