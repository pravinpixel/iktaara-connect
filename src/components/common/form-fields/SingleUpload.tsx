// import React, { useRef, useState } from "react";
// import Image from "next/image";
// import { useController } from "react-hook-form";
// import { Box } from "@mui/material";
// import ImageComponent from "./ImageComponent";

// interface ImageUploadProps {
//   control: any;
//   name: string;
//   type?: string;
//   typeupload?: string;
// }

// const SingleUpload: React.FC<ImageUploadProps> = ({ name, control }) => {
//   const fileInputRef = useRef<HTMLInputElement>(null);
//   const [uploadedFile, setUploadedFile] = useState<any>(null); // Track the uploaded file

//   // Get the field's onChange, value, and other input props from useController
//   const {
//     field: { onChange, value },
//   } = useController({
//     name, // The name of the form field
//     control, // The control object from react-hook-form
//   });

//   const handleImageClick = () => {
//     fileInputRef.current?.click(); // Simulate a click on the hidden file input
//   };

//   const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0]; // Handle only one file
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setUploadedFile({
//           file, // Store the original File object
//           src: reader.result, // Store the base64 string for display
//           name: file.name,
//         });
//         onChange({
//           ...file, // Store the original File object
//           src: reader.result, // Pass the base64 string as the value for the form
//         }); // Update the form value
//       };
//       reader.readAsDataURL(file); // Convert the file to base64
//     }
//   };

//   const handleRemoveFile = () => {
//     setUploadedFile(null);
//     onChange(null);
//   };

//   return (
//     <section>
//       <div>
//         {!uploadedFile ? (
//           <div
//             className="flex items-center justify-center bg-ik_bluegreylighten5 w-[132px] h-[132px] rounded-[70px] cursor-pointer"
//             onClick={handleImageClick}
//           >
//             Add Image
//           </div>
//         ) : (
//           <div className="text-center">
//             <Image
//               src={uploadedFile.src}
//               alt="Uploaded image"
//               width={150}
//               height={150}
//               className="object-contain"
//             />
//           </div>
//         )}

//         <input
//           type="file"
//           ref={fileInputRef}
//           style={{ display: "none" }}
//           onChange={handleFileUpload}
//         />

//         {uploadedFile && (
//           <div className="flex items-center gap-2 mt-2">
//             <Box onClick={handleRemoveFile}>
//               <ImageComponent
//                 src="/assets/icons/delete-icons.svg"
//                 alt="delete"
//                 width={20}
//                 height={20}
//                 className="cursor-pointer"
//               />
//             </Box>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default SingleUpload;

/**
 * This file is part of IKTARAA_CONNECT.
 *
 * Its is form Field
 * It used for uploading documents in Form Fields
 *
 */
import { Ref, useRef, forwardRef } from "react";
import {
  Path,
  Control,
  PathValue,
  FieldError,
  useController,
  UseControllerProps,
} from "react-hook-form";

import {
  Box,
  Button,
  InputLabel,
  Typography,
  ButtonGroup,
  FormHelperText,
} from "@mui/material";

import { stringFileName } from "@/utils/helpers/global-function";
import ImageComponent from "./ImageComponent";

type FormValues = {
  [key: string]: unknown;
};

type CustomErrorType = FieldError & {
  [key: string]: FieldError;
};

const convertUrl = (document: DocumentsType) => {
  let name = document?.name;
  const doc = document?.document_url?.split("/")?.slice(-1)?.[0] || "";
  name = name || doc;
  return name;
};

const SingleUpload = (props: any & { control: Control; multiple: boolean }) => {
  const { name, control, multiple = false } = props;
  const fileInputRef = useRef<HTMLInputElement>(null);
  const {
    field: { ref: fieldRef, ...field },
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue: multiple ? [] : "",
  });
  // const isViewPage = useWatch({ control, name: PROJECT_CONSTANTS.isViewPage as Path<T> });

  const FileName = multiple
    ? (field?.value as unknown as File[])?.length + " File Selected"
    : (field?.value as unknown as File)?.name ??
      stringFileName(field.value as unknown as string);
  const handleUpload = () => {
    if (fileInputRef?.current?.files)
      if (multiple) {
        field.onChange([
          ...((field.value as Path<T>) || []),
          ...(fileInputRef?.current?.files || []),
        ]);
      } else field.onChange(fileInputRef?.current?.files?.[0]);
  };
  const handleDeleteImage = (index: number) => {
    const updatedImages = (field?.value as unknown as File[]).filter(
      (_, i) => i !== index
    );
    field.onChange(updatedImages);
  };

  return (
    <section>
      {!field?.value ? (
        <div
          className="flex items-center justify-center bg-ik_bluegreylighten5 w-[132px] h-[132px] rounded-[70px] cursor-pointer"
          onClick={() => {
            fileInputRef?.current?.click();
          }}
        >
          Add Image
        </div>
      ) : (
        <div className="text-center">
          <ImageComponent
            src=""
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
        hidden
        multiple={multiple}
        onChange={handleUpload}
      />
    </section>
  );
};

export default SingleUpload;
