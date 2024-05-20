import { PlantSchema, PlantSchemaSingle } from "@/app/lib/schema";

// interface DataProps {
//   form: PlantSchema;
//   data: PlantSchemaSingle;
// }

export function prepareAddPlantData(form: any) {
  const photoField = document.getElementById("photo") as HTMLInputElement;
  const file = photoField?.files ? photoField.files[0] : null;

  let formData = new FormData();

  for (const [key, value] of Object.entries(form)) {
    if (key === "photo" && file !== null) {
      formData.set("photo", file);
    } else if (key === "start") {
      let start = form.start.toISOString();
      formData.set("start", start);
    } else if (key === "end") {
      let end = form.end.toISOString();
      formData.set("end", end);
    } else if (value !== undefined) {
      formData.append(key, value);
    }
  }
  formData.toString();
  return formData;
}

export function prepareEditPlantData(newData, data) {
  const photoField = document.getElementById("photo") as HTMLInputElement;
  const file = photoField?.files ? photoField.files[0] : null;
  console.log("file", file);

  let updatedData = new FormData();

  let oldData = data.data;
  console.log(oldData);
  console.log(newData);

  updatedData.set("id", oldData["id"]);
  console.log(updatedData);

  for (const key in oldData) {
    let oldValue = oldData[key];
    let newValue = key in newData ? newData[key] : undefined;

    if (oldValue !== newValue) {
      if (key === "photo" && file !== null) {
        updatedData.set("photo", file);
      } else if (key === "start") {
        let start = newValue.toISOString();
        updatedData.set("start", start);
      } else if (key === "end") {
        let end = newValue.toISOString();
        updatedData.set("end", end);
      } else if (newValue !== undefined) {
        updatedData.append(key, newValue);
      }
    }
  }
  console.log(updatedData);

  updatedData.toString();
  console.log("updated data in  prepareEditFunction", updatedData);
  return updatedData;
}
