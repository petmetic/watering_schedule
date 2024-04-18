import dayjs from "dayjs";
import { PlantSchema } from "@/app/lib/schema";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { Button } from "@/components/ui/button";
import { ArrowsDown } from "@/components/ui/icons";

interface PlantProps {
  plant: PlantSchema;
}

export function PlantExtended({ plant }: PlantProps) {
  return (
    <Collapsible>
      <CollapsibleTrigger>
        <div className="flex gap-1">
          <ArrowsDown />
          <div className="text-sm">Details</div>
        </div>
      </CollapsibleTrigger>
      <div className="flex flex-col gap-2 p-3">
        <div className="p-2">
          <CollapsibleContent className="font-light text-primary">
            Instructions
          </CollapsibleContent>
          <CollapsibleContent>{plant.instructions}</CollapsibleContent>
        </div>
        <div className="p-2">
          <CollapsibleContent className="font-light text-primary">
            Volume of water
          </CollapsibleContent>
          <CollapsibleContent>{plant.volume}</CollapsibleContent>
        </div>
        <div className="p-2">
          <CollapsibleContent className="font-light text-primary">
            Start of watering date
          </CollapsibleContent>
          <CollapsibleContent>
            {dayjs(plant?.start).format("DD MMM YYYY")}
          </CollapsibleContent>
        </div>
        <div className="p-2">
          <CollapsibleContent className="font-light text-primary">
            End of watering date
          </CollapsibleContent>
          <CollapsibleContent>
            {dayjs(plant?.end).format("DD MMM YYYY")}
          </CollapsibleContent>
        </div>
        <div className="p-2">
          <CollapsibleContent className="font-light text-primary">
            Watering frequency
          </CollapsibleContent>
          <CollapsibleContent>{plant.frequency}</CollapsibleContent>
        </div>
        <CollapsibleContent>
          <Button variant="outline" className="text-primary border-primary">
            Edit
          </Button>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}
