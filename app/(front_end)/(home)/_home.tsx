
export default function HomeContent({
    toggleActive,
    active,
}:{
    toggleActive:(flag?:boolean)=>void;
    active:boolean;
}) {
    function toggle(){
        toggleActive(!active);
    }
    return(
        <>
            <div
                className={"flex flex-col justify-center gap-2 h-3/4"}
            >
                <h1 className={"font-bold text-primary text-5xl"}>Alvillage Zuknisianta</h1>
                <span className={"text-primary text-lg font-bold"}>A lifelong learner!</span>
                <span className={"h-[4px] w-36 bg-primary"}></span>
                <button
                    className={"bg-primary px-4 py-2 w-36 my-2 text-contras hover:bg-secondary"}
                    onClick={toggle}
                >Get in Touch
                </button>
            </div>
        </>
    )
}