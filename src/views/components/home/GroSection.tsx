import React from "react";
import Image from "next/image";

const GroSection = () => {
  return (
    <>
      <section className="py-5">
        <div className="w-full hidden sm:flex cursor-pointer">
          <Image
            src={"//assets/image/gro-img.webp"}
            width={1496}
            height={451}
            style={{
              width: "100%",
              height: "auto",
            }}
            alt="slide-imag"
          />
        </div>
        <div className="w-full flex sm:hidden cursor-pointer">
          <Image
            src={"//assets/image/mobile-gro-img.webp"}
            width={1496}
            height={451}
            style={{
              width: "100%",
              height: "auto",
            }}
            alt="slide-imag"
          />
        </div>
      </section>
    </>
  );
};

export default GroSection;
