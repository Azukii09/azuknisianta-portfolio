import React from "react";
import Navbar from "@/app/(front_end)/_feature/_navbar";
import Footer from "@/app/(front_end)/_feature/_footer";

export default function FrontEnd({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <Navbar />
            <div className="fixed px-6 sm:px-8 md:px-16 lg:px-20 top-20 w-full h-full z-10">
                {children}
            </div>
            <Footer/>
        </div>
    );
}
