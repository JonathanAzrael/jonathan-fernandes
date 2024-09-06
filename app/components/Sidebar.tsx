import Image from "next/image"

import Github from "../assets/github.svg"
import Email from "../assets/email.svg"
import Whatsapp from "../assets/whatsapp.svg"

export function SideBar() {
    return(
        <div className="hidden lg:flex flex-col gap-14 h-screen flex items-center justify-center ml-8 absolute">
            <a href="https://github.com/JonathanAzrael">
                <Image alt="" src={Github} className="w-[50px] hover:scale-150 opacity-50 hover:opacity-100" />
            </a>
            <Image alt="" src={Email} className="w-[50px] hover:scale-150 opacity-50 hover:opacity-100" />
            <a href="https://api.whatsapp.com/send?phone=5584991069968&text=Ol%C3%A1,%20estou%20interessado%20em%20seus%20servi%C3%A7os!">
                <Image alt="" src={Whatsapp} className="w-[50px] hover:scale-150 opacity-50 hover:opacity-100 " />
            </a>
        </div>
    )
}