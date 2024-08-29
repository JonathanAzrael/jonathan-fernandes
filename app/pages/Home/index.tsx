'use client';

import { HeaderBar } from "@/app/components/Headerbar";
import { SideBar } from "@/app/components/Sidebar";

import Image from "next/image";

import Background from "@/app/assets/background.png"

export function HomePage() {
    return(
        <div className=" w-full h-screen flex flex-col">
            <Image alt="" src={Background} className="w-full h-screen z-[-1] absolute" />
            <HeaderBar />
            <SideBar />
            <div className="flex flex-col w-full justify-center px-[360px]">
                <div className="flex gap-8 justify-between w-full">
                    <div className="flex flex-col text-black gap-2">
                        <h3 className="text-6xl font-semibold">Welcome to my Portfolio</h3>
                        <h1 className="text-xl">asdasdasdasdasda afda fsdf adfasda </h1>
                    </div>
                    <div className="bg-white w-[500px] h-[400px]">
    
                    </div>
                </div>
            </div>
        </div>
    )
}