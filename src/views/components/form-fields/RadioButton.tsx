import { Box, Radio, Typography } from "@mui/material";
import { useController, useFormContext } from "react-hook-form";
import { useTheme } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // Example of a checkmark-filled icon
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked"; // Unselected icon

type RadioProps = {
  label: string;
  name: string;
  value: string | number;
};

const CustomRadio: React.FC<RadioProps> = ({ label, name, value }) => {
  const theme = useTheme();
  const { control } = useFormContext();
  const { field } = useController({
    control,
    name,
    defaultValue: 0,
  });

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      sx={{
        svg: {
          height: "18px",
          width: "18px",
        },
      }}
    >
      <Radio
        {...field}
        value={value}
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
        sx={{
          marginTop: 0.8,
        }}
        checked={field?.value === 1}
        onChange={(e) => {
          field?.onChange(e?.target?.checked ? 1 : 0);
        }}
      />
      <Typography
        marginLeft={1}
        sx={{ color: `${theme.palette.customColor.bluegreydarken}` }}
        variant="f14"
      >
        {label}
      </Typography>
    </Box>
  );
};

export default CustomRadio;
