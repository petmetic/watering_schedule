"use server";

export async function callDjango(formData) {
  const plantId = formData.get("plantId");
  const plantName = formData.get("plantName");
  const plantLocation = formData.get("plantLocation");
  const frequency = formData.get("frequency");
  const plantInstructions = formData.get("plantInstructions");
  const startWateringDate = formData.get("startWateringDate");
  const endWateringDate = formData.get("endWateringDate");

  //  TODO: get url for fetch
  const response = await fetch("#", {
    method: "POST",
    headers: {
      "Content-Type": application / json,
      // "x-api-key": process.env.CMS_API_KEY, // to make the api access private TODO: make the CMS_API_KEY
    },
    body: JSON.stringify({
      plantId,
      plantName,
      plantLocation,
      frequency,
      plantInstructions,
      startWateringDate,
      endWateringDate,
    }),
  });

  const result = await response.json();
  return result;
}
