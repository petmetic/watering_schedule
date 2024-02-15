"use client";
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
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Metadata } from "next";
import { POST } from "@/app/api/plants/route";
import { addPlant } from "@/app/lib/actions";

export const metadata: Metadata = {
  title: "Add plant",
};

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Plant name must be at least 2 characters.",
  }),
  location: z.string().min(2, {
    message: "Plant location must be at least 2 characters.",
  }),
  frequency: z.string(),
  volume: z.string().min(1, {
    message: "",
  }),
  instructions: z.string().min(1, {
    message: "Please provide instructions for taking care of the plant.",
  }),
  status: z.string().optional(),
  start: z.date({
    required_error: "A start date is required.",
  }),
  end: z.date({
    required_error: "An end date is required.",
  }),
  photo: z.any(),
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
    },
  });
  const waterVolume = [
    {
      value: "200 ml",
      name: "200 ml jug",
    },
    {
      value: "300 ml",
      name: "300 ml jug",
    },

    {
      value: "100 ml",
      name: "100 ml jug",
    },
  ];

  const location = [
    {
      value: "living room black table & around",
      name: "living room black table & around",
    },
    {
      value: "living room hanging",
      name: "living room hanging",
    },
    {
      value: "special care",
      name: "special care",
    },
  ];

  const [date, setDate] = React.useState<Date>();

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const newData = addPlant(data);
    const submit = POST(newData);
    // TODO: clear form
    // TODO: reply the form has been submitted
  }

  return (
    <Form {...form}>
      <form
        encType="multipart/form-data"
        id="add-plant"
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-2/3 space-y-6"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Plant Name</FormLabel>
              <FormControl>
                <Input id="name" placeholder="name of plant" {...field} />
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
                    <SelectValue
                      id="location"
                      placeholder="living room white tables"
                    />
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
                <Input
                  id="frequency"
                  placeholder="3"
                  type="number"
                  {...field}
                />
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
                    <SelectValue id="volume" placeholder="100 ml" />
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
                <Textarea
                  id="instructions"
                  placeholder="Water me with a mist."
                  {...field}
                />
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
            <FormItem className="flex flex-col">
              <FormLabel>Start of watering</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      id="start"
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground",
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>Pick start of watering date.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="end"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>End of watering</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      id="end"
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground",
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>Pick end of watering date.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="photo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Plant Image</FormLabel>
              <Input id="photo" type="file" />
              <FormDescription>Choose plant image.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" value="save">
          Submit
        </Button>
      </form>
    </Form>
  );
}
