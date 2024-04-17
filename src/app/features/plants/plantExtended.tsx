import dayjs from "dayjs";
import { PlantSchema } from "@/app/lib/schema";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "@/components/ui/icons";

interface PlantProps {
  plant: PlantSchema;
}

export function PlantExtended({ plant }: PlantProps) {
  return (
    <Collapsible>
      <CollapsibleTrigger>
        <div>
          <ArrowUpDown /> <p className="text-sm">Details</p>
        </div>
      </CollapsibleTrigger>
      <div>
        <CollapsibleContent className="font-light text-primary">
          Instructions
        </CollapsibleContent>
        <CollapsibleContent>{plant.instructions}</CollapsibleContent>
      </div>
      <div>
        <CollapsibleContent className="font-light text-primary">
          Volume of water
        </CollapsibleContent>
        <CollapsibleContent>{plant.volume}</CollapsibleContent>
      </div>
      <div>
        <CollapsibleContent className="font-light text-primary">
          Start of watering date
        </CollapsibleContent>
        <CollapsibleContent>
          {dayjs(plant?.start).format("DD MMM YYYY")}
        </CollapsibleContent>
      </div>
      <div>
        <CollapsibleContent className="font-light text-primary">
          End of watering date
        </CollapsibleContent>
        <CollapsibleContent>
          {dayjs(plant?.end).format("DD MMM YYYY")}
        </CollapsibleContent>
      </div>
      <div>
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
    </Collapsible>
  );
}
