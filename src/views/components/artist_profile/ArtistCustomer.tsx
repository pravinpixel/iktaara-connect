import React from "react";
import ImageComponent from "../ImageComponent";
import { Grid } from "@mui/material";
import CustomButton from "../form-fields/CustomButton";

const ArtistCustomerComponents = () => {
  const customer_data = [
    {
      id: 1,
      customer_image: "/assets/icons/live-icons.svg",
      customer_title: " LIVE Online",
      customer_text: " Prior Booking Required",
    },
    {
      id: 2,
      customer_image: "/assets/icons/home-icons.svg",
      customer_title: " At home",
      customer_text: "  Prior Appointment Required",
    },
    {
      id: 3,
      customer_image: "/assets/icons/distance-icons.svg",
      customer_title: "Travels Anywhere",
    },
  ];
  const similar_profiles = [
    {
      id: 1,
      profiles_image: "/assets/image/chitra.png",
      profiles_name: "Chitra Jones",
      profiles_text: "Hindustani",
      profiles_reviews: "4.0 (320 Reviews)",
    },
    {
      id: 2,
      profiles_image: "/assets/image/nakshatra.png",
      profiles_name: "Nakshatra",
      profiles_text: " Hindustani, Classical, Western",
      profiles_reviews: "4.0 (320 Reviews)",
    },
    {
      id: 3,
      profiles_image: "/assets/image/thirupuzhal.png",
      profiles_name: "Prakash Thirupuzhal",
      profiles_text: "Western",
      profiles_reviews: "4.2 (122 Reviews)",
    },
    {
      id: 4,
      profiles_image: "/assets/image/mallika.png",
      profiles_name: "Mallika Kargai",
      profiles_text: "Classical",
      profiles_reviews: "3.5 (5 Reviews)",
    },
    {
      id: 5,
      profiles_image: "/assets/image/thangana.png",
      profiles_name: "Thangana",
      profiles_text: "Classical, Western",
      profiles_reviews: "4.25 (576 Reviews)",
    },
    {
      id: 6,
      profiles_image: "/assets/image/jones.png",
      profiles_name: "Thijo Jones",
      profiles_text: "Hindustani, Western",
      profiles_reviews: "4.0 (120 Reviews)",
    },
    {
      id: 7,
      profiles_image: "/assets/image/ranavet.png",
      profiles_name: "Kanaga Ranavet",
      profiles_text: "Classical, Western",
      profiles_reviews: "4.25 (1,022 Reviews)",
    },
  ];
  return (
    <section>
      <div className="py-5 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[0px] after:w-[104px] after:h-[1px] after:bg-ik_bluegreylighten4">
        <div className="text-f18 font-semibold text-ik_bluegreydarken3">
          <span>Performing Languages</span>
        </div>
        <div className="text-f18 font-normal text-ik_bluegreydarken1">
          <p>English, Hindi, Bengali, Punjabi</p>
        </div>
      </div>

      <div className="py-5 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[0px] after:w-[104px] after:h-[1px] after:bg-ik_bluegreylighten4">
        <div className="text-f18 font-semibold text-ik_bluegreydarken3">
          <span>Genre</span>
        </div>
        <div className="text-f18 font-normal text-ik_bluegreydarken1">
          <p>Classical, Western, Hindustani</p>
        </div>
      </div>

      <div className="py-5 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[0px] after:w-[104px] after:h-[1px] after:bg-ik_bluegreylighten4">
        <div className="text-f18 font-semibold text-ik_bluegreydarken3">
          <span>Preferred Events</span>
        </div>
        <div className="text-f18 font-normal text-ik_bluegreydarken1">
          <p>Corporate Parties, Large Events, Concerts</p>
        </div>
      </div>

      <div className="py-5">
        <div className="text-f18 font-semibold text-ik_bluegreydarken3">
          <h6>Location Preferences</h6>
        </div>
        <div className="pt-3 ">
          {customer_data?.map((row) => (
            <>
              <div className="flex gap-3 items-center mb-2" key={row.id}>
                <div>
                  <ImageComponent
                    src={row.customer_image}
                    width={60}
                    height={60}
                    alt={"img"}
                  />
                </div>
                <div>
                  <p className="text-f18 font-semibold text-ik_bluegreydarken3">
                    {row.customer_title}
                  </p>
                  <span className="text-f12 font-normal text-ik_bluegreylighten1">
                    {row.customer_text}
                  </span>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>

      <div className="pb-7 ">
        <div className="text-f18 font-semibold text-ik_bluegreydarken3">
          <h6>Similar Profiles</h6>
        </div>
        {similar_profiles?.map((row) => (
          <div className="flex gap-4 py-3" key={row?.id}>
            <div>
              <ImageComponent
                src={row?.profiles_image}
                width={84}
                height={84}
                alt={"arrowdown"}
                className="rounded-full"
              />
            </div>
            <div>
              <h6 className="text-f19 font-semibold text-ik_bluegreydarken3">
                {row?.profiles_name}
              </h6>
              <p className="text-f16 font-normal text-ik_bluegreydarken3">
                {row?.profiles_text}
              </p>
              <div className="flex items-center gap-2">
                <ImageComponent
                  src={"assets/icons/star.svg"}
                  width={20}
                  height={19}
                  alt={"star"}
                />
                <span className="text-ik_bluegreydarken3 text-f16 font-normal">
                  {row?.profiles_reviews}
                </span>
              </div>
            </div>
          </div>
        ))}
        <div>
          <button className="flex gap-2 items-center">
            <span className="text-f16 font-normal text-ik_pink">
              View all Profile
            </span>
            <ImageComponent
              src={"assets/icons/red_arrow.svg"}
              width={12}
              height={6}
              alt={"star"}
            />
          </button>
        </div>
      </div>

      <div className="border border-ik_bluegreylightens3 rounded-xl p-4">
        <Grid container>
          <Grid item xs={3}>
            <div className="bg-ik_whitevariant py-[11px] px-[13px] h-full rounded-lg">
              <div className="flex justify-center">
                <ImageComponent
                  src={"/assets/icons/talent.svg"}
                  width={64}
                  height={64}
                  alt={"talent"}
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={9}>
            <div className="pl-5">
              <h6 className="text-f22 font-bold text-ik_pink">
                List Business/Talent
              </h6>
              <div className="py-1 mb-2">
                <p className="text-f14 font-normal text-ik_bluegreydarken3">
                  Get your profile visibility to customers looking for services
                  & get hired for best prices.
                </p>
              </div>
              <div>
                <CustomButton
                  variant="primary-button"
                  label={"Get Started"}
                  className="border-2  hover:border-2"
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default ArtistCustomerComponents;