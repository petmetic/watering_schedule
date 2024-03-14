import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// const fs = require('fs')

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
