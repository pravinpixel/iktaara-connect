/* eslint-disable @next/next/no-img-element */
// import * as React from "react";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   >
//     •
//   </Box>
// );

// export default function CustomCard(props: any) {
//   const { variant, img, text, img1 } = props;
//   console.log(img, "kkkk");

//   return (
//     <Card variant={variant} sx={{ position: "relative" }}>
//       {/* Image */}
//       <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
//         <img
//           src={img}
//           alt="Card Image"
//           style={{ width: "100%", height: "100%", objectFit: "cover" }}
//         />
//         {/* Text overlay */}
//         <img src={img1} alt="Card Image" />
//         <Typography variant="f14">{text || "Your Text Here"}</Typography>
//       </Box>
//     </Card>
//   );
// }

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

export default function CustomCard(props: any) {
  const { variant, img, text, img1 } = props;

  return (
    <Card
      variant={variant}
      sx={{
        position: "relative",
        height: "260px",
        width: "360px",
        borderRadius: "16px",
      }}
    >
      <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
        <img
          src={img}
          alt="Card Image"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "16px",
          }}
        />

        <Box>
          <img
            src={img1}
            alt="Overlay Image"
            style={{ left: "5%", bottom: "5%" }}
          />

          <Typography>{text}</Typography>
        </Box>
      </Box>
    </Card>
  );
}
