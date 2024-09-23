import CustomButton from "@/views/components/form-fields/CustomButton";
import ImageComponent from "@/views/components/imageComponent";
import { Container, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";

const GroSection = () => {
  return (
    <section className="bg-ik_blue grosection">
      <Container
        maxWidth={"lg"}
        sx={{ maxWidth: { xl: "81% !important", lg: "81%" } }}
      >
        <Grid container>
          <Grid item xs={7}>
            <div>
              <Grid container>
                <Grid item xs={3}>
                  <div className="groimage-section">
                    <ImageComponent
                      src={"/assets/image/gro-image.webp"}
                      width={100}
                      height={100}
                      alt={"gro"}
                      priority={true}
                    />
                  </div>
                </Grid>
                <Grid item xs={9}>
                  <div className="growwwimage-section">
                    <ImageComponent
                      src={"/assets/image/growww.webp"}
                      width={100}
                      height={100}
                      alt={"growww"}
                      priority={true}
                    />
                  </div>
                  <div className="gor-Business-section flex items-center">
                    <div>
                      <CustomButton
                        variant="task"
                        label={"Add your Business"}
                        className="text-f12 font-semibold text-ik_pink-foreground"
                      />
                    </div>
                    <div>
                      <span>
                        Create your store business listing online for free & get
                        customer enquiries.
                      </span>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={5}>
            {/* <Grid xs={3}>
              <div className="gro-card-sections">
                <div className="flex ">
                  <ImageComponent
                    src={"/assets/icons/visitors.svg"}
                    width={60}
                    height={60}
                    alt={"growww"}
                    priority={true}
                  />
                </div>
              </div>
            </Grid> */}
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default GroSection;
