import { Metadata } from "next";
import Breadcrumbs from "@/app/features/plants/breadcrumbs";
import { PlantForm } from "@/app/features/plants/plant-form";

export const metadata: Metadata = {
  title: "Edit Plant",
};

export default function Page() {
  return (
    <main>
      <h1>Edit plant</h1>
      <PlantForm />
    </main>
  );
}
