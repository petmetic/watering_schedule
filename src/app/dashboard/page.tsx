import { PlantList } from "@/app/ui/plant-list";
import { PlantForm } from "@/app/ui/add-plant";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Dashboard view</h1>
      <br />
      {/*<PlantList />*/}
    </main>
  );
}
