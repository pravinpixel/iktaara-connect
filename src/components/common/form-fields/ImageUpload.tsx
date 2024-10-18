// import React, { useRef, useState } from "react";
// import Image from "next/image";
// import { Control, Controller } from "react-hook-form";
// import { Box } from "@mui/material";
// import ImageComponent from "./ImageComponent";

// interface ImageUploadProps {
//   control: Control;
//   type: boolean;
//   name: string;
//   typeupload: boolean;
//   multiple: boolean;
// }

// const ImageUpload: React.FC<ImageUploadProps> = ({
//   control,
//   name,
//   type,
//   typeupload,
//   multiple = false,
// }) => {
//   const [imageSrc, setImageSrc] = useState<string | null>();
//   // "/assets/image/music-logo.png"
//   const fileInputRef = useRef<HTMLInputElement>(null);
//   const [imageSrcs, setImageSrcs] = useState<string[]>([]);
//   const [fileNames, setFileNames] = useState<string[]>([]);

//   const handleImageClick = () => {
//     fileInputRef.current?.click();
//   };

//   const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImageSrc(reader.result as string);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleFileMultipleUpload = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const files = event.target.files;
//     if (files) {
//       const fileArray = Array.from(files);
//       const imageUrls = fileArray.map((file) => URL.createObjectURL(file));
//       setImageSrcs(imageUrls);
//       setFileNames(fileArray.map((file) => file.name));
//     }
//   };

//   const handleFileRemove = (index: number) => {
//     setFileNames((prev) => prev.filter((_, i) => i !== index));
//     setImageSrcs((prev) => prev.filter((_, i) => i !== index));
//   };

//   return (
//     <section>
//       {type && (
//         <div>
//           <div onClick={handleImageClick}>
//             {imageSrc ? (
//               <div
//                 style={{
//                   width: "160px",
//                   height: "160px",
//                   position: "relative",
//                 }}
//               >
//                 <Image
//                   src={imageSrc}
//                   alt="Profile"
//                   layout="fill"
//                   style={{
//                     objectFit: "cover",
//                     borderRadius: "12px",
//                     cursor: "pointer",
//                   }}
//                 />
//               </div>
//             ) : (
//               <div
//                 style={{
//                   width: "160px",
//                   height: "160px",
//                   backgroundColor: "lightgray",
//                   borderRadius: "12px",
//                 }}
//               />
//             )}
//           </div>
//           <input
//             type="file"
//             ref={fileInputRef}
//             style={{ display: "none" }}
//             onChange={handleFileUpload}
//           />
//           <Controller
//             name={name}
//             control={control}
//             render={({ field }) => (
//               <input type="hidden" {...field} value={imageSrc || ""} />
//             )}
//           />
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
//             onChange={handleFileMultipleUpload}
//             multiple={multiple}
//           />
//           <Controller
//             name={name}
//             control={control}
//             render={({ field }) => (
//               <input type="hidden" {...field} value={imageSrcs.join(",")} />
//             )}
//           />
//           {fileNames.map((fileName, index) => (
//             <div key={index} className="flex items-center gap-2 mt-2">
//               <p className="text-f16">{fileName}</p>
//               <ImageComponent
//                 src="/assets/icons/delete-icons.svg"
//                 alt="delete"
//                 width={20}
//                 height={20}
//                 onClick={() => handleFileRemove(index)}
//                 className="cursor-pointer"
//               />
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// };

// export default ImageUpload;

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from "react";
import Image from "next/image";
import { useController } from "react-hook-form";
import { Box } from "@mui/material";
import ImageComponent from "./ImageComponent";

interface ImageUploadProps {
  control: any;
  name: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ name, control }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedFile, setUploadedFile] = useState<any>(null); 

  
  const {
    field: { onChange},
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
        onChange({
          file, 
          src: reader.result, 
          name: file.name,
        });
      };
      reader.readAsDataURL(file); 
    }
  };

  const handleRemoveFile = () => {
    setUploadedFile(null); 
    onChange(null); 
  };

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

