import zustandStore from "@/utils/helpers/zustand";
import OtpLoginWidget from "./OtpLoginWidget";
import dynamic from "next/dynamic";

const LoginPopup = dynamic(() => import("./LoginPopup"));
const RegisterPopup = dynamic(() => import("./RegisterPopup"));

const CommonPopup = () => {
  const { popup } = zustandStore();
  switch (popup) {
    case "login":
      return <LoginPopup />;
    case "register":
      return <RegisterPopup />;
    case "otp":
      return <OtpLoginWidget />;
    default:
      return null;
  }
};

export default CommonPopup;
