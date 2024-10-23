import React from "react";

import { Grid } from "@mui/material";

import dynamic from "next/dynamic";

const ImageComponent = dynamic(
  () => import("@/views/components/ImageComponent")
);
const CustomButton = dynamic(
  () => import("@/components/common/form-fields/CustomButton")
);
const ArtistCustomerComponents = ({
  artistDetailView,
}: {
  artistDetailView: ArtistType;
}) => {
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
      <div className=" pb-[22.41px] relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[0px] after:w-[104px] after:h-[1px] after:bg-ik_bluegreylighten4">
        <div className="text-f18 font-semibold text-ik_bluegreydarken3 leading-[22.68px] mb-2">
          <span>Performing Languages</span>
        </div>
        {artistDetailView?.performed_languages?.map((row) => (
          <div
            className="text-f18 font-normal text-ik_bluegreydarken1 leading-[26px] "
            key={row.id}
          >
            <p>{row.name}</p>
          </div>
        ))}
      </div>

      <div className=" pt-[20.67px] pb-[22.41px] relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[0px] after:w-[104px] after:h-[1px] after:bg-ik_bluegreylighten4">
        <div className="text-f18 font-semibold text-ik_bluegreydarken3 leading-[22.68px] mb-2">
          <span>Performing Languages</span>
        </div>
        {artistDetailView?.performed_genere?.map((row) => (
          <div
            className="text-f18 font-normal text-ik_bluegreydarken1 leading-[26px] "
            key={row.id}
          >
            <p>{row.name} </p>
          </div>
        ))}
      </div>

      {/* <div className="pt-[20.67px] pb-[22.67px] relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[0px] after:w-[104px] after:h-[1px] after:bg-ik_bluegreylighten4">
        <div className="text-f18 font-semibold text-ik_bluegreydarken3 leading-[22.68px] mb-2">
          <span>Genre</span>
        </div>
        <div className="text-f18 font-normal text-ik_bluegreydarken1 leading-[26px]">
        
        </div>
         {artistDetailView?.performed_genere?.map((row) => (
             <div className="text-f18 font-normal text-ik_bluegreydarken1 leading-[26px] " key={row.id}>
            <p>{row.name}</p>
        </div>
        ))}
      </div> */}

      <div className="pt-5 pb-[21.99px] relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[0px] after:w-[104px] after:h-[1px] after:bg-ik_bluegreylighten4">
        <div className="text-f18 font-semibold text-ik_bluegreydarken3 leading-[22.68px] mb-2">
          <span>Performing Languages</span>
        </div>
        {artistDetailView?.performed_events?.map((row) => (
          <div className="text-f18 font-normal text-ik_bluegreydarken1 leading-[26px]">
            <p>{row.name} </p>
          </div>
        ))}
      </div>

      <div className="py-5 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[0px] after:w-[104px] after:h-[1px] after:bg-ik_bluegreylighten4">
        <div className="text-f18 font-semibold text-ik_bluegreydarken3 leading-[22.68px]">
          <h6>Location Preferences</h6>
        </div>

        <div className="pt-[14px] ">
          {/* {customer_data?.map((row) => ( */}
          <>
            {artistDetailView?.customer_services?.live_online ? (
              <div className="flex gap-[10.38px] items-center mb-2">
                <div>
                  <ImageComponent
                    src={"/assets/icons/live-icons.svg"}
                    width={60}
                    height={60}
                    alt={"img"}
                  />
                </div>
                <div>
                  <p className="text-f18 font-semibold text-ik_bluegreydarken3 leading-[22.68px]">
                    {artistDetailView?.customer_services?.live_online
                      ? "Live Online"
                      : ""}
                  </p>
                  <span className="text-f12 font-normal text-ik_bluegreylighten1 leading-[15.12px]">
                    {
                      artistDetailView?.customer_services
                        ?.live_online_description
                    }
                  </span>
                </div>
              </div>
            ) : (
              ""
            )}
            {artistDetailView?.customer_services?.home_pickup ? (
              <div className="flex gap-[10.38px] items-center mb-2">
                <div>
                  <ImageComponent
                    src={"/assets/icons/home-icons.svg"}
                    width={60}
                    height={60}
                    alt={"img"}
                  />
                </div>
                <div>
                  <p className="text-f18 font-semibold text-ik_bluegreydarken3 leading-[22.68px]">
                    {artistDetailView?.customer_services?.live_online
                      ? "Live Online"
                      : ""}
                  </p>
                  <span className="text-f12 font-normal text-ik_bluegreylighten1 leading-[15.12px]">
                    {
                      artistDetailView?.customer_services
                        ?.live_online_description
                    }
                  </span>
                </div>
              </div>
            ) : (
              ""
            )}
            {artistDetailView?.customer_services?.distance_service ? (
              <div className="flex gap-[10.38px] items-center mb-2">
                <div>
                  <ImageComponent
                    src={"/assets/icons/distance-icons.svg"}
                    width={60}
                    height={60}
                    alt={"img"}
                  />
                </div>
                <div>
                  <p className="text-f18 font-semibold text-ik_bluegreydarken3 leading-[22.68px]">
                    {artistDetailView?.customer_services?.live_online
                      ? "Live Online"
                      : ""}
                  </p>
                  <span className="text-f12 font-normal text-ik_bluegreylighten1 leading-[15.12px]">
                    {
                      artistDetailView?.customer_services
                        ?.live_online_description
                    }
                  </span>
                </div>
              </div>
            ) : (
              ""
            )}
          </>
          {/* ))} */}
        </div>
      </div>

      <div className="py-5  leading-[25.2px]">
        <div className="text-f18 font-semibold text-ik_bluegreydarken3">
          <h6>Similar Profiles</h6>
        </div>
        <div className="mt-[19.12px]">
          {similar_profiles?.map((row) => (
            <div className="flex gap-[15.5px] py-3" key={row?.id}>
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
                <h6 className="text-f19 font-semibold text-ik_bluegreydarken3 leading-[23.94px] mb-[6px]">
                  {row?.profiles_name}
                </h6>
                <p className="text-f16 font-normal text-ik_bluegreydarken3 leading-[20.16px] mb-1">
                  {row?.profiles_text}
                </p>
                <div className="flex items-center gap-2">
                  <ImageComponent
                    src={"/assets/icons/star.svg"}
                    width={20}
                    height={19}
                    alt={"star"}
                  />
                  <div className="flex gap-1">
                    <span className="text-ik_bluegreydarken3 text-f16 font-semibold leading-[20.16px]">
                      {row?.profiles_reviews?.split(" ")[0]}
                    </span>
                    <span className="text-ik_bluegreydarken3 text-f16 font-normal leading-[20.16px]">
                      {row?.profiles_reviews?.split(" ").slice(1).join(" ")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <button className="flex gap-2 items-center">
            <span className="text-f16 font-normal text-ik_pink">
              View all Profile
            </span>
            <ImageComponent
              src={"/assets/icons/red_arrow.svg"}
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
