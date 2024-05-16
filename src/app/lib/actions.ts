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

export function prepareEditPlantData(form: any, oldData: any) {
  const photoField = document.getElementById("photo") as HTMLInputElement;
  const file = photoField?.files ? photoField.files[0] : null;

  let formData = new FormData();

  console.log("old data", oldData.data);
  console.log("new data", form);

  for (const [key, value] of Object.entries(oldData.data)) {
    if (key === "id") {
      formData.append(key, value);
    } else if (value !== form[key]) {
      if (key === "photo") {
        formData.append("photo", file, file.name);
      } else if (key === "start") {
        let start = form.start.toISOString();
        formData.append("start", start);
      } else if (key === "end") {
        let end = form.end.toISOString();
        formData.set("end", end);
      } else {
        formData.append(key, form[key]);
      }
    }
  }
  formData.toString();
  console.log(formData.toString());
  return formData;
}
