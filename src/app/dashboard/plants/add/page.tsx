import { Metadata } from "next";
// import Breadcrumbs from "@/app/ui/plants/breadcrumbs";
// import { PlantForm } from "@/app/ui/add-plant";

export const metadata: Metadata = {
  title: "Add plant",
};

export default function Page() {
  return (
    <main>
      <p>Here is plant form</p>
      {/*<PlantForm />*/}
    </main>
  );
}

// export default async function Add({params}: { plantId: string }) {
//     const plantId = params.plantId;
//     const plant = await Promise.all(fetchPlantbyId(plantId));
//
//     if (!plant) {
//         notFound();
//     }
//     return (
//         <main>
//             <Breadcrumbs
//                 breadcrumbs={[
//                     {label: 'Plants', href: 'src/app/dashboard/plants'}],
//                 {
//                     label: 'Add plant',
//                     href: 'src/app/dashboard/plants/add',
//                     active:true,
//                 },
//                     ]}/>
//             <Form/>
//         </main>
//     )
// }
