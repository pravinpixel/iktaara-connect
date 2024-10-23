/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from "react";
import { Controller, useController, useFieldArray } from "react-hook-form";
import { Box } from "@mui/material";
import ImageComponent from "./ImageComponent";
import { notify } from "@/utils/helpers/global-function";

interface ImageUploadProps {
  control: any;
  multiple: boolean;
  name: string;
}

const UploadFile: React.FC<ImageUploadProps> = ({
  control,
  name,
  multiple = false,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedFile, setUploadedFile] = useState<any>(null);
 
  const {
    field: { onChange },
  } = useController({
    name: name,
    control,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: name,
  });

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const fileArray = Array.from(files);
      if (multiple) {
        if (fields.length + fileArray.length > 5) {
          notify({
            message: "You can only upload up to 5 images.",
            success: false,
          });
          return;
        }
        fileArray.forEach((file) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            append({
              ...file,
              src: reader.result,
              name: file.name,
            });
          };
          reader.readAsDataURL(file);
        });
      } else {
        const file = fileArray[0];
        const reader = new FileReader();
        reader.onloadend = () => {
          onChange(file);
          setUploadedFile({
            file,
            src: reader.result,
            name: file.name,
          });
        };
        reader.readAsDataURL(file);
      }
    }
  };

   const handleRemoveFile = () => {
     setUploadedFile(null);
     onChange(null);
   };

  return (
    <section>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          flexDirection: "column",
          gap: 1,
          p: 2,
          border: "2px dashed #E34061",
          borderStyle: "dashed",
          borderRadius: "6px",
          cursor: "pointer",
          minHeight: "195px",
          background: "#FFEFF2",
        }}
        onClick={handleImageClick}
      >
        <div className="text-center">
          <p className="text-f18 font-normal text-ik_pink mb-2">
            Click to upload or{" "}
            <span className="border-b border-ik_pink">Browse</span>
          </p>
          <span className="text-f16 font-normal text-ik_bluegreydarken2">
            (Supported format jpg/ gif. Less than 2MB)
          </span>
        </div>
      </Box>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileUpload}
        multiple={multiple}
      />
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            type="hidden"
            {...field}
            value={fields.map((f) => f.src).join(",")}
          />
        )}
      />
      {fields.map((field, index) => (
        <div key={field.id} className="flex items-center gap-2 mt-2">
          <p className="text-f16">{field.name}</p>
          <Box onClick={() => remove(index)}>
            <ImageComponent
              src="/assets/icons/delete-icons.svg"
              alt="delete"
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </Box>
        </div>
      ))}

      {uploadedFile && (
        <div className="flex items-center gap-2 mt-2">
          <p className="text-f16">{uploadedFile?.name}</p>
          <Box onClick={handleRemoveFile}>
            <ImageComponent
              src="/assets/icons/delete-icons.svg"
              alt="delete"
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </Box>
        </div>
      )}
    </section>
  );
};

export default UploadFile;