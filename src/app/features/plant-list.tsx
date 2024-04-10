"use client";
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
import useSWR from "swr";
import { Switch } from "@/components/ui/switch";
import { ProgressBar } from "@/app/features/progress-bar";
import { ViewPlant } from "@/app/features/plants/view-plant";

export default function PlantList() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR("/api/plants", fetcher);

  let plants = data?.data?.results;

  if (isLoading) {
    return (
      <div className="flex h-screen flex-col md:flex-row">
        <ProgressBar />
      </div>
    );
  } else if (error) {
    return <p>No plant data to show</p>;
  } else {
    return (
      <Table>
        <TableCaption>List of plants</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Plant Name</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {plants.map((plant: any) => (
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
              <TableCell>
                <Switch />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>To be watered:</TableCell>
            <TableCell className="text-right">1</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );
  }
}