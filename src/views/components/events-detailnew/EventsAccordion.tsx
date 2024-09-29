import * as React from "react";
import Accordion, { AccordionSlots } from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";

export default function EventsAccordion() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div>
      <Accordion
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade as AccordionSlots["transition"] }}
        slotProps={{ transition: { timeout: 400 } }}
        defaultExpanded
        sx={[
          expanded
            ? {
                "& .MuiAccordion-region": {
                  height: "auto",
                },
                "& .MuiAccordionDetails-root": {
                  display: "block",
                },
              }
            : {
                "& .MuiAccordion-region": {
                  height: 0,
                },
                "& .MuiAccordionDetails-root": {
                  display: "none",
                },
              },
        ]}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className="text-f22 font-semibold leading-8 text-ik_bluegreydarken3">
            Why you should attend?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-f18 font-normal leading-6 text-ik_bluegreydarken1">
            Experience the magic of Nee Singham Dhan:
          </Typography>

          {/* <Typography className="text-f18 font-normal leading-6 text-ik_bluegreydarken1">
            Witness the maestro weave his soulful magic live, fusing Indian
            classical with contemporary Western influences.
          </Typography>
          <Typography className="text-f18 font-normal leading-6 text-ik_bluegreydarken1">
            Sing along to all your favorites, from the chart-topping "Adiye" and
            "Inkem Inkem Kavale" to the internet sensation "Srivalli.
          </Typography>
          <Typography className="text-f18 font-normal leading-6 text-ik_bluegreydarken1">
            Immerse yourself in a captivating performance by the reigning king
            of South Indian melodies, known for his ability to transcend genres
            and captivate audiences across generations.
          </Typography> */}
          <ul className="list-disc pl-5">
            <li>
              <Typography className="text-f18 font-normal leading-6 text-ik_bluegreydarken1">
                Witness the maestro weave his soulful magic live, fusing Indian
                classical with contemporary Western influences.
              </Typography>
            </li>
            <li>
              <Typography className="text-f18 font-normal leading-6 text-ik_bluegreydarken1">
                Sing along to all your favorites, from the chart-topping Adiye
                and Inkem Inkem Kavale to the internet sensation Srivalli.
              </Typography>
            </li>
            <li>
              <Typography className="text-f18 font-normal leading-6 text-ik_bluegreydarken1">
                Immerse yourself in a captivating performance by the reigning
                king of South Indian melodies, known for his ability to
                transcend genres and captivate audiences across generations.
              </Typography>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className="text-f22 font-semibold leading-8 text-ik_bluegreydarken3">
            About Event
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className="text-f22 font-semibold leading-8 text-ik_bluegreydarken3">
            Terms & Conditions
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
