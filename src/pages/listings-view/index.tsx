/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomContainer from '@/views/components/Container'
import ListingAboutComponents from '@/views/components/listing-views/ListingAbout'
import ListingCustomerComponents from '@/views/components/listing-views/ListingCustomer'
import ListingHeaderComponents from '@/views/components/listing-views/ListingHeader'
import { Grid } from '@mui/material'
import React from 'react'
import { wrapper } from "@/redux/store";
import { listingView } from '@/redux/services/listingService'
import ListingBusinessComponents from '@/views/components/listing-views/ListingBusiness'
import ListingReviewsComponents from '@/views/components/listing-views/ListingReviews'
import ListingStoresComponents from '@/views/components/listing-views/ListingStores'
import ListingImageComponents from '@/views/components/listing-views/ListingImage'

const ListingsView = ({ listingsView }: any) => {
  console.log(listingsView, "event");
  return (
    <section>
      <CustomContainer>
        <ListingHeaderComponents />
        <ListingImageComponents />
        <Grid container>
          <Grid item xs={8}>
            <ListingAboutComponents />
          </Grid>
          <Grid item xs={4}>
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