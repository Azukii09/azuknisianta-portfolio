"use client"
import HomeContent from "@/app/(front_end)/(home)/_home";
import ContentContainer from "@/app/(front_end)/_feature/_component/_container";
import {useState} from "react";

export default function HomeContentClient() {
    const [active,setActive] = useState(true);
    return(
        <>
            <ContentContainer active={active}>
                <HomeContent active={active} toggleActive={()=>setActive(!active)} />
            </ContentContainer>
        </>
    )
}