/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Controller } from "react-hook-form";
import { Box } from "@mui/material";
import ImageComponent from "./ImageComponent";

interface ImageUploadProps {
  control: any;
  type?: string;
  typeupload?: string;
}

const SingleUpload: React.FC<ImageUploadProps> = ({ control }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedFile, setUploadedFile] = useState<any>(null); // Track the uploaded file

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Handle only one file
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedFile({
          file, // Store the original File object
          src: reader.result, // Store the base64 string for display
          name: file.name,
        });
      };
      reader.readAsDataURL(file); // Convert file to base64
    }
  };

  const handleRemoveFile = () => {
    setUploadedFile(null); // Remove the file
  };

  return (
    <section>
      <div>
        {!uploadedFile ? (
          <div
            className="flex items-center justify-center bg-ik_bluegreylighten5 w-[132px] h-[132px] rounded-[70px] cursor-pointer"
            onClick={handleImageClick}
          >
            Add Image
          </div>
        ) : (
          <div className="text-center">
            <Image
              src={uploadedFile.src}
              alt="Uploaded image"
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
        )}

        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileUpload}
        />

        <Controller
          name="document"
          control={control}
          render={({ field }) => (
            <input
              type="hidden"
              {...field}
              value={uploadedFile ? uploadedFile.src : ""}
            />
          )}
        />

        {uploadedFile && (
          <div className="flex items-center gap-2 mt-2">
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
      </div>
    </section>
  );
};

export default SingleUpload;
