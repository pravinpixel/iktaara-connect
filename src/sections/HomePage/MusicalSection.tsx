/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomCard from '@/views/components/CustomCard'
import ImageComponent from '@/views/components/imageComponent';
import { Container, Grid } from '@mui/material'
import React, { Fragment } from 'react'

type Props = {
  musicsection: any;
};
const MusicalSection = (props: Props) => {
    const { musicsection } = props;
    console.log(musicsection, "musicsection");
  return (
    <section className="pt-7 pb-9 relative">
      <Container
        maxWidth={"lg"}
        sx={{ maxWidth: { xl: "81% !important", lg: "81%" } }}
      >
        <div className="absolute top-10 left-5">
          <ImageComponent
            src={"/assets/image/star1.webp"}
            width={127}
            height={121}
            alt={"arrowdown"}
            priority={true}
          />
        </div>
        <div className="text-f28 font-semibold mb-3 ">
          <span>Destination for everyone with musical interest</span>
        </div>
        <Grid container>
          {musicsection?.map((item: any, index: any) => (
            <Fragment key={index}>
              <Grid item xs={3} gap={2} pr={2}>
                <CustomCard
                  variant="top-right"
                  img={item.image}
                  text={item.music_title}
                  Contenttext={item.music_text}
                />
              </Grid>
            </Fragment>
          ))}
        </Grid>
        <div className="absolute bottom-5 right-8">
          <ImageComponent
            src={"/assets/image/star2.webp"}
            width={127}
            height={121}
            alt={"arrowdown"}
            priority={true}
          />
        </div>
      </Container>
    </section>
  );
};

export default MusicalSection