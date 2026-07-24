import { useState } from 'react'

function NavigationPanel({ appName }) {
    return (
        <div className="relative w-full h-[50px] rounded-t-[11px] flex 
            justify-end items-center bg-[rgb(45,45,45,0.5)] px-5 gap-[8px]">
            <div className="left-0 w-full text-[rgb(180,180,180)]">
                {appName}
            </div>
            {Array.from({length: 3}, (_, index) => 
                (index == 2) ? (
                    <div key={index} className="h-[20px] w-[20px] 
                    bg-[rgb(238,65,65)] rounded-full shrink-0"></div>
                ) : (
                    <div key={index} className="h-[20px] w-[20px] 
                    bg-[rgb(180,180,180)] rounded-full shrink-0"></div>
                )
            )}
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
        <div className="relative mb-15 border-1 h-[600px] w-[1000px] border-[rgb(45,45,45,0.5)] 
        rounded-xl flex flex-col bg-[rgb(15,15,15)] shadow-[0_0_20px_10px_rgba(25,175,255,0.5)]">
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
            <div className="absolute bg-[var(--fourth-color)] rounded-full
            top-0 left-0 z-20 shadow-[0px_0px_50px_25px_rgba(35,170,255,1)]"
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