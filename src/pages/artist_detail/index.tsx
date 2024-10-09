import React from "react";
import { Grid } from '@mui/material';
import dynamic from 'next/dynamic';

const AritistHeaderComponents = dynamic(
  () => import("@/views/components/artist_profile/AritistHeader")
);
const AritistStoresComponents = dynamic(
  () => import("@/views/components/artist_profile/AritistStores")
);
const AritistVideoComponents = dynamic(
  () => import("@/views/components/artist_profile/AritistVideo")
);
const ArtistAboutComponents = dynamic(
  () => import("@/views/components/artist_profile/ArtistAbout")
);
const ArtistCustomerComponents = dynamic(
  () => import("@/views/components/artist_profile/ArtistCustomer")
);
const CustomContainer = dynamic(() => import("@/views/components/Container"));
const ListingBusinessComponents = dynamic(
  () => import("@/views/components/listing-views/ListingBusiness")
);
const ListingReviewsComponents = dynamic(
  () => import("@/views/components/listing-views/ListingReviews")
);


const ArtistDetail = () => {
  const artistHeader = {
    logo: "//assets/image/artist-logo.png",
    title: "Ramakrishna Paramahamsa",
    location: "Chennai",
    job: "Singer (13 Years in Business)",
  }

  return (
    <section>
      <CustomContainer>
        <AritistHeaderComponents ListHeader={artistHeader} />
        <AritistVideoComponents />
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <ArtistAboutComponents />
          </Grid>
          <Grid item xs={12} md={4}>
            <ArtistCustomerComponents />
          </Grid>
        </Grid>
        <ListingBusinessComponents />
        <ListingReviewsComponents />
        <AritistStoresComponents />
      </CustomContainer>
    </section>
  );
}

export default ArtistDetail