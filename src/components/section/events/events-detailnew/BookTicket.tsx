import React from "react";
import { Box, Typography, Stack, Divider } from "@mui/material";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const CustomButton = dynamic(
  () => import("@/components/common/form-fields/CustomButton")
);
const ImageComponent = dynamic(
  () => import("@/components/common/form-fields/ImageComponent")
);

export default function BookTicket() {
  const router = useRouter();

  const handleRoute = () => {
    router.push("/events/booking");
  };
  return (
    <Box className="w-full border border-gray-300 rounded-md shadow-md  bg-white">
      {/* Banner */}
      <Box className="w-full bg-yellow-100 text-center py-[14px] rounded-t-md">
        <Typography className="text-f14 font-medium text-ik_bluegreydarken3 leading-4">
          <span className="text-f14 font-bold text-ik_bluegreydarken3 leading-4">
            EXCLUSIVE DISCOUNT
          </span>
          : Book in advance & get 10% OFF on ticket value!
        </Typography>
      </Box>

      {/* Title and Description */}
      <Box className="w-full ">
        <Box className="p-[24px]"><Typography className="text-f32 font-bold text-ik_bluegreydarken3 leading-10">
          Need Singham Dhan by SID SRIRAM
        </Typography>
        <Typography className="text-f20 text-ik_bluegreydarken3 leading-6 font-normal pt-[8.49px]">
          Performance |{" "}
          <span className="text-f20 text-ik_bluegreydarken3 leading-6 font-bold">
            ₹100 Onwards
          </span>
        </Typography>
        <Typography className="text-f16 text-ik_bluegreydarken3 leading-6 font-normal mt-[20px]">
          Calling all music lovers! Brace yourselves for the arrival of Need
          Singham Dhan, a captivating live concert experience featuring the
          phenomenal Sid Sriram!
        </Typography>

        {/* Buttons */}
        <Box className="flex gap-4 mt-5">
          <CustomButton
            onClick={handleRoute}
            label="Book Ticket"
            className="w-[238px] h-[64px]"
          ></CustomButton>
          <CustomButton variant="primary-button" label="Share" className="w-[238px] h-[64px]"></CustomButton>
        </Box></Box>
        
        <Divider className="pt-[5px]"/>
        {/* Event Details */}
        <Stack direction="row" spacing={2} mt={"4px"} mb={"4px"} className="p-[24px]">
          {" "}
          <Stack direction="row" alignItems={"center"} spacing={1}>
            <ImageComponent
              src="/assets/static/image_27.png"
              alt="Business Image"
              width={23.4}
              height={24}
            />
            <Typography className="text-gray-600">
              Modal - The Stage, Alwarpet, Chennai
            </Typography>
          </Stack>
          <Stack direction="row" alignItems={"center"} spacing={1}>
            <ImageComponent
              src="/assets/static/image_28.png"
              alt="Business Image"
              width={23.4}
              height={24}
            />

            <Typography className="text-gray-600">
              Saturday, 29 July 2024 @ 7:00 PM
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
