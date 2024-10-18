import React from "react";
// import ImageComponent from "../ImageComponent";
import dynamic from "next/dynamic";
const ImageComponent = dynamic(
  () => import("@/components/common/form-fields/ImageComponent")
);

const GroSection = () => {
  return (
    <>
      <section >
        <div className="w-full hidden sm:flex cursor-pointer">
          <ImageComponent
            src={"/assets/image/gro-img.webp"}
            width={1496}
            height={451}
            alt="slide-imag"
            className="w-full h-auto"
          />
        </div>
        <div className="w-full flex sm:hidden cursor-pointer">
          <ImageComponent
            src={"/assets/image/mobile-gro-img.webp"}
            width={1496}
            height={451}
            alt="slide-imag"
            className="w-full h-auto"
          />
        </div>
      </section>
    </>
  );
};

export default GroSection;
