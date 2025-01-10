"use client"

import Image from "next/image";
import React, {useState} from "react";

export default function HomePage() {
    const [active, setActive] = useState(true);
    return (
        <>
            <div className={`${active?"transition-all duration-700 ease-in w-2/5":"transition-all duration-700 ease-out w-0"} hidden h-full bg-white relative xl:flex items-center justify-center`}>
                    <Image src={"/assets/img/profile/profile-1.png"} alt={""} className={"object-right object-cover"} fill/>
            </div>
            <div
                className={`${active ? "transition-all duration-700 ease-in xl:w-3/5" : "transition-all duration-700 ease-out xl:w-full"} w-full  px-12 pt-24 overflow-y-scroll`}>
                <div
                    className={active ? "transition-all duration-500 opacity-100 ease-in flex flex-col justify-center gap-2 h-3/4" : "transition-all duration-500 ease-in flex flex-col justify-center gap-2 h-0 opacity-0"}>
                    <h1 className={"font-bold text-primary text-5xl"}>Alvillage Zuknisianta</h1>
                    <span className={"text-primary text-lg font-bold"}>A lifelong learner!</span>
                    <span className={"h-[4px] w-36 bg-primary"}></span>
                    <button
                        className={"bg-primary px-4 py-2 w-36 my-2 text-contras hover:bg-secondary"}
                        onClick={() => setActive(!active)}
                    >Get in Touch
                    </button>
                </div>
                <div
                    className={active ? "transition-all duration-500 ease-in opacity-0 flex flex-col justify-center h-0" : "transition-all duration-500 ease-in opacity-100 flex flex-col justify-center "}>
                    about
                    <button
                        className={"bg-primary px-4 py-2 w-36 my-2 text-contras hover:bg-secondary"}
                        onClick={() => setActive(!active)}
                    >Get in Touch
                    </button>
                </div>
            </div>
        </>
    );
}
