import { Metadata } from "next";
import Breadcrumbs from "@/app/features/plants/breadcrumbs";
import { ViewPlant } from "@/app/features/plants/view-plant";

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
