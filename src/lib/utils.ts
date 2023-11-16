import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"

// const fs = require('fs')

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

// export async function getData() {
//     const plantData = fs.readFile('plants.json');
//     let plantDataExtraction = JSON.parse(plantData);
//     console.log(plantDataExtraction);
//     let plantSpecific = plantDataExtraction.plantId;
//     console.log(plantSpecific)
//
//     return plantDataExtraction
// }