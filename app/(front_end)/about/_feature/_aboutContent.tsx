
import BigTitle from "@/app/(front_end)/_feature/_component/_bigTitle";
import Image from "next/image";
import {getServicesAbout} from "@/data/serviceAbout";
import {getInterstAbout} from "@/data/interestAbout";
import {getSkillAbout} from "@/data/skillData";
import ProgressBar from "@/app/(front_end)/_feature/_component/_progresBar";
import {getLanguageAbout} from "@/data/languageSkill";
import RadialProgressBar from "@/app/(front_end)/_feature/_component/_radialProgress";
import {getExperienceAbout} from "@/data/experienceData";

export default function AboutPageContent(){
    const dataService = getServicesAbout()

    return (
        <div className="w-full">
            {/*about sections*/}
            <BigTitle title={"about me"}/>

            {/*Profile About*/}
            <div className={"my-12 flex flex-col gap-8 lg:flex-row lg:gap-0 justify-between"}>
                <div className={"w-full lg:w-5/12 flex flex-col gap-4"}>
                    <div className={"text-justify indent-5"}>
                        Hi, my name is Alvillage Zuksnisianta! I am a programmer who began learning programming in 2013 as a student. My first job as a junior frontend developer was in 2016. Currently, I have experience in building websites of various scales, including projects related to warehouse management, accounting applications, and archiving systems. I am proficient in full-stack web development. I design and develop web applications using a
                        variety of technologies including Golang, PostgreSQL, MySQL, Docker, Git, GitHub React.js,
                        Laravel, Next.js, Bootstrap, and Tailwind CSS.
                    </div>
                    <div className={"text-justify indent-5"}>
                        My responsibilities include creating and managing
                        databases, integrating APIs, ensuring application performance and security, debugging and
                        resolving issues, collaborating with cross-functional teams, and maintaining documentation for
                        ongoing development and future updates. I am also experienced in installing websites on both
                        shared hosting and VPS platforms.
                    </div>
                </div>
                <div className={"w-full lg:w-5/12 flex flex-col gap-4"}>
                    <div className={"flex"}>
                        <div className={"w-2/6 font-bold text-md capitalizex"}>Name</div>
                        <div className={"w-4/6 italic text-md"}>: Alvillage Zuknisianta</div>
                    </div>
                    <div className={"flex"}>
                        <div className={"w-2/6 font-bold text-md capitalizex"}>Address</div>
                        <div className={"w-4/6 italic text-md"}>: Pelang Village, RT 001 RW 002,<br/> Kembangbahu
                            District, <br/>Lamongan
                            Regency, <br/>East Java Province,Indonesia
                        </div>
                    </div>
                    <div className={"flex"}>
                        <div className={"w-2/6 font-bold text-md capitalizex"}>Phone</div>
                        <div className={"w-4/6 italic text-md"}>: (+62) 811 3339 0006</div>
                    </div>
                    <div className={"flex"}>
                        <div className={"w-2/6 font-bold text-md capitalizex"}>Mail</div>
                        <div className={"w-4/6 italic text-md"}>: azuknisinata@gmail.com</div>
                    </div>

                    <br/>
                    <br/>
                    <div className={"flex gap-8 items-center justify-between"}>
                        <h1 className={"uppercase font-bold text-lg tracking-[0.2em]"}>interest</h1>
                        <div className={"bg-ternary h-[2px] w-3/4"}></div>
                    </div>
                    <div className={"mt-6"}>
                        <ul className={"flex gap-4 flex-col"}>
                            {getInterstAbout().map((interest) => (
                                <li className={"flex gap-2 items-center"} key={interest.id}>
                                    <div className={"relative w-3 h-2"}>
                                        <Image src={"/assets/img/play-new.png"} alt={"play"} fill/>
                                    </div>
                                    {interest.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/*services and interest*/}
            <div className={"my-12 flex flex-col gap-8 lg:flex-row lg:gap-0 justify-between"}>
                {/*services section*/}
                <div className={" w-full lg:w-5/12 flex flex-col gap-4"}>
                    <div className={"flex gap-8 items-center justify-between"}>
                        <h1 className={"uppercase font-bold text-lg tracking-[0.2em]"}>services</h1>
                        <div className={"bg-ternary h-[2px] w-3/4"}></div>
                    </div>
                    <div className={"mt-6"}>
                        <ul className={"flex gap-4 flex-col"}>
                            {dataService.map((service) => (
                                <li className={"flex gap-2 items-center"} key={service.id}>
                                    <div className={"relative w-3 h-2"}>
                                        <Image src={"/assets/img/play-new.png"} alt={"play"} fill/>
                                    </div>
                                    {service.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/*interest section*/}
                <div className={"w-full lg:w-5/12 flex flex-col gap-4"}>
                    {/*<InterestAbout data={dataInterest}/>*/}
                </div>
            </div>

            {/*skills and language*/}
            <div className={"my-12 flex flex-col gap-8 lg:flex-row lg:gap-0 justify-between"}>
                {/*skill sections*/}
                <div className={" w-full lg:w-5/12 flex flex-col gap-4"}>
                    <div className={"flex gap-8 items-center justify-between"}>
                        <h1 className={"uppercase font-bold text-lg tracking-[0.2em]"}>skill</h1>
                        <div className={"bg-ternary h-[2px] w-3/4"}></div>
                    </div>
                    <div className={"mt-6 flex flex-col gap-4"}>
                        {getSkillAbout().map((skill) => (
                            <ProgressBar percentage={skill.percentage} label={skill.label} key={skill.id}/>
                        ))}
                    </div>
                </div>
                {/*language section*/}
                <div className={"w-full lg:w-5/12 flex flex-col gap-4"}>
                    <div className={"flex gap-8 items-center justify-between"}>
                        <h1 className={"uppercase font-bold text-lg tracking-[0.2em]"}>language</h1>
                        <div className={"bg-ternary h-[2px] w-3/4"}></div>
                    </div>
                    <div className={"mt-6 flex gap-2 flex-wrap"}>
                        {getLanguageAbout().map((language) => (
                            <RadialProgressBar percentage={language.percentage} language={language.language}
                                               key={language.id}/>
                        ))}
                    </div>
                </div>
            </div>

            {/*experience*/}
            <BigTitle title={"experience"}/>
            <div className={"my-12"}>
                <div className="-my-6">
                    {getExperienceAbout().map((item:{company:string,position:string,description:string,date:string}, index) =>
                        <div className="relative pl-8 sm:pl-32 py-6 group" key={index}>
                            {/*Purple label*/}
                            <div className="italic font-medium text-xl text-primary mb-1 sm:mb-0">{item.company}</div>
                            {/*Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after)*/}
                            <div
                                className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-ternary sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-primary after:border-4 after:box-content after:border-primary after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                        <span
                            className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-11 pl-2 mb-3 sm:mb-0 text-secondary bg-accent rounded-xl">
                            {item.date}
                        </span>
                                <div className="text-xl font-bold text-primary">{item.position}</div>
                            </div>
                            {/*Content*/}
                            <div className="text-secondary">
                                {item.description}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {/*bottom high set*/}
            <div className={"h-36"}></div>
        </div>
    )
}