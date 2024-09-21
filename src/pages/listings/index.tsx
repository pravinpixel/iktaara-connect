const Breadcrumb = dynamic(() => import("@/views/components/BreadCrumb"));
const Title = dynamic(() => import("@/views/components/Title"));
const BusinessSection = dynamic(
  () => import("@/views/components/listings/TopBuisness")
);

import Pagination from "@/views/components/listings/pagination";
import StudioCard from "@/views/components/listings/StudioCard";
import { Grid } from "@mui/material";
import dynamic from "next/dynamic";

const Listings = (props: any) => {
  return (
    <section>
      <Breadcrumb />
      <Title />
      <Grid container>
        <Grid item xs={3}>
          dddd
        </Grid>
        <Grid item xs={9}>
          <BusinessSection />
          <StudioCard />
          <Pagination></Pagination>
        </Grid>
      </Grid>
    </section>
  );
};

export default Listings;
