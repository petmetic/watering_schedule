import {
  baseObjectInputType,
  baseObjectOutputType,
  TypeOf,
  ZodDate,
  ZodEffects,
  ZodObject,
  ZodOptional,
  ZodString,
  ZodType,
  ZodTypeAny,
  ZodTypeDef,
} from "zod";

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

export function prepareEditPlantData(
  newData: TypeOf<
    ZodObject<
      {
        volume: ZodString;
        instructions: ZodString;
        name: ZodString;
        start: ZodDate;
        photo: ZodOptional<
          ZodEffects<
            ZodType<
              InstanceType<{
                prototype: File;
                new (
                  fileBits: BlobPart[],
                  fileName: string,
                  options?: FilePropertyBag,
                ): File;
              }>,
              ZodTypeDef,
              InstanceType<{
                prototype: File;
                new (
                  fileBits: BlobPart[],
                  fileName: string,
                  options?: FilePropertyBag,
                ): File;
              }>
            >,
            InstanceType<{
              prototype: File;
              new (
                fileBits: BlobPart[],
                fileName: string,
                options?: FilePropertyBag,
              ): File;
            }>,
            InstanceType<{
              prototype: File;
              new (
                fileBits: BlobPart[],
                fileName: string,
                options?: FilePropertyBag,
              ): File;
            }>
          >
        >;
        location: ZodString;
        end: ZodDate;
        frequency: ZodString;
        status: ZodOptional<ZodString>;
      },
      "strip",
      ZodTypeAny,
      {
        [k_1 in keyof objectUtil.addQuestionMarks<
          baseObjectOutputType<{
            volume: ZodString;
            instructions: ZodString;
            name: ZodString;
            start: ZodDate;
            photo: ZodOptional<
              ZodEffects<
                ZodType<
                  InstanceType<{
                    prototype: File;
                    new (
                      fileBits: BlobPart[],
                      fileName: string,
                      options?: FilePropertyBag,
                    ): File;
                  }>,
                  ZodTypeDef,
                  InstanceType<{
                    prototype: File;
                    new (
                      fileBits: BlobPart[],
                      fileName: string,
                      options?: FilePropertyBag,
                    ): File;
                  }>
                >,
                InstanceType<{
                  prototype: File;
                  new (
                    fileBits: BlobPart[],
                    fileName: string,
                    options?: FilePropertyBag,
                  ): File;
                }>,
                InstanceType<{
                  prototype: File;
                  new (
                    fileBits: BlobPart[],
                    fileName: string,
                    options?: FilePropertyBag,
                  ): File;
                }>
              >
            >;
            location: ZodString;
            end: ZodDate;
            frequency: ZodString;
            status: ZodOptional<ZodString>;
          }>,
          {
            [k in keyof baseObjectOutputType<{
              volume: ZodString;
              instructions: ZodString;
              name: ZodString;
              start: ZodDate;
              photo: ZodOptional<
                ZodEffects<
                  ZodType<
                    InstanceType<{
                      prototype: File;
                      new (
                        fileBits: BlobPart[],
                        fileName: string,
                        options?: FilePropertyBag,
                      ): File;
                    }>,
                    ZodTypeDef,
                    InstanceType<{
                      prototype: File;
                      new (
                        fileBits: BlobPart[],
                        fileName: string,
                        options?: FilePropertyBag,
                      ): File;
                    }>
                  >,
                  InstanceType<{
                    prototype: File;
                    new (
                      fileBits: BlobPart[],
                      fileName: string,
                      options?: FilePropertyBag,
                    ): File;
                  }>,
                  InstanceType<{
                    prototype: File;
                    new (
                      fileBits: BlobPart[],
                      fileName: string,
                      options?: FilePropertyBag,
                    ): File;
                  }>
                >
              >;
              location: ZodString;
              end: ZodDate;
              frequency: ZodString;
              status: ZodOptional<ZodString>;
            }>]: undefined extends baseObjectOutputType<{
              volume: ZodString;
              instructions: ZodString;
              name: ZodString;
              start: ZodDate;
              photo: ZodOptional<
                ZodEffects<
                  ZodType<
                    InstanceType<{
                      prototype: File;
                      new (
                        fileBits: BlobPart[],
                        fileName: string,
                        options?: FilePropertyBag,
                      ): File;
                    }>,
                    ZodTypeDef,
                    InstanceType<{
                      prototype: File;
                      new (
                        fileBits: BlobPart[],
                        fileName: string,
                        options?: FilePropertyBag,
                      ): File;
                    }>
                  >,
                  InstanceType<{
                    prototype: File;
                    new (
                      fileBits: BlobPart[],
                      fileName: string,
                      options?: FilePropertyBag,
                    ): File;
                  }>,
                  InstanceType<{
                    prototype: File;
                    new (
                      fileBits: BlobPart[],
                      fileName: string,
                      options?: FilePropertyBag,
                    ): File;
                  }>
                >
              >;
              location: ZodString;
              end: ZodDate;
              frequency: ZodString;
              status: ZodOptional<ZodString>;
            }>[k]
              ? never
              : k;
          }[keyof {
            volume: ZodString;
            instructions: ZodString;
            name: ZodString;
            start: ZodDate;
            photo: ZodOptional<
              ZodEffects<
                ZodType<
                  InstanceType<{
                    prototype: File;
                    new (
                      fileBits: BlobPart[],
                      fileName: string,
                      options?: FilePropertyBag,
                    ): File;
                  }>,
                  ZodTypeDef,
                  InstanceType<{
                    prototype: File;
                    new (
                      fileBits: BlobPart[],
                      fileName: string,
                      options?: FilePropertyBag,
                    ): File;
                  }>
                >,
                InstanceType<{
                  prototype: File;
                  new (
                    fileBits: BlobPart[],
                    fileName: string,
                    options?: FilePropertyBag,
                  ): File;
                }>,
                InstanceType<{
                  prototype: File;
                  new (
                    fileBits: BlobPart[],
                    fileName: string,
                    options?: FilePropertyBag,
                  ): File;
                }>
              >
            >;
            location: ZodString;
            end: ZodDate;
            frequency: ZodString;
            status: ZodOptional<ZodString>;
          }]
        >]: objectUtil.addQuestionMarks<
          baseObjectOutputType<{
            volume: ZodString;
            instructions: ZodString;
            name: ZodString;
            start: ZodDate;
            photo: ZodOptional<
              ZodEffects<
                ZodType<
                  InstanceType<{
                    prototype: File;
                    new (
                      fileBits: BlobPart[],
                      fileName: string,
                      options?: FilePropertyBag,
                    ): File;
                  }>,
                  ZodTypeDef,
                  InstanceType<{
                    prototype: File;
                    new (
                      fileBits: BlobPart[],
                      fileName: string,
                      options?: FilePropertyBag,
                    ): File;
                  }>
                >,
                InstanceType<{
                  prototype: File;
                  new (
                    fileBits: BlobPart[],
                    fileName: string,
                    options?: FilePropertyBag,
                  ): File;
                }>,
                InstanceType<{
                  prototype: File;
                  new (
                    fileBits: BlobPart[],
                    fileName: string,
                    options?: FilePropertyBag,
                  ): File;
                }>
              >
            >;
            location: ZodString;
            end: ZodDate;
            frequency: ZodString;
            status: ZodOptional<ZodString>;
          }>,
          {
            [k in keyof baseObjectOutputType<{
              volume: ZodString;
              instructions: ZodString;
              name: ZodString;
              start: ZodDate;
              photo: ZodOptional<
                ZodEffects<
                  ZodType<
                    InstanceType<{
                      prototype: File;
                      new (
                        fileBits: BlobPart[],
                        fileName: string,
                        options?: FilePropertyBag,
                      ): File;
                    }>,
                    ZodTypeDef,
                    InstanceType<{
                      prototype: File;
                      new (
                        fileBits: BlobPart[],
                        fileName: string,
                        options?: FilePropertyBag,
                      ): File;
                    }>
                  >,
                  InstanceType<{
                    prototype: File;
                    new (
                      fileBits: BlobPart[],
                      fileName: string,
                      options?: FilePropertyBag,
                    ): File;
                  }>,
                  InstanceType<{
                    prototype: File;
                    new (
                      fileBits: BlobPart[],
                      fileName: string,
                      options?: FilePropertyBag,
                    ): File;
                  }>
                >
              >;
              location: ZodString;
              end: ZodDate;
              frequency: ZodString;
              status: ZodOptional<ZodString>;
            }>]: undefined extends baseObjectOutputType<{
              volume: ZodString;
              instructions: ZodString;
              name: ZodString;
              start: ZodDate;
              photo: ZodOptional<
                ZodEffects<
                  ZodType<
                    InstanceType<{
                      prototype: File;
                      new (
                        fileBits: BlobPart[],
                        fileName: string,
                        options?: FilePropertyBag,
                      ): File;
                    }>,
                    ZodTypeDef,
                    InstanceType<{
                      prototype: File;
                      new (
                        fileBits: BlobPart[],
                        fileName: string,
                        options?: FilePropertyBag,
                      ): File;
                    }>
                  >,
                  InstanceType<{
                    prototype: File;
                    new (
                      fileBits: BlobPart[],
                      fileName: string,
                      options?: FilePropertyBag,
                    ): File;
                  }>,
                  InstanceType<{
                    prototype: File;
                    new (
                      fileBits: BlobPart[],
                      fileName: string,
                      options?: FilePropertyBag,
                    ): File;
                  }>
                >
              >;
              location: ZodString;
              end: ZodDate;
              frequency: ZodString;
              status: ZodOptional<ZodString>;
            }>[k]
              ? never
              : k;
          }[keyof {
            volume: ZodString;
            instructions: ZodString;
            name: ZodString;
            start: ZodDate;
            photo: ZodOptional<
              ZodEffects<
                ZodType<
                  InstanceType<{
                    prototype: File;
                    new (
                      fileBits: BlobPart[],
                      fileName: string,
                      options?: FilePropertyBag,
                    ): File;
                  }>,
                  ZodTypeDef,
                  InstanceType<{
                    prototype: File;
                    new (
                      fileBits: BlobPart[],
                      fileName: string,
                      options?: FilePropertyBag,
                    ): File;
                  }>
                >,
                InstanceType<{
                  prototype: File;
                  new (
                    fileBits: BlobPart[],
                    fileName: string,
                    options?: FilePropertyBag,
                  ): File;
                }>,
                InstanceType<{
                  prototype: File;
                  new (
                    fileBits: BlobPart[],
                    fileName: string,
                    options?: FilePropertyBag,
                  ): File;
                }>
              >
            >;
            location: ZodString;
            end: ZodDate;
            frequency: ZodString;
            status: ZodOptional<ZodString>;
          }]
        >[k_1];
      },
      {
        [k_2 in keyof baseObjectInputType<{
          volume: ZodString;
          instructions: ZodString;
          name: ZodString;
          start: ZodDate;
          photo: ZodOptional<
            ZodEffects<
              ZodType<
                InstanceType<{
                  prototype: File;
                  new (
                    fileBits: BlobPart[],
                    fileName: string,
                    options?: FilePropertyBag,
                  ): File;
                }>,
                ZodTypeDef,
                InstanceType<{
                  prototype: File;
                  new (
                    fileBits: BlobPart[],
                    fileName: string,
                    options?: FilePropertyBag,
                  ): File;
                }>
              >,
              InstanceType<{
                prototype: File;
                new (
                  fileBits: BlobPart[],
                  fileName: string,
                  options?: FilePropertyBag,
                ): File;
              }>,
              InstanceType<{
                prototype: File;
                new (
                  fileBits: BlobPart[],
                  fileName: string,
                  options?: FilePropertyBag,
                ): File;
              }>
            >
          >;
          location: ZodString;
          end: ZodDate;
          frequency: ZodString;
          status: ZodOptional<ZodString>;
        }>]: baseObjectInputType<{
          volume: ZodString;
          instructions: ZodString;
          name: ZodString;
          start: ZodDate;
          photo: ZodOptional<
            ZodEffects<
              ZodType<
                InstanceType<{
                  prototype: File;
                  new (
                    fileBits: BlobPart[],
                    fileName: string,
                    options?: FilePropertyBag,
                  ): File;
                }>,
                ZodTypeDef,
                InstanceType<{
                  prototype: File;
                  new (
                    fileBits: BlobPart[],
                    fileName: string,
                    options?: FilePropertyBag,
                  ): File;
                }>
              >,
              InstanceType<{
                prototype: File;
                new (
                  fileBits: BlobPart[],
                  fileName: string,
                  options?: FilePropertyBag,
                ): File;
              }>,
              InstanceType<{
                prototype: File;
                new (
                  fileBits: BlobPart[],
                  fileName: string,
                  options?: FilePropertyBag,
                ): File;
              }>
            >
          >;
          location: ZodString;
          end: ZodDate;
          frequency: ZodString;
          status: ZodOptional<ZodString>;
        }>[k_2];
      }
    >
  >,
  data: unknown,
) {
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
