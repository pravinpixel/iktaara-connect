/* eslint-disable @typescript-eslint/no-explicit-any */
import { Grid } from '@mui/material';
import React, { Fragment } from 'react'
import CustomCard from '../CustomCard';

type Props = {
  musicsection: any;
};
const Musicscomponent = (props: Props) => {
  const { musicsection } = props;
  return (
    <Grid container>
      {musicsection?.map((item: any) => (
        <Fragment key={item?.id}>
          <Grid item xs={3} gap={2} pr={2}>
            <CustomCard
              variant="top-right"
              img={item.image}
              text={item.music_title}
              Contenttext={item.music_text}
              typetop={true}
              reviews={""}
            />
          </Grid>
        </Fragment>
      ))}
    </Grid>
  );
};

export default Musicscomponent