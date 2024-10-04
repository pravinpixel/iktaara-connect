import { MenuItem, Typography } from "@mui/material";
import { FormLabel } from "@mui/material";
// import { styled } from "@mui/material";
import { Box } from "@mui/material";
import { Select } from "@mui/material";
import { useController, useFormContext } from "react-hook-form";
// import { selectArrow } from "../../../utils/helpers/assetHelper";
import { FormHelperText } from "@mui/material";
import { TimepickerIcon } from "@/utils/theme/svg";

// const CustomSelectIcon = styled("div")({
//   contain: '',
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   width: 16,
//   height: 10,
//   background: `url(${"/assets/icons/arrowdown.svg"})`,
//   backgroundSize: "contain",
//   backgroundRepeat: "no-repeat",
//   backgroundPosition: "center",
//   position: "relative",
//   transform: "translateX(0px) translateY(6px)",
// });
// Define the type for each option
type EssentailTypeListResponse = {
  id: number | string;
  name: string;
};

// Define the options array
const EssentailTypeListResponse = [
  { id: 10, name: "Ten" },
  { id: 20, name: "Twenty" },
  { id: 30, name: "Thirty" },
  { id: 40, name: "Forty" },
];

const renderValue = (label: string, value?: string) => {
  return !value
    ? {
        renderValue: () => <Typography>{`Select ${label}`}</Typography>,
      }
    : {};
};

const SelectField = (props: {
  label: string;
  name: string;
  options?: EssentailTypeListResponse[];
}) => {
  const { label, name, options = [] } = props;
  const { control } = useFormContext();
  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    name,
    defaultValue: null,
  });
  const dropDowns = options || [];

  const errorMessage = error?.message;
  return (
    <>
      <Box
        sx={{
          "& .MuiSelect-select": {
            padding: "7px 14px !important",
          },
        }}
      >
        <FormLabel>{label}</FormLabel>
        <Select
          size="small"
          sx={{ mt: 1, width: "100%" }}
          {...field}
          variant="outlined"
          IconComponent={TimepickerIcon}
          error={!!errorMessage}
          displayEmpty
          MenuProps={{
            sx: {
              "& ul": {
                maxHeight: "150px",
                overflow: "auto",
                marginTop: "0px",
              },
            },
          }}
          {...renderValue(label, field?.value || "")}
        >
          {dropDowns?.map((d) => (
            <MenuItem value={String(d?.id)} key={d?.id}>
              {d?.name}
            </MenuItem>
          ))}
        </Select>
        {errorMessage && (
          <FormHelperText error={!!errorMessage}>{errorMessage}</FormHelperText>
        )}
      </Box>
    </>
  );
};

export default SelectField;
