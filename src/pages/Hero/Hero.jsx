function NavigationPanel({ iterations, appName }) {
    return (
        <div className="relative w-full h-[50px] rounded-t-[11px] flex 
            justify-end items-center bg-[rgb(45,45,45,0.5)] px-5 gap-[8px]">
            <div className="left-0 w-full text-[rgb(180,180,180)]">
                {appName}
            </div>
            {Array.from({length: iterations}, (_, index) => 
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
        <div className="relative mt-35 border-1 h-[550px] w-[1000px] border-[rgb(45,45,45,0.5)] 
        rounded-xl flex flex-col bg-[rgb(15,15,15)]
        shadow-[0px_0px_125px_1px_rgba(25,165,241,0.8)]">
            <NavigationPanel iterations={3} appName={"john_le.sh"} />
        </div>
    );
}

function Hero() {
    return (
        <div className="h-max max-h-screen w-full flex justify-center items-center flex-col">
            <Bash />
        </div>
    );
}

export default Hero;