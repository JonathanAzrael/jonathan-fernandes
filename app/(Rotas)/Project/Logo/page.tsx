'use client';

import { HeaderBar } from "@/app/components/Headerbar";
import { SideBar } from "@/app/components/Sidebar";

import Image from "next/image";

import Logo1 from "@/app/assets/logo-1.png"
import Logo2 from "@/app/assets/logo-2.png"
import Logo3 from "@/app/assets/logo-1.png"

import Background from "@/app/assets/background.png"
import { SideProject } from "@/app/components/SideBarProject";


export default function Logo() {
    return(
        <div className="w-full h-screen flex flex-col">
            <Image alt="" src={Background} className="w-full h-screen z-[-1] absolute" />
            <HeaderBar />
            <SideBar />
            <div className="flex px-[360px] gap-10">
                <SideProject />
            <div className="w-full h-auto text-center flex flex-col justify-between">
                <h1 className="font-bold text-3xl text-bgOrange">Logo</h1>
                <div className="flex justify-between">
                    <Image alt="" src={Logo1} className="w-[300px] hover:scale-125" />
                    <Image alt="" src={Logo2} className="w-[300px] hover:scale-125" />
                    <Image alt="" src={Logo1} className="w-[300px] hover:scale-125" />
                </div>
            </div>
            </div>
        </div>
    )
}