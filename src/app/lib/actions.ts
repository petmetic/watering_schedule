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
      let end = form.start.toISOString();
      formData.set("end", end);
    }
  }
  formData.toString();
  return formData;
}

// export function prepareDetailPlantData(data: {}) {
//   let Plant;
//
//   for (const [key, value] of Object.entries(data)) {
//     Plant.append(key, value);
//
//     let date = new Date();
//     const formattedDate = date.toLocaleString("en-US", {
//       weekday: "long",
//       year: "numeric",
//       month: "long",
//       day: "numeric"
//     });
//     if ((key === ("start" | "end")) {
//       value = formattedDate(date);
//     }
//   }
// }
