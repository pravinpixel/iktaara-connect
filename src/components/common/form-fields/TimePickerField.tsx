import * as React from "react";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { Box, InputLabel } from "@mui/material";
import dayjs from "dayjs";
import { useController, useFormContext } from "react-hook-form";
import { TimepickerIcon } from "@/utils/theme/svg";


type TimePickerFieldType = {
  label?: string;
  name?: string;
};



export default function TimePickerField(props: TimePickerFieldType) {
const { label, name,  } = props; 
 const { control } = useFormContext();
 const {
   field: { ref: fieldRef, ...field },
   fieldState: { error },
 } = useController({
   name,
   control,
   defaultValue: "",
 });

  return (
    <Box width={"100%"}>
      {label && (
        <InputLabel className="text-f14 text-ik_bluegreydarken1 font-normal mb-2">
          {label}
        </InputLabel>
      )}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {/* <DemoContainer components={["TimePicker"]}> */}
        <TimePicker
          {...field}
          label=""
          value={dayjs(field.value, "HH:mm:ss")}
          onChange={(e) => field.onChange(dayjs(e).format("hh:mm A"))}
          slots={{
            openPickerIcon: TimepickerIcon,
          }}
          slotProps={{
            field: { clearable: true, onClear: () => field.onChange(null) },
            textField: {
              helperText: error?.message,
              error: !!error?.message,
              placeholder: "Select Time",
              fullWidth: true,
              size: "small",
              required: false,
              inputRef: fieldRef,
            },
          }}
        />
        {/* </DemoContainer> */}
      </LocalizationProvider>
    </Box>
  );
}