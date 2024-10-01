import { Box, Grid, IconButton } from "@mui/material";
import { Dialog } from "@mui/material";
import React, { useState } from "react";
import ImageComponent from "../ImageComponent";
import CloseIcon from "@mui/icons-material/Close";
import { TransitionProps } from "@mui/material/transitions";
import { Slide } from "@mui/material";
import CustomButton from "../form-fields/CustomButton";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface StartedDialogProps {
  handleClose: () => void;
  open?: boolean;
}

export default function Startedpopup({
  handleClose,
  open = false,
}: StartedDialogProps) {
  const [selectedstarted, setSelectedstarted] = useState<number>(1);

  const handlestartedSelect = (id: number) => {
    setSelectedstarted(id);
  };
  const Startedpopup = [
    {
      id: 1,
      Startedpopup_image: "assets/icons/artistsvenues.svg",
      Startedpopup_title: "Find artists/venues",
    },
    {
      id: 2,
      Startedpopup_image: "assets/icons/hostevent.svg",
      Startedpopup_title: "Host an event",
    },
    {
      id: 3,
      Startedpopup_image: "assets/icons/listbusiness.svg",
      Startedpopup_title: "List my business",
    },
    {
      id: 4,
      Startedpopup_image: "assets/icons/create-profile.svg",
      Startedpopup_title: "Create Online Profile",
    },
  ];
  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        sx={{
          "& .MuiPaper-root": {
            padding: "0px",
          },
        }}
      >
        <Grid container>
          <Grid item xs={6}>
            <div>
              <ImageComponent
                src="/images/static/image_19.png"
                alt="login"
                width={1078}
                height={1060}
                className="w-[100%] h-[100%]"
              />
            </div>
          </Grid>
          <Grid item xs={6} sx={{ position: "relative", padding: "20px" }}>
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: "10px",
                right: "10px",
                color: "inherit",
              }}
            >
              <CloseIcon />
            </IconButton>
            <Box className="flex flex-col items-center justify-center h-full">
              <ImageComponent
                src={"assets/logo/logo.svg"}
                width={158}
                height={60}
                alt={"iktaraa"}
                priority={true}
                // sx={{ marginTop: "20px" }}
              />

              <div className="pt-12 flex justify-start w-[80%]">
                <h6 className="text-f22 font-semibold text-start mb-3">
                  Select how you’d like to get started
                </h6>
              </div>
              <div className="w-[80%]">
                {Startedpopup?.map((row) => (
                  <>
                    <div key={row.id}>
                      <button
                        className={`border py-7 pl-7 pr-5 flex items-center w-full justify-between rounded-lg mb-3 ${
                          selectedstarted === row.id
                            ? "border-ik_bluegreybluegrey"
                            : "border-ik_bluegreylighten4"
                        } ''`}
                        onClick={() => handlestartedSelect(row.id)}
                      >
                        <div className=" flex gap-7 items-center">
                          <div className="w-[44px] h-[44px]">
                            <ImageComponent
                              src={row.Startedpopup_image}
                              width={44}
                              height={44}
                              alt={"artistsvenues"}
                            />
                          </div>
                          <div className="text-start text-f20 font-semibold">
                            <span>{row.Startedpopup_title}</span>
                          </div>
                        </div>
                        <div>
                          {selectedstarted === row.id ? (
                            <div>
                              <ImageComponent
                                src={"assets/icons/seect-tiki.svg"}
                                width={32}
                                height={32}
                                alt={"seect"}
                              />
                            </div>
                          ) : (
                            <div className="border border-ik_bluegreylightens3 w-[32px] h-[32px] rounded-full"></div>
                          )}
                        </div>
                      </button>
                    </div>
                  </>
                ))}
              </div>
              <Box className="flex justify-start w-[80%] pt-5 ">
                <CustomButton
                  type="submit"
                  className="px-14 py-3"
                  label="Continue"
                />
                {/* Continue
                </CustomButton> */}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Dialog>
    </React.Fragment>
  );
}