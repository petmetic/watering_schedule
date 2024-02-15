export function addPlant(form: HTMLFormElement) {
  const photoField = document.getElementById("photo") as HTMLInputElement;
  const file = photoField?.files ? photoField.files[0] : null;

  let formData = new FormData();

  for (const [key, value] of Object.entries(form)) {
    formData.append(key, value);
    if (key == "photo") {
      formData.set("photo", file, file.name);
    } else if (key == "start") {
      let start = form.start.toISOString();
      formData.set("start", start);
    } else if (key == "end") {
      let end = form.start.toISOString();
      formData.set("end", end);
    }
  }
  return formData;
}
