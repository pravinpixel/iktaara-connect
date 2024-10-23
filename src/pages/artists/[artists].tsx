import React from "react";
import { Grid } from "@mui/material";
import dynamic from "next/dynamic";
import { artistViewApi } from "@/redux/services/artistService";
import { wrapper } from "@/redux/store";
const AritistHeaderComponents = dynamic(
  () => import("@/components/section/artist/artist_profile/AritistHeader")
);
const AritistStoresComponents = dynamic(
  () => import("@/components/section/artist/artist_profile/AritistStores")
);
const AritistVideoComponents = dynamic(
  () => import("@/components/section/artist/artist_profile/AritistVideo")
);
const ArtistAboutComponents = dynamic(
  () => import("@/components/section/artist/artist_profile/ArtistAbout")
);
const ArtistCustomerComponents = dynamic(
  () => import("@/components/section/artist/artist_profile/ArtistCustomer")
);
const CustomContainer = dynamic(
  () => import("@/components/common/form-fields/Container")
);
const ListingBusinessComponents = dynamic(
  () => import("@/components/section/business/listing-views/ListingBusiness")
);
const ListingReviewsComponents = dynamic(
  () => import("@/components/section/business/listing-views/ListingReviews")
);
interface ArtistDetailProps {
  artistDetailView: ArtistType;
}
const ArtistDetail = ({ artistDetailView }: ArtistDetailProps) => {
  console.log(artistDetailView, artistDetailView);

  return (
    <section>
      <CustomContainer>
        <AritistHeaderComponents artistDetailView={artistDetailView} />
        <AritistVideoComponents artistDetailView={artistDetailView} />
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <ArtistAboutComponents artistDetailView={artistDetailView} />
          </Grid>
          <Grid item xs={12} md={4}>
            <ArtistCustomerComponents artistDetailView={artistDetailView} />
          </Grid>
        </Grid>
        <ListingBusinessComponents artistDetailView={artistDetailView} />
        <ListingReviewsComponents artistDetailView={artistDetailView} />
        <AritistStoresComponents artistDetailView={artistDetailView} />
      </CustomContainer>
    </section>
  );
};

export default ArtistDetail;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const [artistDetailView] = await Promise.all([
      await store
        .dispatch(artistViewApi())
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
        artistDetailView,
      },
    };
  }
);
