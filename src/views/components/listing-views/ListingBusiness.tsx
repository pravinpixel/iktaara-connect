import { Grid } from "@mui/material";
import React from "react";
import ImageComponent from "../ImageComponent";
import { Rating } from "@mui/material";
import CustomButton from "../form-fields/CustomButton";

const ListingBusinessComponents = () => {
  const [value, setValue] = React.useState<number | null>(0);

  return (
    <section className="mb-5">
      <div className="text-f26 font-bold mb-2">
        <h6 className="text-ik_bluegreydarken3">
          Business <span className="text-ik_pink">Reviews</span>
        </h6>
      </div>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <div className="bg-ik_bluegreylighten3 rounded-[18px] py-8 px-16">
            <Grid container>
              <Grid item xs={6}>
                <div className="flex gap-3 border-r border-ik_bluegreylightens3">
                  <ImageComponent
                    src={"assets/icons/star-icons.svg"}
                    width={60}
                    height={60}
                    alt={"arrowdown"}
                  />
                  <div>
                    <p className="text-f68 font-bold text-ik_bluegreydarken3 text-start">
                      4.5<span className="font-normal">/5</span>
                    </p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="text-center">
                  <div>
                    <Rating
                      name="simple-controlled"
                      value={value}
                      size="large"
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </div>
                  <div className="mt-2">
                    <button className="py-3.5 px-5 border border-ik_bluegreylightens3 bg-ik_white rounded-lg">
                      <span>Write a Review</span>
                    </button>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="askcolor px-10 py-12 rounded-[18px]">
            <div className="flex gap-6 justify-between">
              <div className="flex gap-6">
                <div>
                  <ImageComponent
                    src={"assets/icons/messenger-icons.svg"}
                    width={54}
                    height={54}
                    alt={"arrowdown"}
                  />
                </div>
                <div>
                  <h6 className="text-f28 font-semibold text-ik_blue-foreground">
                    Ask Business
                  </h6>
                  <span className="text-f18 font-normal text-ik_blue-foreground">
                    Get your queries resolved instantly
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-end">
                <CustomButton variant="contained" label="Enquire" />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default ListingBusinessComponents;
