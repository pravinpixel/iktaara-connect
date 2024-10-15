/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import dynamic from "next/dynamic";
const CustomContainer = dynamic(
  () => import("@/components/common/form-fields/Container")
);
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
      <CustomContainer>
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
                className={`${
                  expanded === index
                    ? "border-2 border-ik_bluegreydarken6 bg-ik_pink-foreground rounded-lg shadow-none mb-3"
                    : "border  border-ik_bordervariant2 bg-ik_pink-foreground rounded-lg shadow-none mb-3"
                }`}
                expanded={expanded === index}
                onChange={handleAccordionChange(index)}
                key={item.id}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  className={`${expanded === index ? "max-h-11" : ""}`}
                >
                  <Typography className="text-f18 font-semibold text-ik_bluegreydarken6">
                    {item.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="text-f16 font-normal text-ik_bluegreydarken6">
                    {item.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        </Grid>
      </CustomContainer>
    </section>
  );
};

export default FrequentlyAskedSection;
