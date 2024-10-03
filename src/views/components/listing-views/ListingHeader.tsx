import React from "react";
import ImageComponent from "../ImageComponent";
import EnquirePopup from "../popup/EnquirePopup";
import CustomButton from "../form-fields/CustomButton";
import BusinessEditPopup from "../popup/BusinessEditPopup";
import PostUpdatePapup from "../popup/PostUpdatePapup";

const ListingHeaderComponents = () => {
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
            <div className="h-[70px] w-[100px] flex items-center rounded-xl">
              <ImageComponent
                src={"/assets/image/music-logo.png"}
                width={120}
                height={120}
                alt={"music-logo"}
              />
            </div>
            <div className="">
              <h6 className="text-f30 font-bold text-ik_bluegreydarken3">
                Musee Musicals Pvt. Ltd.
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
                    Sales & Service (13 Years in Business)
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
              {/* <div>
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
              </div> */}

              <button
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
              </div>
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
