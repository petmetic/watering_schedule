import { Metadata } from "next";
import Breadcrumbs from "@/app/ui/plants/breadcrumbs";
import { ViewPlant } from "@/app/ui/plants/view-plant";

export const metadata: Metadata = {
  title: "Detailed Plant View",
};

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
