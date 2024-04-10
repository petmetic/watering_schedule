import { Suspense } from "react";
import DashboardSkeleton from "@/app/features/skeletons";
import { Metadata } from "next";
import PlantList from "@/app/features/plant-list";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Dashboard view</h1>
      <br />
      <div>
        <Suspense fallback={<DashboardSkeleton />}></Suspense>
      </div>
      <PlantList />
    </main>
  );
}
