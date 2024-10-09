import {
  Dialog,
  TextField,
  Grid,
  DialogTitle,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { TransitionProps } from "@mui/material/transitions";
import { Slide } from "@mui/material";
import dynamic from "next/dynamic";
const ImageComponent = dynamic(() => import("../ImageComponent"));
const CustomButton = dynamic(() => import("../form-fields/CustomButton"));
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface CityLocationProps {
  handleClose: () => void;
  open?: boolean;
}

export default function CityLocation({ handleClose, open }: CityLocationProps) {
  const citycomponent_data = [
    {
      id: 1,
      city_icons: "/assets/icons/chennai.svg",
      city_name: "Chennai",
      City_Soon: "",
    },
    {
      id: 2,
      city_icons: "/assets/icons/bengaluru.svg",
      city_name: "Bengaluru",
      City_Soon: "Launching Soon",
    },
    {
      id: 3,
      city_icons: "/assets/icons/pune.svg",
      city_name: "Pune",
      City_Soon: "Launching Soon",
    },
    {
      id: 4,
      city_icons: "/assets/icons/hyderabad.svg",
      city_name: "Hyderabad",
      City_Soon: "Launching Soon",
    },
    {
      id: 5,
      city_icons: "/assets/icons/mumbai.svg",
      city_name: "Mumbai",
      City_Soon: "Launching Soon",
    },
    {
      id: 6,
      city_icons: "/assets/icons/delhi.svg",
      city_name: "Delhi",
      City_Soon: "Launching Soon",
    },
  ];

  const [selectedCity, setSelectedCity] = useState<number>(1);
  const [hoveredCity, setHoveredCity] = useState<number | null>(null);

  const handleCitySelect = (id: number) => {
    setSelectedCity(id);
  };

  return (
    <Dialog
      open={open ?? false}
      TransitionComponent={Transition}
      keepMounted
      fullWidth={true}
      maxWidth={"sm"}
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle
        sx={{
          fontSize: "36px",
          fontWeight: 600,
          textAlign: "center",
          background:
            "linear-gradient(90deg, #FF5252 30%, #2E1E5A 46%, #10BAC5 75%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Explore by city
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={(theme) => ({
          position: "absolute",
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <CloseIcon />
      </IconButton>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12}>
          <TextField
            size="small"
            placeholder="Search by city name"
            variant="outlined"
            className="filter-search-bar"
            autoFocus
            fullWidth
            sx={{
              "& .MuiInputBase-root": {
                backgroundColor: "var(--ik_bluegreylighten3)",
                borderColor: "var(--ik_bluegreylighten3)",
              },
            }}
            InputProps={{
              startAdornment: (
                <IconButton>
                  <ImageComponent
                    src="/assets/icons/search-icon.svg"
                    width={20}
                    height={20}
                    alt="search_icon"
                  />
                </IconButton>
              ),
            }}
          />
        </Grid>
        {citycomponent_data?.map((row) => (
          <Grid item xs={12} sm={6} key={row.id}>
            <div>
              <button
                className={`border rounded py-2.5 px-3.5 flex items-center w-full ${selectedCity === row.id
                  ? "border-ik_bluegreybluegrey"
                  : "border-ik_bluegreylighten4"
                  } hover:border-ik_whitevariant-foreground border-2`}
                onClick={() => handleCitySelect(row.id)}
                onMouseEnter={() => setHoveredCity(row.id)}
                onMouseLeave={() => setHoveredCity(null)}
              >
                <div>
                  <ImageComponent
                    src={row.city_icons}
                    width={100}
                    height={70}
                    alt={row.city_name}
                    className={`${hoveredCity === row.id
                      ? "filter brightness-200 text-ik_whitevariant-foreground"
                      : ""
                      }`}
                  />
                </div>
                <div className="text-start">
                  <span
                    className={`text-f16 font-medium ${hoveredCity === row.id
                      ? "text-ik_whitevariant-foreground"
                      : "text-ik_bluegreydarken3"
                      }`}
                  >
                    {row.city_name}
                  </span>
                  <p
                    className={`text-f14 font-normal ${hoveredCity === row.id
                      ? "text-ik_whitevariant-foreground"
                      : "text-ik_bluegreylighten2"
                      }`}
                  >
                    {row.City_Soon}
                  </p>
                </div>
              </button>
            </div>
          </Grid>
        ))}
        <Grid item xs={12}>
          <div className="flex justify-end pt-4">
            <CustomButton
              variant="contained"
              label={"CONTINUE"}
              className="text-f12 font-semibold text-ik_pink-foreground"
            />
          </div>
        </Grid>
      </Grid>
    </Dialog>
  );
}
