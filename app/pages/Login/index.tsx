'use client'

import Image from "next/image"
import { useState } from "react";

import { useAuth } from "@/app/components/Auth"
import Logo from "@/app/assets/Logo.png"
import Background from "@/app/assets/background.png"


export function Login() {

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const { login } = useAuth();

    return(
        <div className="w-full h-screen flex items-center justify-center">
            <Image alt="" src={Background} className="w-full h-screen z-[-1] absolute" />
            <div className="flex flex-col justify-between items-center bg-white shadow-2xl w-[400px] h-[500px] rounded-3xl p-10">
                <Image alt="logo" src={Logo} className="w-[140px]" />
                <h1 className="font-semibold text-xl">Access my Portfolio</h1>
                <div className="font-medium flex flex-col gap-4">
                    <div className="gap-2 flex flex-col">
                        <h1>User:</h1>
                        <input 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Your user..."
                            className="w-full rounded-lg border border-bgOrange font-light p-2">
                        </input>
                    </div>
                    <div className="gap-2 flex flex-col">
                        <h1>Password:</h1>
                        <input 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Your password..."
                            className="w-full rounded-lg border border-bgOrange font-light p-2">
                        </input>
                    </div>
                    <button type="submit" className="w-full bg-bgOrange hover:bg-orange-800 p-2 rounded-lg text-white font-medium">Enter</button>
                </div>
            </div>
        </div>
    )
}