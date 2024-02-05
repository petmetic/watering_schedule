"use client";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import * as React from "react";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add plant",
};

const FormSchema = z.object({
  id: z.number().optional(),
  name: z.string().min(2, {
    message: "Plant name must be at least 2 characters.",
  }),
  location: z.string().min(2, {
    message: "Plant location must be at least 2 characters.",
  }),
  frequency: z.string(),
  // .transform((val) => parseInt(val))
  volume: z.string().min(1, {
    message: "",
  }),
  instructions: z.string().min(1, {
    message: "Please provide instructions for taking care of the plant.",
  }),
  status: z.string().optional(),
  start: z.string(),
  end: z.string(),
});

export function PlantForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      location: "",
      frequency: "",
      volume: "",
      instructions: "",
      start: "",
      end: "",
    },
  });
  const waterVolume = [
    {
      value: "200_ml",
      name: "200 ml",
    },
    {
      value: "300_ml",
      name: "300 ml",
    },

    {
      value: "100_ml",
      name: "100 ml",
    },
  ];

  const location = [
    {
      value: "living_room_black",
      name: "living room black table & around",
    },
    {
      value: "living_room_hanging",
      name: "living room hanging",
    },
    {
      value: "special_care",
      name: "special care",
    },
  ];

  const [date, setDate] = React.useState<Date>();

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("Your form has been submitted", data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Plant Name</FormLabel>
              <FormControl>
                <Input placeholder="name of plant" {...field} />
              </FormControl>
              <FormDescription>Insert name of plant.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="living room white tables" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {location.map((location, index) => (
                    <SelectItem key={index} value={location.value}>
                      {location.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>Select location of plant.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="frequency"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Watering frequency</FormLabel>
              <FormControl>
                <Input placeholder="3" type="number" {...field} />
              </FormControl>
              <FormDescription>
                Insert time in days for watering.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="volume"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Volume of water</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="100 ml" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {waterVolume.map((waterVolume, index) => (
                    <SelectItem key={index} value={waterVolume.value}>
                      {waterVolume.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>Select volume of water.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="instructions"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Instructions</FormLabel>
              <FormControl>
                <Textarea placeholder="Water me with a mist." {...field} />
              </FormControl>
              <FormDescription>
                Insert instructions for taking care of plant.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="start"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Start watering date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[280px] justify-start text-left font-normal",
                      !date && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
                  <Select
                    onValueChange={(value) =>
                      setDate(addDays(new Date(), parseInt(value)))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="0">Today</SelectItem>
                      <SelectItem value="1">Tomorrow</SelectItem>
                      <SelectItem value="3">In 3 days</SelectItem>
                      <SelectItem value="7">In a week</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="rounded-md border">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                    />
                  </div>
                </PopoverContent>
              </Popover>
              <FormDescription>
                Pick beginning date of watering.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="end"
          render={({ field }) => (
            <FormItem>
              <FormLabel>End watering date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[280px] justify-start text-left font-normal",
                      !date && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
                  <Select
                    onValueChange={(value) =>
                      setDate(addDays(new Date(), parseInt(value)))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="0">Today</SelectItem>
                      <SelectItem value="1">Tomorrow</SelectItem>
                      <SelectItem value="3">In 3 days</SelectItem>
                      <SelectItem value="7">In a week</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="rounded-md border">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                    />
                  </div>
                </PopoverContent>
              </Popover>
              <FormDescription>Pick end date of watering.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="photo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Plant Image</FormLabel>
              <Input id="image" type="file" />
              <FormDescription>Choose plant image.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
