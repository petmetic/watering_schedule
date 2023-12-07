import { Metadata } from "next";
import Breadcrumbs from "@/app/ui/plants/breadcrumbs";
import { PlantForm } from "@/app/ui/plants/create-plant";

export const metadata: Metadata = {
  title: "Create Plant",
};

export default function Page() {
  return (
    <main>
      <h1>Add new plant</h1>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Plants", href: "/dashboard/plants" },
          {
            label: "Create Plant",
            href: "/dashboard/plants/create",
            active: true,
          },
        ]}
      />
      <PlantForm />
    </main>
  );
}
