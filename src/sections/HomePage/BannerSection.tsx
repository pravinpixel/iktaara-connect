import CustomButton from '@/views/components/form-fields/CustomButton';
import ImageComponent from '@/views/components/imageComponent';
import { Container } from '@mui/material';
import React from 'react'
// import { TextField, MenuItem, InputAdornment, IconButton } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import LocationOnIcon from "@mui/icons-material/LocationOn";

const BannerSection = () => {
  return (
    <div>
      <div className="relative">
        {/* <div className="bannerinner-text">
          <h1 className="text-ik_pink-foreground muisc-text">
            Hire Music Talents <br />
            <span className="Singers-line">Pop Singers</span>
            <span className="right-line"></span>
          </h1>
          <p className="mt-2 text-ik_pink-foreground">
            One stop to find everything with music.
          </p>
          <div className="search">
            <div className="flex mt-6 md:mt-8 w-full bg-white rounded-full overflow-hidden">
              <TextField
                select
                defaultValue="Chennai"
                variant="outlined"
                className="bg-white rounded-none pl-2"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOnIcon />
                    </InputAdornment>
                  ),
                  className: "text-black",
                  style: { border: "none" },
                }}
                sx={{ minWidth: 150 }}
              >
                <MenuItem value="Chennai">Chennai</MenuItem>
                <MenuItem value="Mumbai">Mumbai</MenuItem>
                <MenuItem value="Delhi">Delhi</MenuItem>
              </TextField>

              <TextField
                variant="outlined"
                placeholder="Artists, sound engineers, bands & more"
                className="flex-1 bg-white"
                InputProps={{
                  className: "text-black",
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton className="p-0">
                        <SearchIcon
                          style={{
                            color: "#fff",
                            backgroundColor: "#f50057",
                            borderRadius: "50%",
                          }}
                        />
                      </IconButton>
                    </InputAdornment>
                  ),
                  style: { border: "none" },
                }}
              />
            </div>
          </div>
        </div> */}
        <ImageComponent
          src={"/assets/banner/banner1.webp"}
          alt={"banner"}
          aspectRatio={3.7}
          objectFit={"content"}
          type={1}
          priority={true}
        />
      </div>
      <div className="bg-ik_redvariant1 p-2.5">
        <Container>
          <div className="flex justify-center items-center gap-4">
            <ImageComponent
              src={"assets/icons/enjoyfamily.svg"}
              width={40}
              height={40}
              alt={"enjoyfamily"}
              priority={true}
            />
            <div>
              <p className="text-f18 font-medium ">
                Enjoy family time. Book event tickets &
                <span className="font-bold"> Get 10% OFF </span>
              </p>
            </div>
            <div>
              <CustomButton
                variant="task"
                label={"VIEW SHOWS"}
                className="text-f14 font-semibold text-ik_pink-foreground"
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default BannerSection
