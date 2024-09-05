'use client';

import { HeaderBar } from "@/app/components/Headerbar";
import { SideBar } from "@/app/components/Sidebar";

import Image from "next/image";

import Mockup1 from "@/app/assets/mockup-1.png"
import Mockup2 from "@/app/assets/mockup-2.png"
import Mockup3 from "@/app/assets/mockup-3.png"

import Background from "@/app/assets/background.png"
import { SideProject } from "@/app/components/SideBarProject";


export default function Mockup() {
    return(
        <div className="w-full h-screen flex flex-col">
            <Image alt="" src={Background} className="w-full h-screen z-[-1] absolute" />
            <HeaderBar />
            <SideBar />
            <div className="flex px-[360px] gap-10">
                <SideProject />
            <div className="w-full bg-white/50 border-t-bgOrange border-4 h-[640px] text-center flex flex-col gap-10 p-4">
                <h1 className="font-bold text-3xl text-bgOrange">Mockup</h1>
                <div className="flex justify-between">
                    <Image alt="" src={Mockup1} className="w-[300px] hover:scale-125 border rounded-3xl" />
                    <Image alt="" src={Mockup2} className="w-[300px] hover:scale-125 border rounded-3xl" />
                    <Image alt="" src={Mockup3} className="w-[300px] hover:scale-125 border rounded-3xl" />
                </div>
            </div>
            </div>
        </div>
    )
}