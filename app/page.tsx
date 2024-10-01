"use client";

import HomePage from "./(Rotas)/Home/page";
import Image from "next/image";
import Background from "@/app/assets/background.png"


export default function Home() {
  return (
    <>
        <Image alt="" src={Background} className="w-full h-screen z-[-1] fixed" />
        <HomePage />
    </>
  );
}
