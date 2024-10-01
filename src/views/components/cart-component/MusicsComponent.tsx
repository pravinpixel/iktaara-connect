/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import CustomCard from '../CustomCard';

type Props = {
  musicsection: any;
};
const Musicscomponent = (props: Props) => {
  const { musicsection } = props;
  return (
    <CustomCard
      variant="top-right"
      img={musicsection.image}
      text={musicsection.music_title}
      Contenttext={musicsection.music_text}
      typetop={true}
      reviews={""}
    />

  );
};

export default Musicscomponent