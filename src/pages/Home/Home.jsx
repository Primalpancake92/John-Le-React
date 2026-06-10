import { NavLink } from "react-router-dom"
import resume from "../../assets/Resume/John_Le_CV_2026.pdf"
import pfp from "../../assets/images/IMG_2247.jpeg"

function HomeSection({ children }) {
    return (
        <section className="flex flex-row items-center justify-center
        h-[calc(100vh-100px)] w-full">
            <div className="flex flex-row mb-20 gap-[10em] items-center">
                {children}
            </div>
        </section>
    );
}

function HomeImage({ src }) {
    return (
        <div className="w-[400px] rounded-[30px] shrink-0">
            <img src={src} 
            className="object-fit rounded-[30px]"></img>
            <HomeDots />
        </div>
    );
}

function HomeActions() {
    const btnInfo = [
        {id: 1, name: "Resume", file: resume},
        {id: 2, name: "Contact", path:"/John/Contact"}
    ]

    return (
        <div className="w-full h-full gap-[15px] flex flex-row mt-10">
            {btnInfo.map((btn) =>
                btn.name === "Contact" ? (
                    <NavLink key={btn.id} to={btn.path} className="rounded-full
                    flex items-center justify-center bg-white text-black px-4
                    py-1.5 text-lg">
                        {btn.name}
                    </NavLink>
                ) : (
                    <a key={btn.id} href={btn.file} download className="
                    transition-all duration-300 ease-in-out
                    rounded-full flex justify-center items-center bg-[var(--secondary-color)]
                    text-black px-4 py-1.5 text-lg hover:cursor-pointer 
                    hover:shadow-[0px_0px_15px_1px_var(--secondary-color)] hover:scale-105">
                        {btn.name}
                    </a>
                )
            )}  
        </div>
    );
}

function HomeDots() {
    return (
        <div className="absolute">
            {Array.from({length: 3}, (_, index) => 
                (index === 1) ? (
                    <div className="absolute w-[15px] h-[15px] bg-[var(--tertiary-color)] bottom-[5rem]"></div>
                ) : (
                    <div className="w-[5px] h-[5px] bg-[var(--secondary-color)]"></div>
                )
            )}
        </div>
    );
}

function HomeText() {
    return (
        <div className="w-[600px] h-[full] p-0 m-0 text-white">
            <h1 className="text-[4rem] font-bold">
                Hi, I'm 
                <span className="bg-clip-text text-transparent 
                bg-gradient-to-br from-[var(--secondary-color)]
                from-[35%] to-[var(--tertiary-color)]"> John Le</span>
            </h1>
            <h2 className="text-[3rem] font-medium mb-5">
                Frontend Developer
            </h2>
            <p>
                I am a third year Science student
                aspiring to be a frontend developer who specialises 
                in React.js. I aim to create and designs UIs that are 
                user friendly and  engaging, with a strong sense of 
                attention to detail.
            </p>
            <br></br>
            <p>
                Sydney, Australia
            </p>
            <HomeActions />
        </div>
    );
}

export default function Home() {
    return (
        <HomeSection>
            <HomeText />
            <HomeImage src={pfp} />
        </HomeSection>
    );
}