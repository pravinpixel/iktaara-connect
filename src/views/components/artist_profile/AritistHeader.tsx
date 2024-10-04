import React from "react";
import ImageComponent from "../ImageComponent";
import AritistEnquirePopup from "../popup/AritistEnquirePopup";

type Props = {
  ListHeader: any;
};

const AritistHeaderComponents = (props: Props) => {
  const { ListHeader } = props;
  const [openEnquire, setOpenEnquire] = React.useState(false);

  const handleClickOpenEnquire = () => {
    setOpenEnquire(true);
  };

  const handleCloseEnquire = () => {
    setOpenEnquire(false);
  };
  return (
    <>
      <section>
        <div className={`w-ful flex items-center justify-between pt-7 pb-5`}>
          <div className="flex items-center justify-between gap-5 w-100">
            <div className="h-[70px] w-[100px] flex items-center  ">
              <ImageComponent
                src={ListHeader.logo}
                width={132}
                height={132}
                alt={"music-logo"}
                className={"rounded-full"}
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
                <div>
                  <button className="border border-ik_bluegreylightens3 rounded-lg py-3 px-3">
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
                  onClick={handleClickOpenEnquire}
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

      {openEnquire && (
        <AritistEnquirePopup handleClose={handleCloseEnquire} open={openEnquire} />
      )}
    </>
  );
};

export default AritistHeaderComponents;
