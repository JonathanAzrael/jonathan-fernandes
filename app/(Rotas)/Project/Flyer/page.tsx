'use client';

import { HeaderBar } from "@/app/components/Headerbar";
import { SideBar } from "@/app/components/Sidebar";

import Image from "next/image";

import Flyer1 from "@/app/assets/flyer-1.png"
import Flyer2 from "@/app/assets/flyer-2.png"
import Logo3 from "@/app/assets/logo-3.png"

import Background from "@/app/assets/background.png"
import { SideProject } from "@/app/components/SideBarProject";


export default function Flyer() {
    return(
        <div className="w-full h-screen flex flex-col">
            <Image alt="" src={Background} className="w-full h-screen z-[-1] fixed" />
            <HeaderBar />
            <SideBar />
            <div className="flex px-[160px] gap-10">
                <SideProject />
            <div className="w-full bg-white/50 border-t-bgOrange border-4 h-auto text-center flex flex-col gap-10 p-4">
                <h1 className="font-bold text-3xl text-bgOrange">Flyer</h1>
                <div className="flex flex-col gap-10 justify-between">
                        <div className="flex justify-between"> 
                            <Image alt="" src={Flyer1} className="w-[300px] hover:scale-125 border rounded-3xl" />
                            <Image alt="" src={Flyer2} className="w-[300px] h-max hover:scale-125 border rounded-3xl" />
                            {/* <Image alt="" src={} className="w-[300px] hover:scale-125 border rounded-3xl" /> */}
                        </div>
                        <div className="flex justify-between"> 
                            {/* <Image alt="" src={} className="w-[300px] hover:scale-125 border rounded-3xl" />
                            <Image alt="" src={} className="w-[300px] hover:scale-125 border rounded-3xl" />
                            <Image alt="" src={} className="w-[300px] hover:scale-125 border rounded-3xl" /> */}
                        </div>
                </div>
            </div>
            </div>
        </div>
    )
}