'use client';

import Image from "next/image"

import Logo from "@/app/assets/Logo2.png"
import Exit from "@/app/assets/exit.svg"

export function HeaderBar() {
    return(
        <div className="w-full hidden md:flex mt-4 mb-[80px] items-center justify-center">
            <div className="flex justify-between items-center p-4 px-14 w-auto lg:w-[1200px] bg-white/50 border-2 border-bgOrange rounded-full text-bgOrange font-semibold">
                <Image alt="" src={Logo} className="w-[120px] hover:opacity-50" />
                <div className="flex gap-20 items-center">
                    <nav className="flex gap-8">
                        <a href="/Home" className="hover:text-orange-300">Home</a>
                        <a href="/About" className="hover:text-orange-300">About</a>
                        <a href="/Project" className="hover:text-orange-300">Projects</a>
                        <a href="/Contact" className="hover:text-orange-300">Contact</a>
                    </nav>
                    <a href="https://api.whatsapp.com/send?phone=5584991069968&text=Ol%C3%A1,%20estou%20interessado%20em%20seus%20servi%C3%A7os!" className="bg-bgOrange hover:opacity-50 hover:scale-125 text-white p-2 rounded-xl">
                        {/* <Image alt="" src={Exit} className="w-[20px]" /> */}
                        Contact-me
                    </a>
                </div>
            </div>
        </div>
    )
}