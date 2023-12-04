import { Metadata } from "next";
// import Breadcrumbs from "@/app/ui/plants/breadcrumbs";
import { PlantForm } from "@/app/ui/plants/create-plant";

export const metadata: Metadata = {
  title: "Create plant",
};

export default function Page() {
  // const plants = await fetchPlants();
  return (
    <main>
      <h1>Add new plant</h1>
      <div>
        <PlantForm />
      </div>
    </main>
  );
