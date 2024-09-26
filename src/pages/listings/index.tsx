import { buisnessListingApi } from "@/redux/services/listingService";
import { Box, Grid } from "@mui/material";
import dynamic from "next/dynamic";
import { wrapper } from "@/redux/store";
const Breadcrumb = dynamic(() => import("@/views/components/BreadCrumb"));
const Title = dynamic(() => import("@/views/components/Title"));
const BusinessSection = dynamic(
  () => import("@/views/components/listings/TopBuisness")
);
const CustomContainer = dynamic(() => import("@/views/components/Container"));
const FilterSection = dynamic(
  () => import("@/views/components/listings/FilterSection")
);
const Pagination = dynamic(
  () => import("@/views/components/listings/Pagination")
);
const StudioCard = dynamic(
  () => import("@/views/components/listings/StudioCard")
);

// import { ThemeContext } from "@emotion/react";s

const Listings = ({ buisnessListData }: any) => {
  return (
    <>
      {" "}
      <section className="bg-ik_white">
        <CustomContainer>
          {" "}
          <Breadcrumb />
          <Box sx={{ mt: 1, mb: 2 }}>
            <Title
              className="text-ik_blue font-bold text-f38 leading-8"
              secondaryClass="text-ik_bluegreydarken2 font-normal text-f18 leading-6"
            />
          </Box>
        </CustomContainer>
      </section>
      <section className="bg-ik_lightblue">
        <CustomContainer>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <FilterSection />
            </Grid>
            <Grid item xs={9}>
              <BusinessSection />
              <StudioCard buisnessListData={buisnessListData} />
              <Pagination from={0} to={0} total_count={0}></Pagination>
            </Grid>
          </Grid>
        </CustomContainer>
      </section>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    // Data to return in the catch block
    const fallbackData = {
      current_page: 1,
      data: [
        {
          id: 1,
          title: "Violin Repairist in Chennai",
          description: "120 Reparist available in Chennai",
          image: "/images/static/image_13.png",
          logo_image: "/images/static/image_12.png",
          rating: 4.2,
          reviews: 20,
          total_enquiries: 120,
          total_views: null,
          categories: null,
          location: "Nungambakkam,Chennai",
          experience: 10,
          created_at: "2024-09-22T12:34:56.000000Z",
          updated_at: "2024-09-22T12:34:56.000000Z",
        },
        {
          id: 2,
          title: "Violin Repairist in Chennai",
          description: "120 Reparist available in Chennai",
          image: "/images/static/image_13.png",
          logo_image: "/images/static/image_12.png",
          rating: 4.2,
          reviews: 20,
          total_enquiries: 120,
          total_views: null,
          categories: null,
          location: "Nungambakkam,Chennai",
          experience: 10,
          created_at: "2024-09-22T12:34:56.000000Z",
          updated_at: "2024-09-22T12:34:56.000000Z",
        },
        {
          id: 3,
          title: "Violin Repairist in Chennai",
          description: "120 Reparist available in Chennai",
          image: "/images/static/image_13.png",
          logo_image: "/images/static/image_12.png",
          rating: 4.2,
          reviews: 20,
          total_enquiries: 120,
          total_views: null,
          categories: null,
          location: "Nungambakkam,Chennai",
          experience: 10,
          created_at: "2024-09-22T12:34:56.000000Z",
          updated_at: "2024-09-22T12:34:56.000000Z",
        },
      ],
      first_page_url: "http://example.com/api/items?page=1",
      from: 1,
      last_page: 10,
      last_page_url: "http://example.com/api/items?page=10",
      links: [
        {
          url: null,
          label: "&laquo; Previous",
          active: false,
        },
        {
          url: "http://example.com/api/items?page=1",
          label: "1",
          active: true,
        },
        {
          url: "http://example.com/api/items?page=2",
          label: "2",
          active: false,
        },
        {
          url: "http://example.com/api/items?page=3",
          label: "3",
          active: false,
        },
        {
          url: null,
          label: "Next &raquo;",
          active: false,
        },
      ],
      next_page_url: "http://example.com/api/items?page=2",
      path: "http://example.com/api/items",
      per_page: 10,
      prev_page_url: null,
      to: 10,
      total: 100,
    };

    const [buisnessListData] = await Promise.all([
      await store
        .dispatch(buisnessListingApi())
        .unwrap()
        .then((res: any) => res)
        .catch(() => {
          return fallbackData;
        }),
    ]);

    return {
      props: {
        buisnessListData: buisnessListData,
      },
    };
  }
);

export default Listings;
