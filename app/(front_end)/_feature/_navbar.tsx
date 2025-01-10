"use client"
import {usePathname} from "next/navigation";
import {useState} from "react";
import Link from "next/link";
import {getNavbar} from "@/data/navbar";
import Image from "next/image";

export default function Navbar() {
    const dataNavbar = getNavbar()
    const pathName = usePathname()
    const [active, setIsOpen] = useState(false)
    return(
        <nav className="fixed px-6 sm:px-8 md:px-16 lg:px-20 w-full">
            <div className={"top-0 flex justify-between h-20"}>
                <div className={"flex items-center tracking-wider text-xl md:text-2xl lg:text-3xl uppercase font-bold text-primary"}>
                    <Image src="/assets/img/logo.png" alt="logo" width={300} height={300} />
                </div>
                <div className={"flex items-center"}>
                    <div className="">
                        <ul className="hidden md:flex items-center justify-between">
                            {dataNavbar.map((item, index) => (
                                <Link key={index} href={item.link}>
                                    <li
                                        className={
                                        pathName === item.link ?
                                            "bg-primary font-semibold tracking-wide text-contras py-2 px-2 lg:px-3 lg:text-lg text-center group relative min-w-14 text-sm lg:min-w-28 cursor-pointer overflow-hidden" :
                                            "font-semibold tracking-wide group relative min-w-14 text-sm lg:min-w-28 cursor-pointer overflow-hidden py-2 px-2 lg:px-3 lg:text-lg text-center transition-colors duration-700 hover:text-contras"}
                                    >
                                        {item.name}
                                        <span
                                            aria-hidden="true"
                                            className="absolute inset-0 z-[-1] -translate-x-full bg-primary transition-transform duration-700 group-hover:translate-x-0"></span>
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                    {/*Hamburger Button Start*/}
                    <Image
                        src={"/assets/img/static/menu.png"}
                        alt={"menu"}
                        width={28}
                        height={28}
                        className={"cursor-pointer flex md:hidden"}
                        onClick={() => setIsOpen((prev) => !prev)}
                    />
                    {/*Hamburger Button End*/}
                    {/*mobile*/}
                    {active && (
                        <div>
                            <ul className="absolute top-20 bg-slate-600 text-white left-0 w-full h-[calc(100vh-80px)] flex flex-col justify-center items-center gap-8 text-xl z-30">
                                {dataNavbar.map((item, index) => (
                                    <li className="border border-t-0 border-secondary flex mt-2 shadow-inner group" key={index}>
                                        <Link href={item.link}
                                              className={"py-3 px-6 uppercase w-full text-base font-black text-accent border-opacity-80 flex items-center group-hover:bg-primary group-hover:text-white  justify-between"}>
                                            {item.name}
                                            <span
                                                className={"flex text-lg items-center justify-center px-6 border-l border-l-accent font-bold text-accent h-full w-fit  group-hover:text-white group-hover:border-l-white"}>{`>`}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}