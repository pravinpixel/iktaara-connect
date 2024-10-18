// import CustomContainer from "@/views/components/Container";

import React from "react";
import dynamic from "next/dynamic";
const CustomContainer = dynamic(
  () => import("@/components/common/form-fields/Container")
);

const RecordingSection = () => {
  return (
    <section className="py-10">
      <CustomContainer>
        <div className="text-f28 font-semibold  text-ik_bluegreydarken4 leading-[35.28px] mb-4 ">
          <span>Recording / JAM Studios Nearby</span>
        </div>
        <div>
          <p className="mb-6 text-f18 font-normal text-ik_bluegreydarken3 leading-[28px]">
            {`Iktaraa Connect is an innovative platform designed to seamlessly
            connect musical talents with business opportunities. Our mission is
            to create a vibrant ecosystem where musicians, composers, and
            performers can showcase their skills and connect with businesses in
            need of their unique talents. Whether you're an aspiring artist
            looking for your big break or a seasoned musician seeking new
            avenues, Iktaraa Connect provides the tools and network to elevate
            your career.`}
          </p>
          <div>
            <h6 className="text-f22 font-semibold  text-ik_bluegreydarken4 leading-[27.72px] mb-3">
              Talent Showcase:
            </h6>
            <div className="paragraph-Ctr mb-5">
              <ul className="text-f18 font-normal text-ik_bluegreydarken3">
                <li>
                  Create comprehensive profiles highlighting your musical
                  journey, skills, and portfolio.
                </li>
                <li>
                  Share audio and video samples to attract potential clients and
                  collaborators.
                </li>
              </ul>
              <h6 className="text-f22 font-semibold  text-ik_bluegreydarken4 leading-[27.72px] mb-[23.91px]">
                Business Opportunities:
              </h6>
              <div className="paragraph-Ctr mb-5">
                <ul className="text-f18 font-normal text-ik_bluegreydarken3">
                  <li>
                    Access a wide range of gigs, from live performances to
                    studio recordings, and collaborations.
                  </li>
                  <li>
                    Connect with event planners, corporate clients, and media
                    producers looking for musical talent.
                  </li>
                  <li>
                    Participate in workshops, webinars, and masterclasses
                    conducted by industry experts.
                  </li>
                  <li>
                    Get feedback and mentorship to refine your skills and grow
                    as an artist.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <span className=" text-f18 font-normal text-ik_bluegreydarken3 leading-[28px]">
              At Iktaraa Connect, we believe in the power of music to transform
              lives and businesses. Join us and take the next step in your
              musical journey, connecting your talent with the world of
              business.
            </span>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default RecordingSection;
