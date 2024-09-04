'use client';

import { HeaderBar } from "@/app/components/Headerbar";
import { SideBar } from "@/app/components/Sidebar";

import Image from "next/image";

import Background from "@/app/assets/background.png"
import { SideProject } from "@/app/components/SideBarProject";


export default function Project() {
    return(
        <div className="w-full h-screen flex flex-col">
            <Image alt="" src={Background} className="w-full h-screen z-[-1] absolute" />
            <HeaderBar />
            <SideBar />
            <div className="flex px-[360px] gap-10">
                <SideProject />
            <div className="w-full bg-black h-auto">

            </div>
            </div>
        </div>
    )
}