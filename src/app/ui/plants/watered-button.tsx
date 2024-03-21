"use client";

import { Switch } from "@/components/ui/switch";

import React from "react";
import { useParams } from "next/navigation";
import useSWR from "swr";

export function SwitchWatered() {
  function onChange() {
    const [waterStatus, setWaterStatus] = React.useState("Submit");
    // const fetcher = (url: string) => fetch(url).then((res) => res.json());
    //
    // const { id } = useParams<{ id: string }>();
    // const { data, error, isLoading } = useSWR(`/api/plants/${id}`, fetcher);
  }

  return <Switch onCheckedChange={onChange} aria-readonly />;
}
