import { PlantList } from "@/app/ui/plant-list";
import { PlantForm } from "@/app/ui/plants/create-plant";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Dashboard view</p>
      <br />
      {/*<PlantList />*/}
    </main>
  );
}
