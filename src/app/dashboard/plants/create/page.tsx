import { Metadata } from "next";
<<<<<<< HEAD
// import Breadcrumbs from "@/app/ui/plants/breadcrumbs";
import { PlantForm } from "@/app/ui/plants/add-plant";
=======
import Breadcrumbs from "@/app/ui/plants/breadcrumbs";
import { PlantForm } from "@/app/ui/plants/create-plant";
>>>>>>> 19f3889 (rebase #5)

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
