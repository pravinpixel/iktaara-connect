/* eslint-disable @typescript-eslint/no-explicit-any */
import { Grid } from "@mui/material";
import React from "react";
import { wrapper } from "@/redux/store";
import { listingView } from "@/redux/services/listingService";
import dynamic from "next/dynamic";
import { GetServerSideProps } from "next";

const ListingBusinessComponents = dynamic(
  () => import("@/components/section/business/listing-views/ListingBusiness")
);
const ListingReviewsComponents = dynamic(
  () => import("@/components/section/business/listing-views/ListingReviews")
);
const ListingStoresComponents = dynamic(
  () => import("@/components/section/business/listing-views/ListingStores")
);
const ListingImageComponents = dynamic(
  () => import("@/components/section/business/listing-views/ListingImage")
);
const CustomContainer = dynamic(
  () => import("@/components/common/form-fields/Container")
);
const ListingAboutComponents = dynamic(
  () => import("@/components/section/business/listing-views/ListingAbout")
);
const ListingCustomerComponents = dynamic(
  () => import("@/components/section/business/listing-views/ListingCustomer")
);
const ListingHeaderComponents = dynamic(
  () => import("@/components/section/business/listing-views/ListingHeader")
);

const ListingsView = ({ listingsView }: any) => {
  console.log(listingsView, "listingsView");
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
          <Grid item xs={12} md={4} pl={'6px'}>
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

export default ListingsView;

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) => async () => {
//     const [listingsView] = await Promise.all([
//       await store
//         .dispatch(listingView({ slug }))
//         .unwrap()
//         .then((res) => res?.data)
//         .catch(() => {
//           return {
//             data: [],
//           };
//         }),
//     ]);
//     return {
//       props: {
//         listingsView: listingsView,
//       },
//     };
//   }
// );
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async () => {
    // const { slug } = ctx.query as unknown as Params;

    const [listingsView] = await Promise.all([
      store
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
        listingsView,
      },
    };
  });
