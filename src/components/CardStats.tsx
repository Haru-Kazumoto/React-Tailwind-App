type Card = {
    icon: any,
    title: string,
    subTitle: number
}

export default function CardStats(props: Card){
    return(
        <div className="bg-sky-200 -ml-4 w-[30%] rounded-lg h-28 p-5 flex shadow-lg">
            <span className='text-4xl items-center mt-3'>{props.icon}</span>
            <div className='-mt-1 ml-3'>
                <h2 className='font-semibold text-lg'>{props.title}</h2>
                <p className='mt-1 font-bold text-3xl'>{props.subTitle}</p>
            </div>
        </div>
    )
}