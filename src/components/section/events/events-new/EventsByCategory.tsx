/* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable react/jsx-key */
// /* eslint-disable react/jsx-no-undef */
// import React from "react";
// import { Box, Typography } from "@mui/material";
// import dynamic from "next/dynamic";
// const CustomContainer = dynamic(() => import("../Container"));
// import { Stack } from "@mui/material";
// const CustomCardEventsCategory = dynamic(
//   () => import("../CustomCardsEventsCategory")
// );

// type EventsTitleProps = {
//   label: string;
//   eventByCate: any;
//   className: string;
// };

// const EventsByCategory = (props: EventsTitleProps) => {
//   const { label, eventByCate, className } = props;
//   return (
//     <Box className={className}>
//       <CustomContainer>
//         <Stack
//           direction="row"
//           spacing={2}
//           alignItems={"center"}
//           className="my-3"
//         >
//           <Typography className="font-bold text-f24 text-ik_bluegreydarken6 leading-9">
//             {label}{" "}
//           </Typography>
//         </Stack>

//         <div className="flex flex-wrap gap-2 my-7">
//           {" "}
//           {eventByCate?.map((business: any) => (
//             <div className="" key={business.id}>
//               {" "}
//               <CustomCardEventsCategory
//                 img={business.icon}
//                 text={business.name}
//                 reviews={""}
//                 typebottom={false}
//               />
//             </div>
//           ))}
//         </div>
//       </CustomContainer>
//     </Box>
//   );
// };

// export default EventsByCategory;

/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */
// import React from "react";
// import { Box, Typography, Grid } from "@mui/material";
// import dynamic from "next/dynamic";
// const CustomContainer = dynamic(
//   () => import("@/components/common/form-fields/Container")
// );
// import { Stack } from "@mui/material";

// const CustomCardEventsCategory = dynamic(
//   () => import("@/components/common/form-fields/CustomCardsEventsCategory")
// );

// type EventsTitleProps = {
//   label: string;
//   eventByCate: any;
//   className: string;
// };

// const EventsByCategory = (props: EventsTitleProps) => {
//   const { label, eventByCate, className } = props;

//   return (
//     <Box className={className}>
//       <CustomContainer>
//         <Stack
//           direction="row"
//           spacing={2}
//           alignItems={"center"}
//           className="mt-[40.88px] mb-[24.37px]"
//         >
//           <Typography className="font-bold text-f24 text-ik_bluegreydarken6 leading-9 ">
//             {label}
//           </Typography>
//         </Stack>

//         <Grid container  className="mb-7 cursor-pointer mx-auto" spacing={2}>
//           {eventByCate?.map((business: any) => (
//             <Grid item xs={6} md={3} lg={3} key={business.id}>
//               <CustomCardEventsCategory
//                 img={business.icon}
//                 text={business.name}
//                 reviews={""}
//                 typebottom={false}
//               />
//             </Grid>
//           ))}
//         </Grid>
//       </CustomContainer>
//     </Box>
//   );
// };

// export default EventsByCategory;

import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import dynamic from "next/dynamic";

const CustomContainer = dynamic(
  () => import("@/components/common/form-fields/Container")
);
const CustomCardEventsCategory = dynamic(
  () => import("@/components/common/form-fields/CustomCardsEventsCategory")
);

type EventsTitleProps = {
  label: string;
  eventByCate: any;
  className: string;
};

const EventsByCategory = (props: EventsTitleProps) => {
  const { label, eventByCate, className } = props;

  return (
    <Box className={className}>
      <CustomContainer>
        <Stack
          direction="row"
          spacing={2}
          alignItems={"center"}
          className="pt-[40.88px] pb-[24.37px]"
        >
          <Typography className="font-bold text-f24 text-ik_bluegreydarken6 leading-9 ">
            {label}
          </Typography>
        </Stack>

        {/* Flex-based layout replacing Grid */}
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          gap={2} // Adds spacing between items
          className="pb-[60.45px] cursor-pointer"
        >
          {eventByCate?.map((business: any) => (
            <Box
              key={business.id}
              width="236px"
              display="flex"
              justifyContent="center"
            >
              <CustomCardEventsCategory
                img={business.icon}
                text={business.name}
                reviews={""}
                typebottom={false}
              />
            </Box>
          ))}
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default EventsByCategory;
