/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import ImageComponent from "./ImageComponent";

import CardMediaComponent from "./CardMediaComponent";
import CONSTANT from "@/utils/helpers/constant-helper";

interface CustomCardProps {
  variant?: "elevation" | "outlined" | "bottom-right" | "bottom-left";

  img: string;
  text: string;
  reviews?: string;
  Contenttext?: string;
  img1?: string;
  width?: string | number;
  height?: string | number;
  type?: boolean;
  typebottomleft?: boolean;
  typetop?: boolean;
  typebottom?: boolean;
  typeleftbottom?: boolean;
  typebottomtop?: boolean;
}

const basePath = CONSTANT.ASSESTPATH || ''

export default function CustomCard(props: CustomCardProps) {
  const {
    variant,
    img,
    text,
    reviews,
    Contenttext,
    img1,
    width = "100%",
    type,
    typebottomleft,
    typetop,
    typebottom,
    typeleftbottom,
    typebottomtop,
  } = props;

  return (
    <Card
      variant={variant as never}
      sx={{
        position: "relative",

        width: width,
        borderRadius: "16px",
        ...(typebottomleft &&
        {
          /* Custom style for bottom-left */
        }),
        ...(typetop &&
        {
          /* Custom style for top-right */
        }),
        ...(typebottom &&
        {
          /* Custom style for bottom-right */
        }),
      }}
    >
      <CardMediaComponent image={basePath + img} alt="Paella dish" />
      {/* <Box sx={{ position: "relative" }}>
        <ImageComponent src={img} alt="Card Image" width={260} height={360} /> */}
      {type && (
        <Box
          sx={{
            position: "absolute",
            width: "65px",
            height: "65px",
            borderRadius: "12px",
            // background: "red",
            left: "13px",
            bottom: "12px",
          }}
        >
          {/* <div style={{ position: "relative", top: "20px", left: "10px" }}> */}
          <ImageComponent
            src={img1}
            alt="Overlay Image"
            width={65}
            height={65}
          />
          {/* </div> */}
        </Box>
      )}
      {typebottomleft && (
        <>
          <div className="flex justify-between w-full">
            <Box
              sx={{
                position: "absolute",
                width: "84px",
                height: "84px",
                borderRadius: "12px",
                left: "13px",
                bottom: "12px",
              }}
            >
              {/* <div style={{ position: "relative", top: "20px", left: "10px" }}> */}
              <ImageComponent
                src={img1}
                alt="Overlay Image"
                width={84}
                height={84}
              />
              {/* </div> */}
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "9px",
                justifyContent: "end",
                alignItems: "center",
                width: "100%",
                position: "absolute",
                right: "13px",
                bottom: "12px",
              }}
            >
              <ImageComponent
                src={"/assets/icons/star.svg"}
                alt="Overlay Image"
                width={19}
                height={19}
              />
              <span className="text-f18 font-normal text-ik_blue-foreground leading-5">
                {reviews}
              </span>
            </Box>
          </div>
        </>
      )}
      {typetop && (
        <Box
          sx={{
            position: "absolute",
            top: "20px",
            left: "20px",
          }}
        >
          <Typography sx={{ fontSize: "22px", fontWeight: 600, color: "#fff" }}>
            {text}
          </Typography>
          <Typography sx={{ fontSize: "14px", fontWeight: 400, color: "#fff" }}>
            {Contenttext}
          </Typography>
        </Box>
      )}{" "}
      {typebottom && (
        <>
          <div className="flex justify-between w-full">
            <Box
              sx={{
                position: "absolute",
                width: "84px",
                height: "84px",
                borderRadius: "12px",
                left: "39px",
                bottom: "12px",
              }}
            >
              <Box className="bg-ik_bluevariantcolor text-center text-ik_white rounded-lg w-[67px] h-[37px] flex items-center justify-center">
                {"Art"}
              </Box>
            </Box>
          </div>
        </>
      )}
      {typeleftbottom && (
        <>
          <div className="flex justify-between w-full">
            <Box
              sx={{
                position: "absolute",
                width: "100%",
              }}
            >
              <Typography
                sx={{ fontSize: "22px", fontWeight: 600, color: "#fff" }}
              >
                {text}
              </Typography>
            </Box>
          </div>
        </>
      )}
      {typebottomtop && (
        <>
          <div className="flex justify-between w-full">
            <Box
              sx={{
                position: "absolute",
                width: "100%",
              }}
            >
              <Typography
                sx={{ fontSize: "20px", fontWeight: 500, color: "#fff" }}
              >
                {text}
              </Typography>
            </Box>
          </div>
        </>
      )}
      {/* </Box> */}
    </Card>

  );
}
