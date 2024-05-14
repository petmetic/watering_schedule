import { Metadata } from "next";
import Breadcrumbs from "@/app/features/plants/breadcrumbs";
import { PlantForm } from "@/app/features/plants/plant-form";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { formSchemaSubmit, PlantSchemaGetSingle } from "@/app/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddPlant } from "@/app/features/plants/add-plant";

export const metadata: Metadata = {
  title: "Add Plant",
};

export default function Page() {
  return (
    <main>
      <h1>Add new plant</h1>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Plants", href: "/dashboard/plants" },
          {
            label: "Add Plant",
            href: "/dashboard/plants/add",
            active: true,
          },
        ]}
      />
      <AddPlant />
    </main>
  );
}
