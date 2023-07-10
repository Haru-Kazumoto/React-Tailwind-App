import CardEmployee from "./CardEmployee";
import Card from "./CardStats";
import {BsPersonWorkspace} from 'react-icons/bs';

export default function Content(){
    return(
        <div className="bg-sky-200 h-[70px] rounded-lg p-4 w-4/5 shadow-lg">
            <h1 className="font-semibold font-inter text-3xl flex items-center justify-center mb-10">
                Tailwind App
            </h1>
            <div className="flex gap-10 justify-center mb-5">
                <Card icon={<BsPersonWorkspace />} title="Active user" subTitle={32}/>
                <Card icon={<BsPersonWorkspace />} title="Active user" subTitle={32}/>
                <Card icon={<BsPersonWorkspace />} title="Active user" subTitle={32}/>
            </div>
            <div className="bg-sky-200 -mx-3 rounded-lg h-[62.5vh] p-4 shadow-lg">
                <div className="flex flex-wrap justify-between mt-10">
                    <div className="mb-4">
                        <CardEmployee profile_pict="/employee_1.jpg" name="Kazumoto" job="PROGRAMMER" role_job="BACKEND" />
                    </div>
                    <div className="mb-4">
                        <CardEmployee profile_pict="/employee_2.jpg" name="Kaguya" job="PROGRAMMER" role_job="FRONTEND" />
                    </div>
                    <div className="mb-4">
                        <CardEmployee profile_pict="/employee_3.jpg" name="Sakura" job="PROGRAMMER" role_job="FRONTEND" />
                    </div>
                    <div className="mb-4">
                        <CardEmployee profile_pict="/employee_4.jpg" name="Matsu" job="TESTER" role_job="TESTER API" />
                    </div>
                    <div className="mb-4">
                        <CardEmployee profile_pict="/employee_5.jpg" name="Haruka" job="DESIGNER" role_job="UI/UX" />
                    </div>
                    <div className="mb-4">
                        <CardEmployee profile_pict="/employee_6.jpg" name="Hikari" job="PROGRAMMER" role_job="BACKEND" />
                    </div>
                </div>
            </div>
        </div>
    )
}