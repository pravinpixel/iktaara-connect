import React from "react";
import ImageComponent from "../ImageComponent";
import EnquirePopup from "../popup/EnquirePopup";
import CustomButton from "../form-fields/CustomButton";
import BusinessEditPopup from "../popup/BusinessEditPopup";
import PostUpdatePapup from "../popup/PostUpdatePapup";

type Props = {
  ListHeader: any;
};

const ListingHeaderComponents = (props: Props) => {
  const { ListHeader } = props;
  const [opencity, setOpencity] = React.useState(false);
  const [openbusinessedit, setOpenbusinessedit] = React.useState(false);
  const [openUpdate, setOpenUpdate] = React.useState(false);

  const handleClickOpencity = () => {
    setOpencity(true);
  };

  const handleClosecity = () => {
    setOpencity(false);
  };

  const handleClickOpenbusiness = () => {
    setOpenbusinessedit(true);
  };

  const handleClosebusiness = () => {
    setOpenbusinessedit(false);
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
        <div className={`w-ful flex items-center justify-between pt-7 pb-5`}>
          <div className="flex items-center justify-between gap-5 w-100">
            <div className="h-[70px] w-[100px] flex items-center  ">
              <ImageComponent
                src={ListHeader.logo}
                width={120}
                height={120}
                alt={"music-logo"}
                className={"rounded-xl"}
              />
            </div>
            <div className="">
              <h6 className="text-f30 font-bold text-ik_bluegreydarken3">
                {ListHeader.title}
              </h6>
              <div className="flex gap-3">
                <div className="flex gap-2">
                  <ImageComponent
                    src={"assets/icons/maps-location.svg"}
                    width={20}
                    height={20}
                    alt={"location"}
                  />
                  <span className="text-16 font-normal text-ik_bluegreydarken3">
                    Chennai
                    {ListHeader.location}
                  </span>
                </div>
                <div className="flex gap-2">
                  <ImageComponent
                    src={"assets/icons/work-icons.svg"}
                    width={20}
                    height={20}
                    alt={"location"}
                  />
                  <span className="text-16 font-normal text-ik_bluegreydarken3">
                    {ListHeader.job}
                  </span>
                </div>
              </div>
              <div className="flex gap-3 mt-2">
                <div>
                  <button className="border border-ik_bluegreylightens3 rounded-lg py-3 px-3">
                    <div className="flex gap-3">
                      <ImageComponent
                        src={"assets/icons/phone-icons.svg"}
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
                          src={"assets/icons/share-icons.svg"}
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
                      <div className="shadow-md shadow-ik_boxshadiowcolor  rounded-lg bg-ik_white px-6 py-[22px] absolute hidden  group-hover:block  ">
                        <div className="flex justify-center items-center gap-5 ">
                          <div className="w-[44px]">
                            <ImageComponent
                              src={"assets/icons/fb-icons.svg"}
                              width={44}
                              height={44}
                              alt={"location"}
                              className="cursor-pointer opacity-30  hover:opacity-100 "
                            />
                          </div>
                          <div className="w-[44px]">
                            <ImageComponent
                              src={"assets/icons/inked-icons.svg"}
                              width={44}
                              height={44}
                              alt={"location"}
                              className="cursor-pointer opacity-30 hover:opacity-100"
                            />
                          </div>
                          <div className="w-[44px]">
                            <ImageComponent
                              src={"assets/icons/twit-icons.svg"}
                              width={44}
                              height={44}
                              alt={"location"}
                              className="cursor-pointer opacity-30 hover:opacity-100"
                            />
                          </div>
                          <div className="w-[44px]">
                            <ImageComponent
                              src={"assets/icons/whatsapp-icons.svg"}
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
              <div>
                <button className="border border-ik_bluegreylightens3 rounded-lg py-3 px-5">
                  <div className="flex gap-3">
                    <ImageComponent
                      src={"assets/icons/star-icons.svg"}
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
                  className=" h-100 px-16 py-6 bg-ik_pink text-white text-f20  font-semibold rounded-lg"
                  onClick={handleClickOpencity}
                >
                  <span>Enquire</span>
                </button>
              </div>

              {/* <button
                className="border border-ik_bluegreylightens3 rounded-lg py-[23px] px-7"
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
                  className="py-[23px] px-7 text-f20 font-semibold"
                  onClick={handleClickOpenbusiness}
                />
              </div> */}
            </div>
          </div>
        </div>
      </section>
      {openUpdate && (
        <PostUpdatePapup handleClose={handleCloseUpdate} open={openUpdate} />
      )}
      {opencity && (
        <EnquirePopup handleClose={handleClosecity} open={opencity} />
      )}
      {openbusinessedit && (
        <BusinessEditPopup
          handleClose={handleClosebusiness}
          open={openbusinessedit}
        />
      )}
    </>
  );
};

export default ListingHeaderComponents;
