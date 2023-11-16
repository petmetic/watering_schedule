import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const plants = [
    {
        plantId: "001",
        plantName: "Pilea Peperomonia",
        plantLocation: "Living room hanging",
        plantStatus: "Watered",
    },
    {
        plantId: "002",
        plantName: "Acer campestre",
        plantLocation: "Book shelves",
        plantStatus: "needs watering",
    },
    {
        plantId: "003",
        plantName: "Sansevieria trifaciata",
        plantLocation: "Book shelves",
        plantStatus: "Watered",
    },
]

export function PlantList() {
    return (
        <Table>
            <TableCaption>List of plants</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Plant Name</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {plants.map((plant) => (
                    <TableRow key={plant.plantId}>
                        <TableCell className="font-medium">{plant.plantName}</TableCell>
                        <TableCell>{plant.plantLocation}</TableCell>
                        <TableCell>{plant.plantStatus}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>To be watered:</TableCell>
                    <TableCell className="text-right">1</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}
