export default function BigTitle({
    title
}:{
    title: string
}) {
    return (
        <div className={"flex gap-8 items-center justify-between"}>
            <h1 className={"uppercase font-bold text-lg tracking-[0.2em]"}>{title}</h1>
            <div className={"bg-ternary h-[2px] w-2/3"}></div>
        </div>
    )
}