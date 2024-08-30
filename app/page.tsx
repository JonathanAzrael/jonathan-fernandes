"use client";

import { AuthProvider } from "./components/Auth";
import { HeaderBar } from "./components/Headerbar";
import { SideBar } from "./components/Sidebar";
import About from "./About/page";
import Project from "./Project/page";
import { HomePage } from "./Home/page";
import { Login } from "./Login/page";


export default function Home() {
  return (
    <>
      {/* <AuthProvider> */}
        {/* <Login /> */}
        {/* <HomePage /> */}
        {/* <About /> */}
        {/* <Project /> */}
      {/* </AuthProvider> */}
      <HeaderBar />
      {/* <SideBar /> */}
    </>
  );
}
