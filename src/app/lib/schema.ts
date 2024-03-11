import * as z from "zod";

export const FormSchema = z.object({
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
