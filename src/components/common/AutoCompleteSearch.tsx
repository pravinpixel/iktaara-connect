/* eslint-disable @typescript-eslint/no-explicit-any */
import ImageComponent from "@/views/components/ImageComponent";
import { Autocomplete, Container, Grid, TextField } from "@mui/material";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface CustomCardProps {
  placeholder: string;
  typeheader: boolean;
  typebanner: boolean;
}

export const AutoCompleteSearch = (props: CustomCardProps) => {
  const { placeholder, typeheader, typebanner } = props;
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
            className="auto-item"
            sx={{ width: "100%", border: "none" }}
            getOptionLabel={(option: any) => option.product_name}
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
                                  <Image
                                    src="/images/demo/static/uparrow.png"
                                    width={13}
                                    height={13}
                                    alt=""
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
                        src={"assets/icons/search-icon.svg"}
                        width={17}
                        height={17}
                        alt={"search"}
                        priority={true}
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
                                  <Image
                                    src="/images/demo/static/uparrow.png"
                                    width={13}
                                    height={13}
                                    alt=""
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
                          src={"assets/icons/search-banner.svg"}
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
