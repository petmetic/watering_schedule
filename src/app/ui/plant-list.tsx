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

// const plants = [
//   {
//     id: "001",
//     name: "Pilea Peperomonia",
//     location: "Living room hanging",
//     status: "Watered",
//   },
//   {
//     id: "002",
//     name: "Acer campestre",
//     location: "Book shelves",
//     status: "needs watering",
//   },
//   {
//     id: "003",
//     name: "Sansevieria trifaciata",
//     location: "Book shelves",
//     status: "Watered",
//   },
// ];
export async function PlantList() {
  const plants = await GET();
  console.log(`These are from the plant-list page`);
  console.log(plants);
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
              <Image
                src={plant.photourl}
                width={150}
                height={150}
                className="hidden md:block"
                alt={`${plant.photourl}'s picture`}
              />
            </TableCell>
            <TableCell>{plant.location}</TableCell>
            <TableCell>{plant.status}</TableCell>
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
