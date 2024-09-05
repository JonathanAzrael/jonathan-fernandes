'use client';

import { HeaderBar } from "@/app/components/Headerbar";
import Image from "next/image"

import Background from "@/app/assets/background.png"
import { SideBar } from "@/app/components/Sidebar";

export default function About() {
    return(
        <div className="w-full h-screen flex flex-col">
            <Image alt="" src={Background} className="w-full h-screen z-[-1] absolute" />
            <HeaderBar />
            <SideBar />
            <div className="mx-[160px] h-[640px] p-10 flex gap-[200px] bg-white/50 border-t-bgOrange border-4 justify-between text-gray-800">
                <div className="flex flex-col items-center gap-10 ">
                    <h1 className="text-3xl font-bold">About-me</h1>
                    <h2>I'm asdsadsadasdasdasdasdas sdasdas sdasdas sdasdas sdasdas sdasdas sdasdas sdasdas sdasdas sdasdas sdasdas sdasdas</h2>
                </div>
                    <div className="flex flex-col items-center gap-10 font-semibold">
                        <h1 className="font-bold text-4xl">Skills</h1>
                        <div className="flex gap-10 justify-between">
                            <ul className="text-xl w-max flex flex-col gap-2">
                                <h1 className="font-bold text-3xl pb-2 text-bgOrange">Design:</h1>
                                <li>- User Experience</li>
                                <li>- User Interface</li>
                                <li>- Photoshop</li>
                                <li>- Corel Draw</li>
                                <li>- Illustrator</li>
                                <li>- InDesign</li>
                            </ul>
                            <ul className="text-xl flex flex-col gap-2">
                                <h1 className="font-bold text-3xl pb-2 text-bgOrange">Tecnologies:</h1>
                                <li>Typescript</li>
                                <li>React</li>
                                <li>NextJs</li>
                                <li>NodeJs</li>
                                <li>Dart - Flutter</li>
                                <li>MySQL</li>
                                <li>TailwindCSS</li>
                            </ul>
                        </div>
                    </div>
            </div>
        </div>
    )
}