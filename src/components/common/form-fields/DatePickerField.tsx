import { useController, useFormContext } from "react-hook-form";
import { Box, InputLabel, TextFieldProps } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePickerProps } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import React from "react";
import { DatapickerIcon } from "@/utils/theme/svg";

interface DatePickerFieldProps {
  label?: string;
  fieldProps?: TextFieldProps;
  pickerProps?: DatePickerProps<Dayjs>;
  name: string;
}

const DatePickerField: React.FC<DatePickerFieldProps> = ({
  label,
  fieldProps,
  pickerProps,
  name,
}) => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs(null));
  const { control } = useFormContext();
  const {
    field: { ref: fieldRef, ...field },
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue: null,
  });

  return (
    <Box width="100%">
      {label && (
        <InputLabel className="text-f14 text-ik_bluegreydarken1 font-normal mb-2">
          {label}
        </InputLabel>
      )}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {/* <DemoContainer components={["DatePicker"]}> */}
        <DatePicker
          label=""
          {...field}
          value={value}
          views={["year", "month"]} // Add this line to specify the views
          slots={{
            openPickerIcon: DatapickerIcon,
          }}
          slotProps={{
            field: { clearable: true, onClear: () => field.onChange(null) },
            textField: {
              helperText: error?.message,
              error: !!error?.message,
              placeholder: "Select Date",
              fullWidth: true,
              size: "small",
              ...fieldProps,
              required: false,
              inputRef: fieldRef,
              className: "text-ik_bluegreydarken3",
            },
          }}
          onChange={(newValue) => {
            setValue(newValue);
            field.onChange(newValue);
          }}
          {...pickerProps}
        />
        {/* </DemoContainer> */}
      </LocalizationProvider>
    </Box>
  );
};

export default DatePickerField;
