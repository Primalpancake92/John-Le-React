import { NavLink } from "react-router-dom"
import resume from "../../assets/Resume/John_Le_CV_2026.pdf"
import pfp from "../../assets/images/IMG_2247.jpeg"
import Skillsgrid from "../../components/Skillsbar/Skillsbar.jsx"

function AboutSection({ children }) {
    return (
        <section className="min-h-[calc(100vh-100px)] flex flex-row items-center justify-center
            h-[calc(100vh-100px)] w-[1500px]">
            <div className="flex flex-row mb-20 items-center justify-center gap-[5rem]">
                {children}
            </div>
        </section>
    );
}

function AboutImage({ src }) {
    return (
        <div className="relative h-[500px] flex flex-col items-center justify-center">
            <div className="rounded-[30px] shrink-0">
                <img src={src}
                className="object-cover rounded-[30px] w-[100%] h-[500px]"></img>
            </div>
        </div>
    );
}

function AboutActions() {
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
                    text-white px-4 py-1.5 text-lg hover:cursor-pointer 
                    hover:shadow-[0px_0px_15px_1px_var(--secondary-color)] hover:scale-105">
                        {btn.name}
                    </a>
                )
            )}  
        </div>
    );
}

function AboutDots() {
    const dotInfo = [
        {id: 1, className: `relative w-[0px] h-[0px] bg-[var(--tertiary-color)]
            top-[-15rem] left-[-30rem] rounded-full
            shadow-[0px_0px_105px_75px_var(--tertiary-color)] z-[-5]`
        },
        {id: 2, className: `relative shadow-[0px_0px_75px_50px_var(--secondary-color)]
            w-[0px] h-[0px] top-[-5rem] left-[30rem] rounded-full z-[-5]`
        },
        {id: 3, className: `relative w-[0px] h-[0px] top-[20rem]
            shadow-[0px_0px_75px_50px_var(--fourth-color)] left-[-5rem]
            rounded-full z-[-5]`
        }
    ]

    return (
        <div className="absolute">
            {dotInfo.map((dot) =>
                <div className={dot.className} key={dot.id}>
                </div>
            )}
        </div>
    );
}

function AboutText() {
    return (
        <div className="w-[500px] h-[full] p-0 m-0 text-white">
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
                I started off my coding journey in 2023, with lots of trial and 
                error, frustration, and late night debugging. But hey that is a 
                part of the coding gig right? I started off with Python, then 
                branched into JavaScript, and now I am showcasing my skills in 
                React. 
            </p>
            <br></br>
            <p>
                I am currently looking for a software engineering internship for
                the summer of 2026.
            </p>
            <br></br>
            <p>
                Sydney, Australia
            </p>
            <AboutActions />
        </div>
    );
}

export default function About() {
    return (
        <div className="relative flex flex-col justify-cetner items-center w-full h-full">
            <AboutSection>
                <AboutImage src={pfp} />
                <AboutText />
                <AboutDots />
            </AboutSection>
            <div>
                <Skillsgrid />
            </div>
        </div>
    );
}