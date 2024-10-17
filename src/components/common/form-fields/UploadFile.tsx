/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Controller, useFieldArray, useForm, useWatch } from "react-hook-form";
import { Box } from "@mui/material";
import ImageComponent from "./ImageComponent";

interface ImageUploadProps {
  control: any;
  type: boolean;
  typeupload: boolean;
  multiple: boolean;
}

const UploadFile: React.FC<ImageUploadProps> = ({
  control,
  type,
  typeupload,
  multiple = false,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "documents", // Field name for the array
  });

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  // const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       append({ src: reader.result, name: file.name }); // Append the uploaded image
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          append({
            file, // Store the original File object
            src: reader.result, // Store the base64 string for display
            name: file.name,
          });
        };
        reader.readAsDataURL(file); // Convert file to base64
      });
    }
  };

  return (
    <section>
      {type && (
        <div>
          <div onClick={handleImageClick}>
            {fields.map((field, index) => (
              <div
                key={field.id}
                style={{
                  position: "relative",
                  width: "160px",
                  height: "160px",
                }}
              >
                <Image
                  src={field.src || ""}
                  alt={field.name}
                  layout="fill"
                  style={{
                    objectFit: "cover",
                    borderRadius: "12px",
                    cursor: "pointer",
                  }}
                />
                <ImageComponent
                  src="/assets/icons/delete-icons.svg"
                  alt="delete"
                  width={20}
                  height={20}
                  onClick={() => remove(index)} // Remove image
                  className="cursor-pointer absolute top-0 right-0"
                />
              </div>
            ))}
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileUpload}
            />
            <Controller
              name="logo"
              control={control}
              render={({ field }) => (
                <input
                  type="hidden"
                  {...field}
                  value={fields.map((f) => f.src).join(",")}
                />
              )}
            />
          </div>
        </div>
      )}
      {typeupload && (
        <div>
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
            name="documents"
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
        </div>
      )}
    </section>
  );
};

export default UploadFile;
/* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { useRef } from "react";
// import Image from "next/image";
// import { Controller, useFieldArray, useWatch } from "react-hook-form";
// import { Box } from "@mui/material";
// import ImageComponent from "./ImageComponent";

// interface ImageUploadProps {
//   control: any;
//   type: boolean;
//   typeupload: boolean;
//   multiple: boolean;
// }

// const UploadFile: React.FC<ImageUploadProps> = ({
//   control,
//   type,
//   typeupload,
//   multiple = false,
// }) => {
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   // Ensure default values are set properly
//   const { fields, append, remove } = useFieldArray({
//     control,
//     name: "images", // Field name for the array
//     defaultValues: {
//       images: [], // Set default empty array for images
//     },
//   });

//   const handleImageClick = () => {
//     fileInputRef.current?.click();
//   };

//   const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const files = event.target.files;
//     if (files) {
//       Array.from(files).forEach((file) => {
//         const reader = new FileReader();
//         reader.onloadend = () => {
//           append({ src: reader.result, name: file.name }); // Append the uploaded image
//         };
//         reader.readAsDataURL(file);
//       });
//     }
//   };

//   // Debugging: Watch the "images" field and log its current value
//   const watchedImages = useWatch({
//     control,
//     name: "images",
//   });
//   console.log("Watched Images: ", watchedImages);

//   return (
//     <section>
//       {type && (
//         <div>
//           <div onClick={handleImageClick}>
//             {fields.map((field, index) => (
//               <div
//                 key={field.id}
//                 style={{
//                   position: "relative",
//                   width: "160px",
//                   height: "160px",
//                 }}
//               >
//                 <Image
//                   src={field.src || ""}
//                   alt={field.name}
//                   layout="fill"
//                   style={{
//                     objectFit: "cover",
//                     borderRadius: "12px",
//                     cursor: "pointer",
//                   }}
//                 />
//                 <ImageComponent
//                   src="/assets/icons/delete-icons.svg"
//                   alt="delete"
//                   width={20}
//                   height={20}
//                   onClick={() => remove(index)} // Remove image using index
//                   className="cursor-pointer absolute top-0 right-0"
//                 />
//               </div>
//             ))}
//             <input
//               type="file"
//               ref={fileInputRef}
//               style={{ display: "none" }}
//               onChange={handleFileUpload}
//               multiple={multiple}
//             />
//             <Controller
//               name="logo"
//               control={control}
//               render={({ field }) => (
//                 <input
//                   type="hidden"
//                   {...field}
//                   value={fields.map((f) => f.src).join(",")}
//                 />
//               )}
//             />
//           </div>
//         </div>
//       )}
//       {typeupload && (
//         <div>
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               alignContent: "center",
//               flexDirection: "column",
//               gap: 1,
//               p: 2,
//               border: "2px dashed #E34061",
//               borderStyle: "dashed",
//               borderRadius: "6px",
//               cursor: "pointer",
//               minHeight: "195px",
//               background: "#FFEFF2",
//             }}
//             onClick={handleImageClick}
//           >
//             <div className="text-center">
//               <p className="text-f18 font-normal text-ik_pink mb-2">
//                 Click to upload or{" "}
//                 <span className="border-b border-ik_pink">Browse</span>
//               </p>
//               <span className="text-f16 font-normal text-ik_bluegreydarken2">
//                 (Supported format jpg/ gif. Less than 2MB)
//               </span>
//             </div>
//           </Box>
//           <input
//             type="file"
//             ref={fileInputRef}
//             style={{ display: "none" }}
//             onChange={handleFileUpload}
//             multiple={multiple}
//           />
//           <Controller
//             name="documents"
//             control={control}
//             render={({ field }) => (
//               <input
//                 type="hidden"
//                 {...field}
//                 value={fields.map((f) => f.src).join(",")}
//               />
//             )}
//           />
//           {fields.map((field, index) => (
//             <div key={field.id} className="flex items-center gap-2 mt-2">
//               <p className="text-f16">{field.name}</p>
//               <Box onClick={() => remove(index)}>
//                 {" "}
//                 <ImageComponent
//                   src="/assets/icons/delete-icons.svg"
//                   alt="delete"
//                   width={20}
//                   height={20}
//                   className="cursor-pointer"
//                 />
//               </Box>
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// };

// export default UploadFile;
