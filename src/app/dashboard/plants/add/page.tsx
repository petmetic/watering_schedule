import { Metadata } from "next";
// import Breadcrumbs from "@/app/ui/plants/breadcrumbs";
import { PlantForm } from "@/app/ui/plants/create-plant";

export const metadata: Metadata = {
  title: "Add plant",
};

export default function Page() {
  return (
    <main>
      <h1>Add new plant</h1>
      <div>
        <PlantForm />
      </div>
    </main>
  );
}
