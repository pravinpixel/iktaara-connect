import React from "react";
import TitleComponent from "../TitleComponent";
import ImageComponent from "../ImageComponent";
import { Grid, Stack } from "@mui/material";

const ArtistAboutComponents = () => {
  const Industry = [
    {
      id: 1,
      industry_image: "/assets/icons/industry.svg",
      industry_text: "Vijay TV Awards",
      industry_title: "Super Singer Junior Award for the best performance",
      industry_data: "July 2024",
    },
    {
      id: 2,
      industry_image: "/assets/icons/industry.svg",
      industry_text: "Arupathu Moovar - Festival Of 63 Savants",
      industry_title: "Stage Performance in Sri Kapaleeswarar temple",
      industry_data: "July 2024",
    },
    {
      id: 3,
      industry_image: "/assets/icons/industry.svg",
      industry_text: "Singapore Stage Show",
      industry_title: "Standing Ovation by the huge 1,00,000+ audience crowd",
      industry_data: "July 2024",
    },
  ];
  return (
    <section>
      <div className="mb-7">
        <TitleComponent first_title="About" seconds_title="Artist" />
        <div className="text-f18 font-normal text-ik_bluegreydarken2">
          <p>
            {` I'm a fulltime musician and i've been in playing since more than 9
            years and a teaching since almost 5+ years, I'm great in
            understanding youngsters and even adults, I love blues, pop, rock
            and rnb music, with core ability to understand my student needs,
            I've completed grade 8th in rock and pop guitar from trinity music
            school of london and currently pursuing 8th grade in western vocals.`}
          </p>
        </div>
      </div>
      <div>
        <TitleComponent first_title="Industry" seconds_title="Recognitions" />
        {Industry?.map((row) => (
          <>
            <div className="flex gap-4 mb-6" key={row?.id}>
              <div>
                <ImageComponent
                  src={row?.industry_image}
                  width={72}
                  height={72}
                  alt={"arrowdown"}
                />
              </div>
              <div>
                <p className="text-f14 font-medium text-ik_bluegreydarken2">
                  {row?.industry_text}
                </p>
                <h6 className="text-f20 font-semibold text-ik_bluegreydarken3">
                  {row?.industry_title}
                </h6>
                <span className="text-f14 font-medium text-ik_bluegreylighten1">
                  {row?.industry_data}
                </span>
              </div>
            </div>
          </>
        ))}
      </div>
      <div>
        <TitleComponent first_title="Whats" seconds_title="Happening!" />
        <div>
          <div>
            <Grid container>
              <Grid item xs={12} sm={9}>
                <ImageComponent
                  src={"/assets/image/maskgroup1.webp"}
                  width={967}
                  height={400}
                  alt={"arrowdown"}
                  className="h-full rounded-2xl w-full pr-2"
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Stack
                  direction="row"
                  useFlexGap
                  sx={{ flexWrap: "wrap", height: "100%" }}
                >
                  <Grid container>
                    <Grid item xs={12}>
                      <ImageComponent
                        src={"/assets/image/maskgroup2.webp"}
                        width={241}
                        height={451}
                        alt={"arrowdown"}
                        className="h-full rounded-2xl w-full pb-1"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <ImageComponent
                        src={"/assets/image/maskgroup3.webp"}
                        width={241}
                        height={222}
                        alt={"arrowdown"}
                        className="h-full rounded-2xl w-full pt-1"
                      />
                    </Grid>
                  </Grid>
                </Stack>
              </Grid>
            </Grid>
            <div className="mt-4">
              <p className="text-f16 font-normal text-ik_bluegreylighten1">
                July 28, 2024
              </p>
              <h6 className="text-f22 font-semibold text-ik_bluegreydarken3">
                Winning the Junior super singer award from Vijay TV
              </h6>
              <span className="text-f18 font-normal text-ik_bluegreydarken1">
                Won the prestigious super signer award participated by 10,000+
                juniors across tamil nadu.
              </span>
            </div>
          </div>
          <div className="mt-7">
            <ImageComponent
              src={"/assets/image/happen1.webp"}
              width={967}
              height={451}
              alt={"arrowdown"}
              className="h-full rounded-2xl w-full"
            />
          </div>
          <div className="mt-4">
            <p className="text-f16 font-normal text-ik_bluegreylighten1">
              July 28, 2024
            </p>
            <h6 className="text-f22 font-semibold text-ik_bluegreydarken3">
              Winning the Junior super singer award from Vijay TV
            </h6>
            <span className="text-f18 font-normal text-ik_bluegreydarken1">
              Won the prestigious super signer award participated by 10,000+
              juniors across tamil nadu.
            </span>
          </div>
        </div>
        <div className="my-7 pb-5">
          <Grid container>
            <Grid item xs={6}>
              <div>
                <ImageComponent
                  src={"/assets/image/happen2.webp"}
                  width={480}
                  height={451}
                  alt={"arrowdown"}
                  className="h-full rounded-2xl w-full pr-1"
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div>
                <ImageComponent
                  src={"/assets/image/happen3.webp"}
                  width={480}
                  height={451}
                  alt={"arrowdown"}
                  className="h-full rounded-2xl w-full pl-1"
                />
              </div>
            </Grid>
          </Grid>
          <div className="mt-4">
            <p className="text-f16 font-normal text-ik_bluegreylighten1">
              July 28, 2024
            </p>
            <h6 className="text-f22 font-semibold text-ik_bluegreydarken3">
              Singapore performance show organized by MK Events
            </h6>
            <span className="text-f18 font-normal text-ik_bluegreydarken1">
              100th Outside India performance show.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistAboutComponents;
