"use client";

import { useParams, useRouter } from "next/navigation";
import useSWR from "swr";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import dayjs from "dayjs";
import { ProgressBar } from "@/app/ui/progress-bar";
import { SwitchWatered } from "@/app/ui/plants/watered-button";
import { Switch } from "@/components/ui/switch";

export function ViewPlant() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useSWR(`/api/plants/${id}`, fetcher);

  let plant = data?.data;

  let plantStartWatering = plant?.start;
  let plantStart = dayjs(plantStartWatering).format("DD MMM YYYY");

  let plantEndWatering = plant?.end;
  let plantEnd = dayjs(plantEndWatering).format("DD MMM YYYY");

  if (isLoading) {
    return (
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <ProgressBar />
      </div>
    );
  } else if (error) {
    return <p>No plant data to show</p>;
  } else {
    return (
      <Table>
        <TableCaption>Plant Detail</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Plant Name</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Instructions</TableHead>
            <TableHead>Water volume</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Start of watering</TableHead>
            <TableHead>End of watering</TableHead>
            <TableHead>Watering frequency (in days)</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow key={plant.id}>
            <TableCell className="font-medium">{plant.name}</TableCell>
            <TableCell>
              <Image
                src={plant.photo}
                width={150}
                height={150}
                className="hidden md:block"
                alt={`${plant.photo}'s picture`}
              />
            </TableCell>
            <TableCell>{plant.location}</TableCell>
            <TableCell>{plant.instructions}</TableCell>
            <TableCell>{plant.volume}</TableCell>
            <TableCell>{plant.status}</TableCell>
            <TableCell>{plantStart}</TableCell>
            <TableCell>{plantEnd}</TableCell>
            <TableCell>{plant.frequency}</TableCell>
            <TableCell>
              <Switch />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}
