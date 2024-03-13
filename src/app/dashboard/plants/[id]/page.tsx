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
import { Progress } from "@/components/ui/progress";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
export default function Page() {
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useSWR(`/api/plants/${id}`, fetcher);

  let plant = data?.data;

  if (isLoading) {
    return (
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <Progress value={33} />
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
            <TableCell>{plant.status}</TableCell>
          </TableRow>
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
