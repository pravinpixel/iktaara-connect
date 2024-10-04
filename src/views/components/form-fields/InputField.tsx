import {
  FormLabel,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import { useController, useFormContext } from "react-hook-form";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { InputProps as MuiInputProps } from "@mui/material";
// import { useTheme } from "@mui/material";

type InputFieldType = TextFieldProps & {
  description?: string;
  InputProps?: MuiInputProps;
};

function InputField(props: InputFieldType) {
  const {
    name = "",
    label,
    placeholder,
    description,
    multiline = false,
    rows,
    size = "small",
    sx,
    type,
    className,
    InputProps = {},
  } = props;
  const { control } = useFormContext();
  // const theme = useTheme();

  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    name,
    defaultValue: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const errorMessage = error?.message;

  return (
    <Stack>
      <FormLabel className="mb-2">{label}</FormLabel>
      {description && <Typography>{description}</Typography>}
      <TextField
        fullWidth
        {...field}
        placeholder={placeholder}
        multiline={multiline}
        rows={rows}
        size={size}
        error={!!errorMessage}
        helperText={errorMessage}
        variant="outlined"
        sx={sx}
        className={className}
        type={showPassword ? "text" : type}
        InputProps={{
          ...InputProps,
          endAdornment: type === "password" && (
            <InputAdornment position="end">
              <IconButton
                onClick={handleTogglePasswordVisibility}
                sx={{ background: "none", color: "gray" }}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  );
}

export default InputField;
