export function prepareAddPlantData(form: unknown) {
  let formData = new FormData();

  for (const [key, value] of Object.entries(form)) {
    if (key === "photo" && value !== null) {
      formData.set("photo", value);
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

export function prepareEditPlantData(newData: FormData, data: unknown) {
  let updatedData = new FormData();

  let oldData = data.data;

  updatedData.set("id", oldData["id"]);

  for (const key in oldData) {
    let oldValue = oldData[key];
    let newValue = key in newData ? newData[key] : undefined;

    if (oldValue !== newValue) {
      if (key === "photo" && newValue) {
        updatedData.set("photo", newValue);
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
  return updatedData;
}
