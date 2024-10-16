import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ThemeProvider from "@/utils/theme/ThemeConfig";
import CommonPopup from "../popup/CommonPopup";
import { useRouter } from "next/router";
import { Toaster } from 'sonner';

type LayoutsTypes = {
  children: React.ReactNode;
};

const Layouts = ({ children }: LayoutsTypes) => {
  const router = useRouter();
  const path = router.asPath.split("/")[1];
  const url = `${path}`;

  return (
    <ThemeProvider>
      <CommonPopup />
      <Toaster richColors />
      <div className="flex flex-col w-full relative h-fit overflow-x-hidden">
        <div className="fixed top-0 right-0 left-0 bg-white z-[999]">
          <Header />
        </div>
        <div
          className={`mt-[110px]  flex overflow-hidden overflow-y-auto flex-col`}
        >
          {children}
          {url === "event-hosting" ? "" : <Footer />}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Layouts;
