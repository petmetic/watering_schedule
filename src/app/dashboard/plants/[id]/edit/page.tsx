import { Metadata } from "next";
import Breadcrumbs from "@/app/features/plants/breadcrumbs";
import { EditPlant } from "@/app/features/plants/edit-plant";

export const metadata: Metadata = {
  title: "Edit Plant",
};

export default function Page() {
  return (
    <main>
      <h1>Edit plant</h1>
      <EditPlant />
    </main>
  );
}
