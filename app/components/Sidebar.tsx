import Image from "next/image"

import Github from "../assets/github.svg"
import Email from "../assets/email.svg"
import Whatsapp from "../assets/whatsapp.svg"

export function SideBar() {
    return(
        <div className="flex flex-col gap-14 absolute h-screen flex items-center justify-center ml-8">
            <Image alt="" src={Github} className="w-[50px] hover:scale-150 opacity-50 hover:opacity-100" />
            <Image alt="" src={Email} className="w-[50px] hover:scale-150 opacity-50 hover:opacity-100" />
            <Image alt="" src={Whatsapp} className="w-[50px] hover:scale-150 opacity-50 hover:opacity-100 " />
        </div>
    )
}