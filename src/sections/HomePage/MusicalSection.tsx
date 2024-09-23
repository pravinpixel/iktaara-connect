/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomCard from '@/views/components/CustomCard'
import { Container, Grid } from '@mui/material'
import React, { Fragment } from 'react'

type Props = {
  musicsection: any;
};
const MusicalSection = (props: Props) => {
    const { musicsection } = props;
    console.log(musicsection, "musicsection");
  return (
    <section>
      <Container
        maxWidth={"lg"}
        sx={{ maxWidth: { xl: "81% !important", lg: "81%" } }}
      >
        <Grid container>
          {musicsection?.map((item: any, index: any) => (
            <Fragment key={index}>
              <Grid item xs={3} gap={2}>
                <CustomCard
                  variant="top-right"
                  img={item.image}
                  text={item.music_title}
                />
              </Grid>
            </Fragment>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default MusicalSection