"use client";

import { AuthProvider } from "./components/Auth";
import HomePage from "./Home/page";
import { Login } from "./Login/page";


export default function Home() {
  return (
    <>
      <AuthProvider>
        {/* <Login /> */}
        <HomePage />
      </AuthProvider>
    </>
  );
}
