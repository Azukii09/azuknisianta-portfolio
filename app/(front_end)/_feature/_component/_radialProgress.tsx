export default function RadialProgressBar(props:{
    percentage:number,
    language:string,
}){
    return (
        <div className={"flex flex-col justify-center"}>
            <div className="relative w-32 h-32">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                    {/*Background circle*/}
                    <circle
                        className="circle-progress"
                        strokeWidth="5"
                        cx="50"
                        cy="50"
                        r="40"
                    ></circle>
                    {/*Progress circle*/}
                    <circle
                        className="stroke-secondary"
                        strokeWidth="5"
                        strokeLinecap="round"
                        cx="50"
                        cy="50"
                        r="40"
                        fill="transparent"
                        strokeDasharray="251.2"
                        strokeDashoffset={`calc(251.2px - (251.2px * ${props.percentage}) / 100)`}
                        transform="rotate(-90 50 50)"
                    ></circle>

                    {/*Center text*/}
                    <text x="50" y="50" fontFamily="syne" fontSize="16" fontWeight="600"
                          textAnchor="middle" alignmentBaseline="middle">{props.percentage}%
                    </text>
                </svg>
            </div>
            <div className={"flex justify-center text-primary font-semibold tracking-wide"}>{props.language}</div>
        </div>
    )
}