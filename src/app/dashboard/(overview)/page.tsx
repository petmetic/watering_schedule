import { PlantList } from "@/app/ui/plant-list";

import { Suspense } from "react";
import { DashboardSkeleton } from "@/app/ui/skeletons";
import { Metadata } from "next";

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
      {/*<PlantList />*/}
    </main>
  );
}
