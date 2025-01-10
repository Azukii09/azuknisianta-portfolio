import ContentContainer from "@/app/(front_end)/_feature/_component/_container";
import AboutPageContent from "@/app/(front_end)/about/_feature/_aboutContent";

export default function AboutPage(){
    return (
        <div className={"top-20 w-full h-full bg-contras rounded flex justify-between"}>
            <ContentContainer active={true}>
                <AboutPageContent/>
            </ContentContainer>
        </div>
    )
}