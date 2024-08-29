'use client';

import Image from "next/image"
import Link from "next/link"

import Logo from "@/app/assets/Logo2.png"
import Exit from "@/app/assets/exit.svg"

export function HeaderBar() {
    return(
        <div className="w-full flex mt-4 mb-[140px] items-center justify-center">
            <div className="flex justify-between items-center p-4 px-14 w-auto lg:w-[1200px] bg-white/50 border-2 border-bgOrange rounded-full text-bgOrange font-bold">
                <Image alt="" src={Logo} className="w-[120px] hover:opacity-50" />
                <div className="flex gap-20">
                    <nav className="flex gap-8">
                        <Link href="Home" className="hover:text-orange-300">Home</Link>
                        <Link href="About" className="hover:text-orange-300">About</Link>
                        <a href="/" className="hover:text-orange-300">Projects</a>
                        <a href="/" className="hover:text-orange-300">Contact</a>
                    </nav>
                    <a href="/login" className="hover:opacity-50">
                        <Image alt="" src={Exit} className="w-[20px]" />
                    </a>
                </div>
            </div>
        </div>
    )
}