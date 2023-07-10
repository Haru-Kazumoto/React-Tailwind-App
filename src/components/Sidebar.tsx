import { BiSolidDashboard, BiSolidSearchAlt2, BiLogOut, BiSolidLogOut } from 'react-icons/bi';
import {AiFillPlusCircle} from 'react-icons/ai';

type Menus = {
    icon: any,
    title: string
}[]

export default function Sidebar(){

    const menus:Menus = [
        {icon: <BiSolidDashboard />,title: "Dashboard"},
        {icon: <AiFillPlusCircle />,title: "Create"},
        {icon: <BiSolidSearchAlt2 />,title: "Find"},
        {icon: <BiSolidLogOut />,title: "Logout"}
    ];

    return(
        <div className="bg-sky-200 w-[300px] h-[44rem] p-4 rounded-xl block shadow-2xl">
            <img src="/tailwind-logo.jpg" alt="" className="bg-none mix-blend-darken -m-2 mb-5 pt-7 block"/>
            <ul className='pt-[8%]'>
                {menus.map((menu, index) => (
                    <>
                        <li key={index} className='mb-6 bg-sky-300 p-[7px] rounded-2xl flex cursor-pointer 
                        hover:text-white hover:transition-all hover:bg-purple-600 hover:border-transparent 
                        hover:shadow-xl active:bg-purple-600 items-center'>
                            <span className='text-xl block float-left'>{menu.icon}</span>
                            <span className='font-semibold'>{menu.title}</span>
                        </li>
                    </>
                ))}
            </ul>
        </div>
    );
};