

export function SideProject() {
    return(
        <div className="w-[180px] h-max-auto bg-white/50 border-bgOrange border-t-4 flex flex-col p-2 gap-2">
            <h1 className="text-bgOrange font-semibold text-lg">Graphic Design</h1>
            <div className="flex flex-col font-medium gap-2">
                <a href="/Project/Logo" className="w-full p-2 border-b-2 border-bgOrange hover:text-white hover:bg-bgOrange">Logo</a>
                <a href="/" className="w-full p-2 border-b-2 border-bgOrange hover:text-white hover:bg-bgOrange">Flyer</a>
                <a href="/Project/Mockup" className="w-full p-2 border-b-2 border-bgOrange hover:text-white hover:bg-bgOrange">Mockup</a>
            </div>
            <h2 className="text-bgOrange font-semibold text-lg">Web Developer</h2>
            <div className="flex flex-col font-medium gap-2">
                <a href="/" className="w-full p-2 border-b-2 border-bgOrange hover:text-white hover:bg-bgOrange">Landing Page</a>
                <a href="/" className="w-full p-2 border-b-2 border-bgOrange hover:text-white hover:bg-bgOrange">Mobile</a>
                <a href="/" className="w-full p-2 border-b-2 border-bgOrange hover:text-white hover:bg-bgOrange">System</a>
            </div>
        </div>
    )
}