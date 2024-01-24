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
import { GET } from "@/app/api/plants/route";

export async function PlantList() {
  const plants = await GET(Request);
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
        {plants.map((plant) => (
          <TableRow key={plant.id}>
            <TableCell className="font-medium">{plant.name}</TableCell>
            <TableCell>
              {/*<Image*/}
              {/*  src="/img.png"*/}
              {/*  width={1000}*/}
              {/*  height={760}*/}
              {/*  className="hidden md:block"*/}
              {/*  alt="Screenshots of the dashboard project showing desktop version"*/}
              {/*/>*/}
            </TableCell>
            <TableCell>{plant.location}</TableCell>
            {/*<TableCell>{plant.status}</TableCell>*/}
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
