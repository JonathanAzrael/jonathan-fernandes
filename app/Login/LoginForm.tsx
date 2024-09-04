// app/Login/LoginForm.tsx
'use client';

import { useState } from "react";
import { useRouter } from 'next/router';
import { useAuth } from "@/app/components/Auth";

export function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const isAuthenticated = login(username, password);

        if (isAuthenticated) {
            router.push('/home');
        } else {
            alert('Usuário ou senha inválidos!');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="font-medium flex flex-col gap-4">
            <div className="gap-2 flex flex-col">
                <h1>User:</h1>
                <input 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Your user..."
                    className="w-full rounded-lg border border-bgOrange font-light p-2"
                />
            </div>
            <div className="gap-2 flex flex-col">
                <h1>Password:</h1>
                <input 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Your password..."
                    className="w-full rounded-lg border border-bgOrange font-light p-2"
                />
            </div>
            <button type="submit" className="w-full bg-bgOrange hover:bg-orange-800 p-2 rounded-lg text-white font-medium">Enter</button>
        </form>
    )
}
