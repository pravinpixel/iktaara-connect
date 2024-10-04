import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ThemeProvider from "@/utils/theme/ThemeConfig";
import CommonPopup from "../CommonPopup";

type LayoutsTypes = {
    children: React.ReactNode;
};

const Layouts = ({ children }: LayoutsTypes) => {
    return (
        <ThemeProvider>
           <CommonPopup />

            <div className="flex flex-col w-full relative h-fit overflow-x-hidden">
                <div className="absolute top-0 right-0 left-0 bg-white">
                    <Header />
                </div>
                <div
                    className={`mt-[73px]  h-[calc(100vh-73px)] flex overflow-hidden overflow-y-auto flex-col`}
                >
                    {children}
                    <Footer />
                </div>
            </div>
        </ThemeProvider>
    );
};

export default Layouts;
