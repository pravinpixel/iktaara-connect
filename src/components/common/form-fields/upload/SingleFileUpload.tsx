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
import ImageComponent from "../ImageComponent";
import { log } from "console";
import { Login } from "@mui/icons-material";

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

const SingleFileUpload = (
  props: any & { control: Control; multiple: boolean }
) => {
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
  const handleDeleteImage = () => {
    field.onChange("");
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
          minHeight: "95px",
          background: "#FFEFF2",
        }}
        onClick={() => {
          fileInputRef?.current?.click();
        }}
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

      <div className="flex items-center gap-2 mt-2">
        <p className="text-f16">{convertUrl(field.value)}</p>
        {field.value && (
          <Box onClick={() => handleDeleteImage()}>
            <ImageComponent
              src="/assets/icons/delete-icons.svg"
              alt="delete"
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </Box>
        )}
      </div>
 {error?.message && (
            <FormHelperText>
              {error?.message}
            </FormHelperText>
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

export default SingleFileUpload;
