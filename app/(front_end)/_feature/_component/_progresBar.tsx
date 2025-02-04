export default function ProgressBar(props:{
    percentage:number,
    label:string,
}) {
    return (
        <div className={"flex flex-col"}>
            <div className={"flex justify-between"} style={{width:props.percentage+"%"}} >
                <span className={"font-semibold capitalize"}>{props.label}</span>
                <span className={"font-semibold"}>{props.percentage}%</span>
            </div>
            <div className={"relative h-2 w-full bg-accent rounded-full"}>
                <div className={"absolute top-0 left-0 h-full bg-secondary rounded-full"} style={{width:props.percentage+"%"}} >
                </div>
            </div>
        </div>
    )
}