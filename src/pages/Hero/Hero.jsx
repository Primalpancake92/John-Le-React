function NavigationPanel ({ iterations }) {
    return (
        <div className="relative w-full h-[50px] rounded-t-[11px] flex 
            justify-end items-center bg-[rgb(45,45,45,0.5)] px-3 gap-[8px]">
            {Array.from({length: iterations}, (_, index) => 
                (index == 2) ? (
                    <div key={index} className="h-[20px] w-[20px] 
                    bg-[rgb(238,65,65)] rounded-full"></div>
                ) : (
                    <div key={index} className="h-[20px] w-[20px] 
                    bg-[rgb(123,123,123)] rounded-full"></div>
                )
            )}
        </div>
    )
}

function Bash() {
    return (
        <div className="relative mt-5 border-1 h-[750px] w-[65%] border-[rgb(45,45,45,0.5)] 
        rounded-xl flex flex-col bg-[rgb(15,15,15)]">
            <NavigationPanel iterations={3} />
        </div>
    )
}

function Hero () {
    return (
        <div className="h-max max-h-screen w-full flex justify-center items-center flex-col">
            <Bash />
        </div>
    )
}

export default Hero;