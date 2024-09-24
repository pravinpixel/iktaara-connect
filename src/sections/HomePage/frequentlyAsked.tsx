/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from "@mui/material";
import { Container } from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type Props = {
  faqsection: any;
  className: string;
};

const FrequentlyAskedSection = (props: Props) => {
  const { faqsection, className } = props;
  const [expanded, setExpanded] = useState(0);
  const handleAccordionChange =
    (panel: any) => (event: any, isExpanded: any) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <section className={className}>
      <Container
        maxWidth={"lg"}
        sx={{ maxWidth: { xl: "83% !important", lg: "83%" } }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          my={3}
        >
          <Grid item xs={12} mb={3}>
            <div className="text-f28 font-semibold text-ik_bluegreydarken4 text-center">
              <span>Frequently Asked Questions</span>
            </div>
          </Grid>
          <Grid item xs={12} md={8} className="catogory-accordin">
            {faqsection?.map((item: any, index: any) => (
              <Accordion
                sx={{ mb: 2 }}
                expanded={expanded === index}
                onChange={handleAccordionChange(index)}
                key={item.id}
                className={
                  expanded === index
                    ? "selected-accordion"
                    : "unselected-accordion"
                }
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography className="text-f18 font-semibold text-ik_bluegreydarken6">
                    {item.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="text-f16 font-normal text-ik_bluegreydarken6">
                    {item.sub}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default FrequentlyAskedSection;
