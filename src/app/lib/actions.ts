import { PlantSchema, PlantSchemaSingle } from "@/app/lib/schema";

interface DataProps {
  form: PlantSchema;
  data: PlantSchemaSingle;
}

export function prepareAddPlantData(form: any) {
  const photoField = document.getElementById("photo") as HTMLInputElement;
  const file = photoField?.files ? photoField.files[0] : null;

  let formData = new FormData();

  for (const [key, value] of Object.entries(form)) {
    formData.append(key, value);
    if (key === "photo") {
      formData.set("photo", file, file.name);
    } else if (key === "start") {
      let start = form.start.toISOString();
      formData.set("start", start);
    } else if (key === "end") {
      let end = form.end.toISOString();
      formData.set("end", end);
    }
  }
  formData.toString();
  return formData;
}

export function prepareEditPlantData({ form, data }: DataProps) {
  const photoField = document.getElementById("photo") as HTMLInputElement;
  const file = photoField?.files ? photoField.files[0] : null;

  let updatedData: { [key: string]: any } = {};

  let oldData = data;
  let newData = form;

  console.log("old data", data);
  console.log("new data", form);

  let allKeys = new Set([...Object.keys(data), ...Object.keys(newData)]);

  for (const key of allKeys) {
    let oldValue = data[key];
    let newValue = newData[key];

    if (key === "id") {
      updatedData["id"] = oldData["id"];
    } else if (oldValue !== newValue) {
      updatedData[key] = newValue;
    }
  }

  console.log("updatedData", updatedData);
  return updatedData;
}
