"use client";

import { AuthProvider } from "./components/Auth";
import HomePage from "./(Rotas)/Home/page";



export default function Home() {
  return (
    <>
      {/* <AuthProvider> */}
        <HomePage />
      {/* </AuthProvider> */}
    </>
  );
}
