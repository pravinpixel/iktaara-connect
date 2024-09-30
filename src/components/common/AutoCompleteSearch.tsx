/* eslint-disable @typescript-eslint/no-explicit-any */
import ImageComponent from "@/views/components/ImageComponent";
import { Autocomplete, Container, Grid, TextField } from "@mui/material";
import Image from "next/image";
import {  useState } from "react";


const AutoCompleteSearch = ({ placeholder }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="search-bar search-bar-new border-none"
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
              <TextField
                {...params}
                size="small"
                id="basic-url"
                autoComplete="off"
                className="search-here"
                sx={{ width: "100%" }}
                onFocus={() => {
                  setOpen(true);
                }}
                onBlur={() => {
                  setOpen(false);
                }}
                placeholder={placeholder}
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
          )}
          options={[]}
        />
      </div>
    </>
  );
};


export default AutoCompleteSearch