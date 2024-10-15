import React from "react";

import dynamic from "next/dynamic";

const ImageComponent = dynamic(
  () => import("@/components/common/form-fields/TitleComponent")
);
const ListingCustomerComponents = () => {
  const customer_data = [
    {
      id: 1,
      customer_image: "/assets/icons/live-icons.svg",
      customer_title: " LIVE Online",
      customer_text: "  Prior Booking Required",
    },
    {
      id: 2,
      customer_image: "/assets/icons/home-icons.svg",
      customer_title: " Home Pickup",
      customer_text: "  Prior Appointment Required",
    },
    {
      id: 3,
      customer_image: "/assets/icons/distance-icons.svg",
      customer_title: " Limited Distance",
      customer_text: "  Chennai",
    },
  ];
  return (
    <>
      <div className="text-f20 font-semibold text-ik_bluegreydarken3">
        <h6>Customer Service</h6>
      </div>
      <div className="pt-3 pb-5 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[0px] after:w-[104px] after:h-[1px] after:bg-ik_bluegreylighten4">
        {customer_data?.map((row) => (
          <>
            <div className="flex gap-3 items-center mb-2" key={row.id}>
              <div>
                <ImageComponent
                  src={row.customer_image}
                  width={60}
                  height={60}
                  alt={"arrowdown"}
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
      <div className="pt-3 pb-5 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[0px] after:w-[104px] after:h-[1px] after:bg-ik_bluegreylighten4">
        <div className="text-f20 font-semibold text-ik_bluegreydarken3 pt-5">
          <h6>Location</h6>
        </div>
        <div className=" mt-3">
          <span className="text-f18 font-normal text-ik_bluegreydarken1">
            No 8, MCN Nagar Extension Road, MCN Nagar, Thoraipakkam,
            Thoraipakkam Chennai - 600097
          </span>
        </div>
        <div className="mt-3">
          <button>
            <span className="text-f18 text-ik_pink font-normal">
              View on Map
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ListingCustomerComponents;
