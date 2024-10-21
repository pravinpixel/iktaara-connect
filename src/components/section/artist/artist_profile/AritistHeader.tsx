import React from "react";
// import ImageComponent from "../ImageComponent";
// import AritistEnquirePopup from "../popup/AritistEnquirePopup";
// import CustomButton from "../form-fields/CustomButton";
// import BusinessEditPopup from "../popup/BusinessEditPopup";
// import AritistEditPopup from "../popup/AritistEditPopup";
// import PostUpdatePapup from "../popup/PostUpdatePapup";
import dynamic from "next/dynamic";

const ImageComponent = dynamic(
  () => import("@/components/common/form-fields/ImageComponent")
);
const CustomButton = dynamic(
  () => import("@/components/common/form-fields/CustomButton")
);
const AritistEnquirePopup = dynamic(
  () => import("@/components/popup/AritistEnquirePopup")
);
const AritistEditPopup = dynamic(
  () => import("@/components/popup/AritistEditPopup")
);
const PostUpdatePapup = dynamic(
  () => import("@/components/popup/PostUpdatePapup")
);
type Props = {
  ListHeader: {
    logo: string;
    title: string;
    location: string;
    job: string;
  };
};

const AritistHeaderComponents = (props: Props) => {
  const { ListHeader } = props;
  const [openEnquire, setOpenEnquire] = React.useState(false);
  const [openaritistedit, setOpenaritistedit] = React.useState(false);
  const [openUpdate, setOpenUpdate] = React.useState(false);

  const handleClickOpenEnquire = () => {
    setOpenEnquire(true);
  };

  const handleCloseEnquire = () => {
    setOpenEnquire(false);
  };

  const handleClickOpenAritist = () => {
    setOpenaritistedit(true);
  };

  const handleCloseAritist = () => {
    setOpenaritistedit(false);
  };

  const handleClickUpdate = () => {
    setOpenUpdate(true);
  };

  const handleCloseUpdate = () => {
    setOpenUpdate(false);
  };
  return (
    <>
      <section>
        <div
          className={`w-ful flex items-center justify-between pt-[31px]`}
        >
          <div className="flex items-center justify-between gap-5 w-100">
            <div className="h-[132px] w-[132px] flex items-center  ">
              <ImageComponent
                src={ListHeader.logo}
                width={132}
                height={132}
                alt={"music-logo"}
                className={"rounded-full"}
              />
            </div>
            <div className="">
              <h6 className="text-f30 font-bold text-ik_bluegreydarken3 leading-[40.32px] mb-[6px]">
                {ListHeader.title}
              </h6>
              <div className="flex gap-3 mb-[19.7px]">
                <div className="flex gap-2">
                  <ImageComponent
                    src={"/assets/icons/maps-location.svg"}
                    width={20}
                    height={20}
                    alt={"location"}
                  />
                  <span className="text-16 font-normal text-ik_bluegreydarken3 leading-[20.16px]">
                    {ListHeader.location}
                  </span>
                </div>
                <div className="flex gap-2">
                  <ImageComponent
                    src={"/assets/icons/work-icons.svg"}
                    width={20}
                    height={20}
                    alt={"location"}
                  />
                  <span className="text-16 font-normal text-ik_bluegreydarken3 leading-[20.16px]">
                    {ListHeader.job}
                  </span>
                </div>
              </div>
              <div className="flex gap-3">
                <div>
                  <button className="border border-ik_bluegreylightens3 rounded-lg py-3 px-3 ">
                    <div className="flex gap-3">
                      <ImageComponent
                        src={"/assets/icons/phone-icons.svg"}
                        width={24}
                        height={24}
                        alt={"location"}
                      />
                      <span className="text-f16 text-ik_bluegreydarken3 font-normal">
                        Show Number
                      </span>
                    </div>
                  </button>
                </div>
                <div className="group relative">
                  <button className="border border-ik_bluegreylightens3 rounded-lg py-3 px-3 inline-flex items-center group">
                    <div className="flex gap-3">
                      <ImageComponent
                        src={"/assets/icons/share-icons.svg"}
                        width={24}
                        height={24}
                        alt={"location"}
                      />
                      <span className="text-f16 text-ik_bluegreydarken3 font-normal">
                        Share
                      </span>
                    </div>
                  </button>
                  <div className="pt-2">
                    <div className="shadow-md shadow-ik_boxshadiowcolor  rounded-lg bg-ik_white px-6 py-[22px] absolute hidden z-10 group-hover:block  ">
                      <div className="flex justify-center items-center gap-5 ">
                        <div className="w-[44px]">
                          <ImageComponent
                            src={"/assets/icons/fb-icons.svg"}
                            width={44}
                            height={44}
                            alt={"location"}
                            className="cursor-pointer opacity-30  hover:opacity-100 "
                          />
                        </div>
                        <div className="w-[44px]">
                          <ImageComponent
                            src={"/assets/icons/inked-icons.svg"}
                            width={44}
                            height={44}
                            alt={"location"}
                            className="cursor-pointer opacity-30 hover:opacity-100"
                          />
                        </div>
                        <div className="w-[44px]">
                          <ImageComponent
                            src={"/assets/icons/twit-icons.svg"}
                            width={44}
                            height={44}
                            alt={"location"}
                            className="cursor-pointer opacity-30 hover:opacity-100"
                          />
                        </div>
                        <div className="w-[44px]">
                          <ImageComponent
                            src={"/assets/icons/whatsapp-icons.svg"}
                            width={44}
                            height={44}
                            alt={"location"}
                            className="cursor-pointer opacity-30 hover:opacity-100"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-3 mt-2">
              {/* <div>
                <button className="border border-ik_bluegreylightens3 rounded-lg py-3 px-5 w-[190px] h-[74px]">
                  <div className="flex gap-3">
                    <ImageComponent
                      src={"/assets/icons/star-icons.svg"}
                      width={24}
                      height={24}
                      alt={"location"}
                    />
                    <div>
                      <p className="text-f20 font-bold text-ik_bluegreydarken3 text-start">
                        4.5<span className="font-normal">/5</span>
                      </p>
                      <span className="text-f16 font-normal">55 reviews</span>
                    </div>
                  </div>
                </button>
              </div>
              <div>
                <button
                  className=" h-100 px-16 py-6 bg-ik_pink text-white text-f20  font-semibold rounded-lg w-[236px] h-[74px]"
                  onClick={handleClickOpenEnquire}
                >
                  <span>Enquire</span>
                </button>
              </div> */}

              <button
                className="border border-ik_bluegreylightens3 rounded-lg py-[23px] px-7 w-[236px] h-[74px]"
                onClick={handleClickUpdate}
              >
                <span className="text-f20 font-semibold text-ik_pink">
                  Share Update
                </span>
              </button>
              <div>
                <CustomButton
                  variant="contained"
                  label="Edit Profile"
                  className="py-[23px] px-7 text-f20 font-semibold w-[236px] h-[74px]"
                  onClick={handleClickOpenAritist}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {openEnquire && (
        <AritistEnquirePopup
          handleClose={handleCloseEnquire}
          open={openEnquire}
        />
      )}
      {openaritistedit && (
        <AritistEditPopup
          handleClose={handleCloseAritist}
          open={openaritistedit}
        />
      )}
      {openUpdate && (
        <PostUpdatePapup handleClose={handleCloseUpdate} open={openUpdate} />
      )}
    </>
  );
};

export default AritistHeaderComponents;
