"use client"

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import * as z from "zod"

import {Button} from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {toast} from "@/components/ui/use-toast"
import {Textarea} from "@/components/ui/textarea";

const FormSchema = z.object({
    plantName: z.string().min(2, {
        message: "Plant name must be at least 2 characters.",
    }),
    plantLocation: z.string().min(2, {
        message: "Plant location must be at least 2 characters.",
    }),
    wateringTime: z.number().min(1, {
        message: "Watering time should be an integer, specified in days.",
    }),
    plantInstructions: z.string().min(1, {
        message: "Please provide instructions for taking care of the plant.",
    }),
})

export function PlantForm() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            plantName: "",
            plantLocation: "",
            wateringTime: 1,
            plantInstructions: "",
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
            ),
        });
            console.log("Your form has been submitted", data)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                <FormField
                    control={form.control}
                    name="plantName"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Plant Name</FormLabel>
                            <FormControl>
                                <Input placeholder="name of plant" {...field} />
                            </FormControl>
                            <FormDescription>
                                Insert name of plant.
                            </FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="plantLocation"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Location</FormLabel>
                            <FormControl>
                                <Input placeholder="bookshelves" {...field} />
                            </FormControl>
                            <FormDescription>
                                Insert location of plant.
                            </FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="wateringTime"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Watering Time</FormLabel>
                            <FormControl>
                                <Input placeholder="3" {...field} />
                            </FormControl>
                            <FormDescription>
                                Insert time in days for watering.
                            </FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="plantInstructions"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Instructions</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Water me with a mist."{...field} />
                            </FormControl>
                            <FormDescription>
                                Insert instructions for taking care of plant.
                            </FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    name="plantImage"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Plant Image</FormLabel>
                            <Input id="image" type="file"/>
                            <FormDescription>
                                Choose which picture for plant.
                            </FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}