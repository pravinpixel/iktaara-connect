// /* eslint-disable @next/next/no-img-element */
// import * as React from "react";

// import Card from "@mui/material/Card";

// // import { CardMedia } from "@mui/material";
// import { Typography } from "@mui/material";
// import { Stack } from "@mui/material";
// import CardMediaComponent from "./CardMediaComponent";
// import CONSTANT from "@/utils/helpers/constant-helper";

// interface CustomCardProps {
//   variant?: "elevation" | "outlined";

//   img: string;
//   text: string;
//   reviews: string;
//   Contenttext?: string;
//   img1?: string;
//   width?: string | number;
//   height?: string | number;
//   type?: boolean;
//   typebottomleft?: boolean;
//   typetop?: boolean;
//   typebottom: boolean;
// }

// const basePath = CONSTANT.ASSESTPATH || ''

// export default function CustomCardEventsCategory(props: CustomCardProps) {
//   const { variant, img, text } = props;

//   return (
//     <Card
//       variant={variant}
//       sx={{
//         position: "relative",
//         width: "236px",
//         height: "240px",
//         borderRadius: "16px",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         overflow: "hidden",
//         padding: "20px",
//         ...(props.typebottomleft &&
//         {
//           /* Custom style for bottom-left */
//         }),
//         ...(props.typetop &&
//         {
//           /* Custom style for top-right */
//         }),
//         ...(props.typebottom &&
//         {
//           /* Custom style for bottom-right */
//         }),
//       }}
//     >
//       <Stack direction="column" alignItems={"center"} p={4}>
//         {/* <CardMedia
//           component="img"
//           image={basePath + img}
//           alt="Paella dish"
//           sx={{ width: { md: 100, xs: 50 }, height: { md: 100, xs: 50 } }}
//         /> */}
//         <CardMediaComponent
//           image={basePath + img}
//           alt="Paella dish"
//           sx={{ width: { md: 100, xs: 50 }, height: { md: 100, xs: 50 } }}
//         />
//         <Typography className="mt-[10px] text-center text-ik_bluegreydarken3 font-semibold text-f20 leading-7 whitespace-nowrap">
//           {text}
//         </Typography>
//       </Stack>
//     </Card>
//   );
// }

import React from "react";
import { Card, Stack, Typography } from "@mui/material";
import CardMediaComponent from "./CardMediaComponent";
import CONSTANT from "@/utils/helpers/constant-helper";

interface CustomCardProps {
  variant?: "elevation" | "outlined";
  img: string;
  text: string;
  reviews: string;
  Contenttext?: string;
  img1?: string;
  width?: string | number;
  height?: string | number;
  type?: boolean;
  typebottomleft?: boolean;
  typetop?: boolean;
  typebottom: boolean;
}

const basePath = CONSTANT.ASSESTPATH || '';

export default function CustomCardEventsCategory(props: CustomCardProps) {
  const { variant, img, text } = props;

  return (
    <Card
      variant={variant}
      sx={{
        position: "relative",
        width: "100%",  // Full width within the flex item
        height: "240px",
        borderRadius: "16px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        padding: "20px",
        ...(props.typebottomleft && { /* Custom style for bottom-left */ }),
        ...(props.typetop && { /* Custom style for top-right */ }),
        ...(props.typebottom && { /* Custom style for bottom-right */ }),
      }}
    >
      <Stack direction="column" alignItems={"center"} p={4}>
        <CardMediaComponent
          image={basePath + img}
          alt="Paella dish"
          sx={{ width: { md: 100, xs: 50 }, height: { md: 100, xs: 50 } }}
        />
        <Typography className="mt-[10px] text-center text-ik_bluegreydarken3 font-semibold text-f20 leading-7 whitespace-nowrap">
          {text}
        </Typography>
      </Stack>
    </Card>
  );
}
