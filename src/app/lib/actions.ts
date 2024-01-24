"use server";

export async function callDjango() {
  console.log("trying to callDjango");
  const response = await fetch("http://127.0.0.1:8000/plants.json");
  const plants = await response.json();
  console.log(plants);
}
