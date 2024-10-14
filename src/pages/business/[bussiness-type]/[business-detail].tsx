import { Grid } from '@mui/material'
import React from 'react'
import { wrapper } from "@/redux/store";
import { listingView } from '@/redux/services/listingService'
import dynamic from 'next/dynamic';

const ListingBusinessComponents = dynamic(() => import("@/views/components/listing-views/ListingBusiness"));
const ListingReviewsComponents = dynamic(
  () => import("@/views/components/listing-views/ListingReviews")
);
const ListingStoresComponents = dynamic(
  () => import("@/views/components/listing-views/ListingStores")
);
const ListingImageComponents = dynamic(
  () => import("@/views/components/listing-views/ListingImage")
);
const CustomContainer = dynamic(() => import("@/views/components/Container"));
const ListingAboutComponents = dynamic(
  () => import("@/views/components/listing-views/ListingAbout")
);
const ListingCustomerComponents = dynamic(
  () => import("@/views/components/listing-views/ListingCustomer")
);
const ListingHeaderComponents = dynamic(
  () => import("@/views/components/listing-views/ListingHeader")
);

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