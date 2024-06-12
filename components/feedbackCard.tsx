'use client'

import { Fade } from "react-awesome-reveal"

export default function FeedbackCard(props:any){
    return <Fade duration={500}>
    <div className="h-56 w-80   rounded-sm shadow-sm border-2 border-gray-100 flex flex-col justify-between items-center dark:bg-zinc-900 dark:border-gray-600 ">
        <div className="flex h-1/4 justify-between w-full items-center px-4 font-bold">
            <div>
            {props.name}
            </div>
            <div>
                {props.rating}⭐
            </div>
        </div>
        <div className="text-clip overflow-hidden h-3/4 w-full flex justify-start items-center text-center pl-2 text-sm  font-light">
        {props.description}
        </div>
        
    </div>
    </Fade>
}