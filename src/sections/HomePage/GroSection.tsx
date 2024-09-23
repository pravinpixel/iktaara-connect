import CustomButton from "@/views/components/form-fields/CustomButton";
import ImageComponent from "@/views/components/imageComponent";
import { Container, Grid } from "@mui/material";
import React from "react";

const GroSection = () => {
  return (
    <section className="bg-ik_blue grosection py-5">
      <Container
        maxWidth={"lg"}
        sx={{ maxWidth: { xl: "88% !important", lg: "88%" } }}
      >
        <Grid container>
          <Grid item xs={7}>
            <div>
              <Grid container>
                <Grid item xs={3}>
                  <div className="groimage-section w-full">
                    <ImageComponent
                      src={"/assets/image/gro-image.webp"}
                      width={215}
                      height={279}
                      alt={"gro"}
                      priority={true}
                    />
                  </div>
                </Grid>
                <Grid item xs={9}>
                  <div className="growwwimage-section w-8/12 mt-4">
                    <ImageComponent
                      src={"/assets/image/growww.webp"}
                      width={394}
                      height={130}
                      alt={"growww"}
                      priority={true}
                    />
                  </div>
                  <div className="gor-Business-section flex items-center gap-2.5 pt-5">
                    <div>
                      <CustomButton
                        variant="task"
                        label={"Add your Business"}
                        className="text-f12 font-semibold text-ik_pink-foreground"
                      />
                    </div>
                    <div className="w-7/12">
                      <span className="text-f16 font-normal text-ik_pink-foreground ">
                        Create your store business listing online for free & get
                        customer enquiries.
                      </span>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={5} className="flex items-center">
            <Grid container>
              <Grid xs={4} pr={2}>
                <div className="gro-card-sections">
                  <div className="flex justify-center">
                    <ImageComponent
                      src={"/assets/icons/visitors.svg"}
                      width={60}
                      height={60}
                      alt={"growww"}
                      priority={true}
                    />
                  </div>
                  <div className="mt-2 ">
                    <div className="text-f28 text-center text-ik_pink-foreground font-semibold">
                      <span>5,000+</span>
                    </div>
                    <div className="text-f16 text-center text-ik_pink-foreground font-normal">
                      <span>Monthly Visitors</span>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid xs={4} pr={2}>
                <div className="gro-card-sections">
                  <div className="flex justify-center">
                    <ImageComponent
                      src={"/assets/icons/businesses.svg"}
                      width={60}
                      height={60}
                      alt={"growww"}
                      priority={true}
                    />
                  </div>
                  <div className="mt-2 ">
                    <div className="text-f28 text-center text-ik_pink-foreground font-semibold">
                      <span>10,000+</span>
                    </div>
                    <div className="text-f16 text-center text-ik_pink-foreground font-normal">
                      <span>Listed Businesses</span>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid xs={4} pr={2}>
                <div className="gro-card-sections">
                  <div className="flex justify-center">
                    <ImageComponent
                      src={"/assets/icons/enquiries.svg"}
                      width={60}
                      height={60}
                      alt={"growww"}
                      priority={true}
                    />
                  </div>
                  <div className="mt-2 ">
                    <div className="text-f28 text-center text-ik_pink-foreground font-semibold">
                      <span>1,000+</span>
                    </div>
                    <div className="text-f16 text-center text-ik_pink-foreground font-normal">
                      <span>Enquiries per month</span>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default GroSection;
