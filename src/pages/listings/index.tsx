const Breadcrumb = dynamic(() => import("@/views/components/BreadCrumb"));
const Title = dynamic(() => import("@/views/components/Title"));
const BusinessSection = dynamic(
  () => import("@/views/components/listings/TopBuisness")
);

import CustomContainer from "@/views/components/Container";
import FilterSection from "@/views/components/listings/FilterSection";
import Pagination from "@/views/components/listings/pagination";
import StudioCard from "@/views/components/listings/StudioCard";
// import { ThemeContext } from "@emotion/react";s
import { Box, Grid } from "@mui/material";
import dynamic from "next/dynamic";

const Listings = () => {
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
              <StudioCard />
              <Pagination from={0} to={0} total_count={0}></Pagination>
            </Grid>
          </Grid>
        </CustomContainer>
      </section>
    </>
  );
};

export default Listings;