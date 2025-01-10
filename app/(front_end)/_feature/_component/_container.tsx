import Image from "next/image";
import React from "react";

export default function ContentContainer({
    active,
    children,
}:Readonly<{
    children: React.ReactNode;
    active?: boolean;

}>) {
    return(
        <>
            <div
                className={`${active ? "transition-all duration-700 ease-in w-2/5" : 
                    "transition-all duration-700 ease-out w-0"} hidden h-full bg-white relative xl:flex items-center justify-center`}
            >
                <Image
                    src={"/assets/img/profile/profile-1.png"}
                    alt={""}
                    className={"object-right object-cover"} fill
                />
            </div>
            <div
                className={`${active ? "transition-all duration-700 ease-in xl:w-3/5" : 
                    "transition-all duration-700 ease-out xl:w-full"} 
                    w-full  px-12 pt-24 overflow-y-scroll`}
            >
                {children}
            </div>
        </>
    )
}