/* eslint-disable @typescript-eslint/no-explicit-any */
import { Autocomplete, Container, Grid, TextField } from "@mui/material";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const ImageComponent = dynamic(() => import("./form-fields/ImageComponent"));
const Searchcompound = dynamic(() => import("./form-fields/Searchcompound"));

interface CustomCardProps {
  placeholder: string;
  typeheader: boolean;
  typebanner: boolean;
  className: string;
}

export const AutoCompleteSearch = (props: CustomCardProps) => {
  const { placeholder, typeheader, typebanner, className, sx } = props;
  const [open, setOpen] = useState(false);
  const temp = useRef(null);

  useEffect(() => {
    if (open) {
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.overflowY = "scroll";
    } else {
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";
    }
  }, [open]);
  return (
    <>
      {typeheader && (
        <div
          className="search-bar search-bar-new"
          style={{ border: "none !important" }}
        >
          {open && <div className="backdrop active"></div>}
          <Autocomplete
            fullWidth
            id="country-select-demo"
            className={
              className
                ? className
                : "auto-item bg-ik_bluegreylighten3 h-[48px]"
            }
            sx={{ width: "100%", border: "none", ...sx }}
            getOptionLabel={(option: any) => option.product_name}
            noOptionsText={
              <>
                <p className="text-f14 text-center font-normal leading-[17px] text-ik_bluegreybluegrey">
                  Sorry we could not find the relevant one. Explore similar
                  products.
                </p>
                <div className="pt-[24px]">
                  <div className="text-f16 font-semibold leading-[20px] text-ik_bluegreydarken6 mb-2">
                    <span>Services</span>
                  </div>
                  <Searchcompound />
                </div>
              </>
            }
            renderOption={(props, option: any) => {
              return (
                <>
                  <div
                    onClick={() => {
                      window.location.href = `/buy/product/${option.product_url}`;
                    }}
                    className="w-100"
                  >
                    <div className="w-100 d-flex">
                      <div className="search-data-main">
                        <Container>
                          <Grid container>
                            <Grid item xs={12}>
                              <Grid container md={8}>
                                <Grid item md={1}>
                                  <ImageComponent
                                    src="/assets/demo/static/uparrow.png"
                                    width={13}
                                    height={13}
                                    alt="uparrow"
                                  />
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Container>
                      </div>
                    </div>
                  </div>
                </>
              );
            }}
            open={open}
            renderInput={(params) => (
              <>
                <TextField
                  {...params}
                  size="small"
                  id="basic-url"
                  autoComplete="off"
                  className="search-here"
                  sx={{ width: "100%" }}
                  ref={temp}
                  onFocus={() => {
                    setOpen(true);
                  }}
                  onBlur={() => {
                    setOpen(false);
                  }}
                  placeholder={placeholder}
                  aria-describedby="inputGroup-sizing-sm"
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <ImageComponent
                        src={"/assets/icons/search-icon.svg"}
                        width={17}
                        height={17}
                        alt={"search"}
                      />
                    ),
                  }}
                />
              </>
            )}
            options={[]}
          />
        </div>
      )}
      {typebanner && (
        <div className="w-full search-bar-new1">
          {open && <div className="backdrop active"></div>}
          <Autocomplete
            fullWidth
            id="country-select-demo"
            className="bg-white border-0"
            sx={{ width: "100%", border: "none" }}
            getOptionLabel={(option: any) => option.product_name}
            noOptionsText={
              <p className="text-f14">
                Sorry we could not find the relevant one. Explore similar
                products.
              </p>
            }
            renderOption={(props, option: any) => {
              return (
                <>
                  <div
                    onClick={() => {
                      window.location.href = `/buy/product/${option.product_url}`;
                    }}
                    className="w-100"
                  >
                    <div className="w-100 d-flex">
                      <div className="search-data-main">
                        <Container>
                          <Grid container>
                            <Grid item xs={12}>
                              <Grid container md={8}>
                                <Grid item md={1}>
                                  <ImageComponent
                                    src="/assets/demo/static/uparrow.png"
                                    width={13}
                                    height={13}
                                    alt="uparrow"
                                  />
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Container>
                      </div>
                    </div>
                  </div>
                </>
              );
            }}
            open={open}
            renderInput={(params) => (
              <>
                <TextField
                  {...params}
                  // size="small"
                  id="basic-url"
                  autoComplete="off"
                  className="search-here1"
                  sx={{ width: "100%" }}
                  ref={temp}
                  onFocus={() => {
                    setOpen(true);
                  }}
                  onBlur={() => {
                    setOpen(false);
                  }}
                  placeholder={placeholder}
                  aria-describedby="inputGroup-sizing-sm"
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <div className="bg-ik_pink p-4 cursor-pointer">
                        <ImageComponent
                          src={"/assets/icons/search-banner.svg"}
                          width={20}
                          height={20}
                          alt={"search"}
                          priority={true}
                        />
                      </div>
                    ),
                  }}
                />
              </>
            )}
            options={[]}
          />
        </div>
      )}
    </>
  );
};
