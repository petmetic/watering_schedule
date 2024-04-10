import * as React from "react";
import { Logo } from "@/components/ui/icons";
import { lusitana } from "@/app/features/fonts";

export default function WsLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <Logo />
      <p className="text-[20px] ml-4">Watering Schedule</p>
    </div>
  );
}
