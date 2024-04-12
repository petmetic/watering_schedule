import { Metadata } from "next";
import PlantList from "@/app/features/plant-list";

export const metadata: Metadata = {
  title: "Plants",
};

export default function Page() {
  return (
    <main>
      <h1>View plant list</h1>
      <br />
      <br />
      <PlantList />
    </main>
  );
}
