"use client";

import { AuthProvider } from "./components/Auth";
import { HeaderBar } from "./components/Headerbar";
import { SideBar } from "./components/Sidebar";
import About from "./pages/About";
import Project from "./pages/Project";
import { HomePage } from "./pages/Home";
import { Login } from "./pages/Login";


export default function Home() {
  return (
    <>
      <AuthProvider>
        {/* <Login /> */}
        {/* <HomePage /> */}
        {/* <About /> */}
        <Project />
      </AuthProvider>
      {/* <HeaderBar /> */}
      {/* <SideBar /> */}
    </>
  );
}
