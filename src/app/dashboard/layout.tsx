import SideNav from "@/app/features/dashboard/sidenav";
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
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
