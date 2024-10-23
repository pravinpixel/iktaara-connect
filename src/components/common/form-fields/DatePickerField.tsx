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
  // const [value, setValue] = React.useState<Dayjs | null>(dayjs(null));
  const { control } = useFormContext();
  const {
    field: { ref: fieldRef, ...field },
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue: null,
  });

  const checkDate = (dates?: Date | string) => {
    return dayjs(dates).isValid() && dates;
  };

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
          // value={value}
          format="DD/MM/YYYY"
          value={checkDate(field?.value) ? dayjs(field?.value) : null}
          minDate={dayjs().startOf("day")}
          onChange={(date) => {
            if (date) {
              field.onChange(dayjs(date).format("YYYY-MM-DD"));
            } else {
              field.onChange(null);
            }
          }}
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
          {...pickerProps}
        />
        {/* </DemoContainer> */}
      </LocalizationProvider>
    </Box>
  );
};

export default DatePickerField;
