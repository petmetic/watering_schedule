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

const fetcher = (url: string) => fetch(url).then((res) => res.json());
export default function Page() {
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useSWR(`/api/plants/${id}`, fetcher);

  let plant = data?.data;

  if (isLoading) {
    return <p>[imagine spinner here]</p>;
  } else if (error) {
    return <p>No plant data to show</p>;
  } else {
    return (
      <main>
        <h1>View added plant</h1>
        <p>plant id: {plant.id}</p>
      </main>
    );
  }
}
