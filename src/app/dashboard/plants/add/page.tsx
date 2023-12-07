import { Metadata } from "next";
// import Breadcrumbs from "@/app/ui/plants/breadcrumbs";
import { PlantForm } from "@/app/ui/add-plant";

export const metadata: Metadata = {
  title: "Add plant",
};

export default function Page() {
  return (
    <main>
      <p>Here is plant form</p>
      <div>
        <PlantForm />
      </div>
    </main>
  );
}
