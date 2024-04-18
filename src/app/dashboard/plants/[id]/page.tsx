import { Metadata } from "next";
import { ViewPlant } from "@/app/features/plants/view-plant";
import { PlantSchema } from "@/app/lib/schema";

export const metadata: Metadata = {
  title: "Detailed Plant View",
};

interface PlantProps {
  plant: PlantSchema;
  onWaterChange: any;
  onExpand?: any;
  expanded: boolean;
  watered: boolean;
}
export default function Page() {
  return (
    <main>
      <h1>View Plant</h1>
      <br />
      <br />
      <ViewPlant />
    </main>
  );
}
