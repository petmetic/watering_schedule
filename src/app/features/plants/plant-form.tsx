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

import { formSchemaSubmit, PlantSchemaSingle } from "@/app/lib/schema";
import Image from "next/image";

interface PlantProps {
  onSubmit: (data: z.infer<typeof formSchemaSubmit>) => void;
  plant?: PlantSchemaSingle;
}

export function PlantForm({ plant, onSubmit }: PlantProps) {
  const form = useForm<z.infer<typeof formSchemaSubmit>>({
    resolver: zodResolver(formSchemaSubmit),
    defaultValues: {
      name: plant?.name || "",
      location: plant?.location || "Select plant location",
      frequency: String(plant?.frequency) || "0",
      start: plant?.start ? new Date(plant?.start) : undefined,
      end: plant?.end ? new Date(plant?.end) : undefined,
      volume: plant?.volume || "Select volume of water",
      instructions: plant?.instructions || "",
    },
  });
  const waterVolume = [
    {
      value: "200_ml",
      name: "200 ml jug",
    },
    {
      value: "300_ml",
      name: "300 ml jug",
    },

    {
      value: "100_ml",
      name: "100 ml jug",
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

  return (
    <Form {...form}>
      <form
        encType="multipart/form-data"
        id="plant-form"
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-2/3 space-y-6"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel data-testid="plant-name-label">Plant Name</FormLabel>
              <FormControl>
                <Input
                  data-testid="plant-name"
                  id="name"
                  placeholder="name of plant"
                  {...field}
                />
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
              <FormLabel data-testid="plant-location">Location</FormLabel>
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
              <FormLabel data-testid="plant-frequency">
                Watering frequency
              </FormLabel>
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
        <div>
          <FormField
            control={form.control}
            name="photo"
            render={({ field: { value, onChange, ...fieldProps } }) => (
              <FormItem>
                <FormLabel>Plant Image</FormLabel>
                {plant?.photo && (
                  <Image
                    src={plant?.photo}
                    width={70}
                    height={70}
                    className="hidden md:block rounded-full"
                    alt={`${plant?.photo}'s picture`}
                  />
                )}
                <Input
                  {...fieldProps}
                  id="photo"
                  name="photo"
                  type="file"
                  accept="image/*"
                  onChange={(event) =>
                    onChange(event.target.files && event.target.files[0])
                  }
                />
                <FormDescription>Choose plant image.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" value="save">
          Submit
        </Button>
      </form>
    </Form>
  );
}
