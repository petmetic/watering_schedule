<<<<<<< HEAD
// import { Metadata } from "next";
// import Breadcrumbs from "@/app/ui/plants/breadcrumbs";
// import { PlantForm } from "@/app/ui/plants/add-plant";
//
// export const metadata: Metadata = {
//   title: "Edit Plant",
// };
//
// export default function Page() {
//   return (
//     <main>
//       <h1>Edit plant</h1>
//       <Breadcrumbs
//         breadcrumbs={[
//           { label: "Plants", href: "/dashboard/plants" },
//           {
//             label: "Add Plant",
//             href: "/dashboard/plants/add",
//             active: true,
//           },
//           {
//             label: "Edit Plant",
//             href: "/dashboard/plants/[id]/edit",
//           },
//         ]}
//       />
//       <PlantForm />
//     </main>
//   );
// }
=======
import { Metadata } from "next";
import Breadcrumbs from "@/app/ui/plants/breadcrumbs";
import { PlantForm } from "@/app/ui/plants/add-plant";

export const metadata: Metadata = {
  title: "Edit Plant",
};

export default function Page() {
  return (
    <main>
      <h1>Edit plant</h1>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Plants", href: "/dashboard/plants" },
          {
            label: "Add Plant",
            href: "/dashboard/plants/add",
            active: true,
          },
          {
            label: "Edit Plant",
            href: "/dashboard/plants/[id]/edit",
          },
        ]}
      />
      <PlantForm />
    </main>
  );
}
>>>>>>> origin/main
