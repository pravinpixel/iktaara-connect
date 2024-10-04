import AritistHeaderComponents from '@/views/components/artist_profile/AritistHeader';
import AritistStoresComponents from '@/views/components/artist_profile/AritistStores';
import AritistVideoComponents from '@/views/components/artist_profile/AritistVideo';
import ArtistAboutComponents from '@/views/components/artist_profile/ArtistAbout';
import ArtistCustomerComponents from '@/views/components/artist_profile/ArtistCustomer';
import CustomContainer from '@/views/components/Container'
import ListingBusinessComponents from '@/views/components/listing-views/ListingBusiness';
import ListingReviewsComponents from '@/views/components/listing-views/ListingReviews';
import { Grid } from '@mui/material';
import React from 'react'

const ArtistDetail = () => {
   const artistHeader = {
       logo: "/assets/image/artist-logo.png",
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