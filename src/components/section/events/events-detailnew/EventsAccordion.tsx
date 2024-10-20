// import * as React from "react";
// import Accordion, { AccordionSlots } from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Fade from "@mui/material/Fade";


// export default function EventsAccordion() {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpansion = () => {
//     setExpanded((prevExpanded) => !prevExpanded);
//   };

//   return (
//     <div>
//       <Accordion
//         expanded={expanded}
//         onChange={handleExpansion}
//         slots={{ transition: Fade as AccordionSlots["transition"] }}
//         slotProps={{ transition: { timeout: 400 } }}
//         defaultExpanded
//         sx={[
//           expanded
//             ? {
//                 "& .MuiAccordion-region": {
//                   height: "auto",
//                 },
//                 "& .MuiAccordionDetails-root": {
//                   display: "block",
//                 },
//                 '&.MuiAccordion-root': {
//       boxShadow: 'none', // Remove box shadow
//     },
//               }
//             : {
//                 "& .MuiAccordion-region": {
//                   height: 0,
//                 },
//                 "& .MuiAccordionDetails-root": {
//                   display: "none",
//                 },
//                    '&.MuiAccordion-root': {
//       boxShadow: 'none', // Remove box shadow
//     },
//               },
              
//         ]
//       }
        
//       >
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1-content"
//           id="panel1-header"
//         >
//           <Typography className="text-f22 font-semibold leading-8 text-ik_bluegreydarken3">
//             Why you should attend?
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography className="text-f18 font-normal leading-6 text-ik_bluegreydarken1">
//             Experience the magic of Nee Singham Dhan:
//           </Typography>

//           {/* <Typography className="text-f18 font-normal leading-6 text-ik_bluegreydarken1">
//             Witness the maestro weave his soulful magic live, fusing Indian
//             classical with contemporary Western influences.
//           </Typography>
//           <Typography className="text-f18 font-normal leading-6 text-ik_bluegreydarken1">
//             Sing along to all your favorites, from the chart-topping "Adiye" and
//             "Inkem Inkem Kavale" to the internet sensation "Srivalli.
//           </Typography>
//           <Typography className="text-f18 font-normal leading-6 text-ik_bluegreydarken1">
//             Immerse yourself in a captivating performance by the reigning king
//             of South Indian melodies, known for his ability to transcend genres
//             and captivate audiences across generations.
//           </Typography> */}
//           <ul className="list-disc pl-5">
//             <li>
//               <Typography className="text-f18 font-normal leading-6 text-ik_bluegreydarken1">
//                 Witness the maestro weave his soulful magic live, fusing Indian
//                 classical with contemporary Western influences.
//               </Typography>
//             </li>
//             <li>
//               <Typography className="text-f18 font-normal leading-6 text-ik_bluegreydarken1">
//                 Sing along to all your favorites, from the chart-topping Adiye
//                 and Inkem Inkem Kavale to the internet sensation Srivalli.
//               </Typography>
//             </li>
//             <li>
//               <Typography className="text-f18 font-normal leading-6 text-ik_bluegreydarken1">
//                 Immerse yourself in a captivating performance by the reigning
//                 king of South Indian melodies, known for his ability to
//                 transcend genres and captivate audiences across generations.
//               </Typography>
//             </li>
//           </ul>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion  sx={[
//           expanded
//             ? {
//                 "& .MuiAccordion-region": {
//                   height: "auto",
//                 },
//                 "& .MuiAccordionDetails-root": {
//                   display: "block",
//                 },
//                 '&.MuiAccordion-root': {
//       boxShadow: 'none', // Remove box shadow
//     },
//               }
//             : {
//                 "& .MuiAccordion-region": {
//                   height: 0,
//                 },
//                 "& .MuiAccordionDetails-root": {
//                   display: "none",
//                 },
//                    '&.MuiAccordion-root': {
//       boxShadow: 'none', // Remove box shadow
//     },
//               },
              
