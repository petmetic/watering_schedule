import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";
import dayjs from "dayjs";

export function Plant(data: any) {
  let plant = data?.data.data;
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
              width={150}
              height={150}
              className="hidden md:block rounded-lg"
              alt={`${plant.photo}'s picture`}
              src={plant.photo}
            />
          </TableCell>
          <TableCell>{plant.location}</TableCell>
          <TableCell>{plant.instructions}</TableCell>
          <TableCell>{plant.volume}</TableCell>
          <TableCell>{plant.status}</TableCell>
          <TableCell>{dayjs(plant?.start).format("DD MMM YYYY")}</TableCell>
          <TableCell>{dayjs(plant?.end).format("DD MMM YYYY")}</TableCell>
          <TableCell>{plant.frequency}</TableCell>
          <TableCell>
            <Switch />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
