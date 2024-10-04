import { Grid } from '@mui/material'
import React from 'react'
import { wrapper } from "@/redux/store";
import { listingView } from '@/redux/services/listingService'
import ListingBusinessComponents from '@/views/components/listing-views/ListingBusiness'
import ListingReviewsComponents from '@/views/components/listing-views/ListingReviews'
import ListingStoresComponents from '@/views/components/listing-views/ListingStores'
import ListingImageComponents from '@/views/components/listing-views/ListingImage'
import CustomContainer from '@/views/components/Container'
import ListingAboutComponents from '@/views/components/listing-views/ListingAbout'
import ListingCustomerComponents from '@/views/components/listing-views/ListingCustomer'
import ListingHeaderComponents from '@/views/components/listing-views/ListingHeader'

const ListingsView = () => {
  const ListingHeader = {
    logo: "/assets/image/music-logo.png",
    title: "Musee Musicals Pvt. Ltd.",
    location: "Chennai",
    job: "Sales & Service (13 Years in Business)",
  };
  return (
    <section>
      <CustomContainer>
        <ListingHeaderComponents ListHeader={ListingHeader} />
        <ListingImageComponents />
        <Grid container>
          <Grid item xs={12} md={8}>
            <ListingAboutComponents />
          </Grid>
          <Grid item xs={12} md={4}>
            <ListingCustomerComponents />
          </Grid>
        </Grid>
        <ListingBusinessComponents />
        <ListingReviewsComponents />
        <ListingStoresComponents />
      </CustomContainer>
    </section>
  );
};

export default ListingsView

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const [listingsView] = await Promise.all([
      await store
        .dispatch(listingView())
        .unwrap()
        .then((res) => res?.data)
        .catch(() => {
          return {
            data: [],
          };
        }),
    ]);
    return {
      props: {
        listingsView: listingsView,
      },
    };
  }
);