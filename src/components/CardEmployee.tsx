type CardEmployee = {
    profile_pict: string,
    name: string, 
    job: string,
    role_job: string
}

export default function CardEmployee(props: CardEmployee){
    return(
        <div className="bg-sky-300 w-80 rounded-lg h-30 p-3 shadow-xl flex mb-8">
            <img src={props.profile_pict} alt="" className="h-20 rounded-full shadow-lg"/>
            <div className="ml-1 relative flex-col items-center">
                <span className="font-semibold text-2xl">{props.name}</span>
                <span className="block pt-3 text-[12px] font-semibold">{props.job} - {props.role_job}</span>
            </div>
        </div>
    )
}