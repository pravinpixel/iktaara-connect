import React, { useRef, useState } from "react";
import Image from "next/image";
import { useController } from "react-hook-form";
import { Box } from "@mui/material";
import ImageComponent from "./ImageComponent";

interface ImageUploadProps {
  control?: any;
  name?: string;
  profileImage: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  name,
  control,
  profileImage,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedFile, setUploadedFile] = useState<any>(
    profileImage
      ? process.env.NEXT_PUBLIC_IKTARAA_IMAGE_URL + profileImage
      : null
  );

  const {
    field: { onChange },
  } = useController({
    name,
    control,
  });

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedFile({
          file,
          src: reader.result,
          name: file.name,
        });
        onChange(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveFile = () => {
    setUploadedFile(null);
    onChange(null);
  };

  console.log(uploadedFile, "uploadedFile");

  return (
    <section>
      <div>
        {!uploadedFile ? (
          <div
            className="flex items-center justify-center bg-ik_bluegreylighten5 w-[160px] h-[160px] rounded-xl cursor-pointer"
            onClick={handleImageClick}
          >
            Add Image
          </div>
        ) : (
          <div className="text-center w-[160px] h-[160px]">
            <Image
              src={uploadedFile.src}
              alt="Uploaded image"
              width={160}
              height={160}
              className="object-cover rounded-xl h-full w-full"
            />
          </div>
        )}

        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileUpload}
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

export default ImageUpload;
