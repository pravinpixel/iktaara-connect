import { MenuItem, Typography } from "@mui/material";
import { FormLabel } from "@mui/material";
import { Box } from "@mui/material";
import { Select } from "@mui/material";
import { useController, useFormContext } from "react-hook-form";
import { FormHelperText } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


type EssentailTypeListResponse = {
  id: number | string;
  name: string;
};

const EssentailTypeListResponse = [
  { id: 10, name: "Ten" },
  { id: 20, name: "Twenty" },
  { id: 30, name: "Thirty" },
  { id: 40, name: "Forty" },
];

const renderValue = (label: string) => (selected: any) => {
  if (selected.length === 0) {
    return <Typography>{`Select ${label}`}</Typography>;
  }
  return selected.map((value: string) => value).join(", ");
};


const MultipleSelectField = (props: {
  label: string;
  name: string;
  options?: EssentailTypeListResponse[];
  placeholder?: string;
}) => {
  const { label, name, options = [], placeholder } = props;
  const { control } = useFormContext();
  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    name,
    defaultValue: [],
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
          placeholder={placeholder}
          IconComponent={KeyboardArrowDownIcon}
          error={!!errorMessage}
          multiple
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
      renderValue={renderValue(label)}
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

export default MultipleSelectField;
