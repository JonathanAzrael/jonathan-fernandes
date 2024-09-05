'use client';

import { HeaderBar } from "@/app/components/Headerbar";
import { SideBar } from "@/app/components/Sidebar";

import Image from "next/image";

import Background from "@/app/assets/background.png"

export default function Contact() {
    return(
        <div className=" w-full h-screen flex flex-col">
            <Image alt="" src={Background} className="w-full h-screen z-[-1] absolute" />
            <HeaderBar />
            <SideBar />
            <div className="mx-[160px] h-[640px] p-10 flex gap-[200px] bg-white/50 border-t-bgOrange border-4 justify-between text-gray-800">
                
            </div>
        </div>
    )
}