import React from "react";
import { Grid } from "@mui/material";
import dynamic from "next/dynamic";
import { artistView } from "@/redux/services/artistService";
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
  artistDetailView: Artist;
}
const ArtistDetail = ({ artistDetailView }: ArtistDetailProps) => {
  console.log(artistDetailView, " artistDetailView");
  const artistHeader = {
    logo: "/assets/image/artist-logo.png",
    title: "Ramakrishna Paramahamsa",
    location: "Chennai",
    job: "Singer (13 Years in Business)",
  };

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
};

export default ArtistDetail;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const [artistDetailView] = await Promise.all([
      await store
        .dispatch(artistView())
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
