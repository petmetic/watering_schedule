import { Metadata } from "next";
import Breadcrumbs from "@/app/features/plants/breadcrumbs";
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
