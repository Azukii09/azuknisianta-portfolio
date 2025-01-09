import React from "react";
import Navbar from "@/app/(front_end)/_feature/_navbar";

export default function FrontEnd({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <Navbar />
            {/*<div className="fixed px-6 sm:px-8 md:px-16 lg:px-20 top-20 w-full h-full z-10">*/}
            {/*    <div className={"top-20 w-full h-full bg-contras rounded flex justify-between"}>*/}
            {/*        <div className={"hidden h-full bg-white w-2/5 relative xl:flex items-center justify-center"}>*/}
            {/*            <Image src={"/assets/img/profile/profile-1.png"} alt={""} className={"object-right object-cover"} fill />*/}
            {/*        </div>*/}
            {/*        <div className={"w-full xl:w-3/5 px-12 pt-24 overflow-y-scroll"}>*/}
                        {children}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
}
