'use client';

import Image from "next/image";
import { useState } from "react";
import { useRouter } from 'next/router';

import { useAuth } from "@/app/components/Auth";
import Logo from "@/app/assets/Logo.png";
import Background from "@/app/assets/background.png";
import { LoginForm } from "./LoginForm";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const isAuthenticated = login(username, password);
      
        if (isAuthenticated) {
            router.push('/Home');
        } else {
            alert('Usuário ou senha inválidos!');
        }
    };

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <Image alt="" src={Background} className="w-full h-screen z-[-1] absolute" />
            <div className="flex flex-col justify-between items-center bg-white shadow-2xl w-[400px] h-[500px] rounded-3xl p-10">
                <Image alt="logo" src={Logo} className="w-[140px]" />
                <h1 className="font-semibold text-xl">Access my Portfolio</h1>
                <LoginForm />
            </div>
        </div>
    )
}
