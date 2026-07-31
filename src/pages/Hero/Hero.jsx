import WindowBtns from "../../components/Terminal/WindowBtns/WindowBtns";
import { useState } from "react";

function NavigationPanel({ appName }) {
    return (
        <div className="relative w-full h-[50px] rounded-t-[11px] flex 
            justify-end items-center bg-[rgb(45,45,45,0.5)] px-5 gap-197.25">
            <p className="text-white">{appName}</p>
            <WindowBtns />
        </div>
    );
}

function TerminalText() {
    return (
        <h1>$</h1>
    );
}

function Bash() {
    return (
        <div className="relative mb-15 border h-150 w-250 border-[rgb(45,45,45,0.5)] 
        rounded-xl flex flex-col bg-[rgb(15,15,15)]">
            <NavigationPanel appName={"john_le.sh"} />
        </div>
    );
}

function Hero() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    return (
        <div className="h-[calc(100vh-100px)] w-full flex justify-center 
        items-center"
        
        onPointerMove={(e) => {
            setPosition({
                x: e.clientX,
                y: e.clientY
            })
        }}
        >
            <div
                className="
                    absolute inset-0
                    bg-[linear-gradient(to_right,rgba(22,165,255,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(22,165,255,0.3)_1px,transparent_1px)]
                    bg-[size:50px_50px]
                    [mask-image:radial-gradient(circle,black_0%,transparent_60%)]
                    [-webkit-mask-image:radial-gradient(circle,black_0%,transparent_70%)]
                "
            />
            <div className="z-500 absolute bg-(--fourth-color) rounded-full
            top-0 left-0 shadow-[0px_0px_50px_25px_rgba(35,170,255,1)]"
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
                transition: 'transform 0.05s linear'
            }}>
            </div>
            <Bash />
        </div>
    );
}

export default Hero;