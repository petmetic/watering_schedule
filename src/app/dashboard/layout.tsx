import SideNav from "@/app/ui/dashboard/sidenav";
import { PlantList } from "@/app/ui/plant-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Watering Schedule",
    default: "Watering Schedule",
  },
  description: "a watering schedule for aliens living among us.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>
        <SideNav />
        <PlantList />
      </div>
    </div>
  );
}