//         ]
//       }>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel2-content"
//           id="panel2-header"
//         >
//           <Typography className="text-f22 font-semibold leading-8 text-ik_bluegreydarken3">
//             About Event
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion  sx={[
//           expanded
//             ? {
//                 "& .MuiAccordion-region": {
//                   height: "auto",
//                 },
//                 "& .MuiAccordionDetails-root": {
//                   display: "block",
//                 },
//                 '&.MuiAccordion-root': {
//       boxShadow: 'none', // Remove box shadow
//     },
//               }
//             : {
//                 "& .MuiAccordion-region": {
//                   height: 0,
//                 },
//                 "& .MuiAccordionDetails-root": {
//                   display: "none",
//                 },
//                    '&.MuiAccordion-root': {
//       boxShadow: 'none', // Remove box shadow
//     },
//               },
              
//         ]
//       }>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel2-content"
//           id="panel2-header"
//         >
//           <Typography className="text-f22 font-semibold leading-8 text-ik_bluegreydarken3">
//             Terms & Conditions
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//     </div>
//   );
// }

// import * as React from "react";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// const accordionData = [
//   {
//     title: "Why you should attend?",
//     content: (
//       <ul className="list-disc pl-5">
//         <li>
//           <Typography className="text-f18 font-normal leading-6 text-ik_bluegreydarken1">
//             Witness the maestro weave his soulful magic live, fusing Indian
//             classical with contemporary Western influences.
//           </Typography>
//         </li>
//         <li>
//           <Typography className="text-f18 font-normal leading-6 text-ik_bluegreydarken1">
//             Sing along to all your favorites, from the chart-topping Adiye
//             and Inkem Inkem Kavale to the internet sensation Srivalli.
//           </Typography>
//         </li>
//         <li>
//           <Typography className="text-f18 font-normal leading-6 text-ik_bluegreydarken1">
//             Immerse yourself in a captivating performance by the reigning
//             king of South Indian melodies, known for his ability to
//             transcend genres and captivate audiences across generations.
//           </Typography>
//         </li>
//       </ul>
//     ),
//   },
//   {
//     title: "About Event",
//     content: (
//       <Typography>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//         malesuada lacus ex, sit amet blandit leo lobortis eget.
//       </Typography>
//     ),
//   },
//   {
//     title: "Terms & Conditions",
//     content: (
//       <Typography>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//         malesuada lacus ex, sit amet blandit leo lobortis eget.
//       </Typography>
//     ),
//   },
// ];

// export default function EventsAccordion() {
//   const [expanded, setExpanded] = React.useState<string | false>(false);

//   const handleExpansion = (panel: string) => (
//     event: React.SyntheticEvent,
//     isExpanded: boolean
//   ) => {
//     setExpanded(isExpanded ? panel : false);
//   };

//   return (
//     <div>
//       {accordionData.map((item, index) => (
//         <Accordion
//           key={index}
//           expanded={expanded === `panel${index}`}
//           onChange={handleExpansion(`panel${index}`)}
//           sx={{
//             boxShadow: "none",
//             "&.Mui-expanded": {
//               margin: 0,
//               boxShadow: "none", // Remove shadow when expanded
//             },
            
//           }}
         
      
//         >
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls={`panel${index}-content`}
//             id={`panel${index}-header`}
//           >
//             <Typography className="text-f22 font-semibold leading-8 text-ik_bluegreydarken3">
//               {item.title}
//             </Typography>
//           </AccordionSummary>
//           <AccordionDetails>{item.content}</AccordionDetails>
//         </Accordion>
//       ))}
//     </div>
//   );
// }

import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const accordionData = [
  {
    title: "Why you should attend?",
    content: (
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
    ),
  },
  {
    title: "About Event",
    content: (
      <Typography className="text-f18 font-normal leading-[26px] text-ik_bluegreydarken1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </Typography>
    ),
  },
  {
    title: "Terms & Conditions",
    content: (
      <Typography className="text-f18 font-normal leading-[26px] text-ik_bluegreydarken1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </Typography>
    ),
  },
];


const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles('dark', {
    backgroundColor: 'rgba(255, 255, 255, .05)',
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  // borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleExpansion =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

     

  return (
    <div >

      {accordionData.map((item, index) => (
      <Accordion  expanded={expanded === `panel${index}` }
          onChange={handleExpansion(`panel${index}`)}
          sx={{
            border: "none",
            "&.Mui-expanded:first-of-type": {
              marginTop: "24px",
            },
             "&.Mui-expanded:last-of-type": {
              marginBottom: "30px",
            },
            marginTop: index === 0 ? "24px" : "",
            marginBottom: index === accordionData.length - 1 ? "30px" : "",
          }}
          className="rounded-[16px] py-[0px] pl-[24px]"
          key={index}
        >
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          sx={{ backgroundColor: "white", paddingLeft: "0px" }}
        >
          <Typography className="text-f22 font-semibold leading-8 text-ik_bluegreydarken3">
            {item?.title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails  className="pt-[0px]">
          <Typography className="text-f18 font-normal leading-[26px] text-ik_bluegreydarken1">
           {item?.content}
          </Typography>
        </AccordionDetails>
      </Accordion>
       ))}
    </div>
  );
}
