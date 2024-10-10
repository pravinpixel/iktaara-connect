import zustandStore from "@/utils/helpers/zustand";
import OtpLoginWidget from "@/views/components/popup/OtpLoginWidget";
import dynamic from "next/dynamic";

const LoginPopup = dynamic(() => import("@/views/components/popup/LoginPopup"));
const RegisterPopup = dynamic(() => import("@/views/components/popup/RegisterPopup"));

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
