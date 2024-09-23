/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import CustomCard from '../CustomCard';


type Props = {
  cartData: any;
};

const CaetComponent = (props: Props) => {
  const { cartData } = props;

  return (
    <section>
      <CustomCard
        variant="bottom-right"
        img={cartData.music_image}
        img1={cartData.music_image}
        text={cartData.music_title}
        Contenttext={cartData.music_text}
      />
    </section>
  );
};

export default CaetComponent