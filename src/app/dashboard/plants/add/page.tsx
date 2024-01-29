import { Metadata } from "next";
<<<<<<< HEAD
// import Breadcrumbs from "@/app/ui/plants/breadcrumbs";
import { PlantForm } from "@/app/ui/plants/add-plant";
=======
import Breadcrumbs from "@/app/ui/plants/breadcrumbs";
<<<<<<< HEAD:src/app/dashboard/plants/create/page.tsx
import { PlantForm } from "@/app/ui/plants/create-plant";
>>>>>>> 19f3889 (rebase #5)
=======
import { PlantForm } from "@/app/ui/plants/add-plant";
>>>>>>> f5b3fb5 (add plant form partial):src/app/dashboard/plants/add/page.tsx

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
            label: "Add Plant",
            href: "/dashboard/plants/add",
            active: true,
          },
        ]}
      />
      <PlantForm />
    </main>
  );
}
