import { NavLink } from "react-router-dom";
import navLinks from "../../local_data/navLinks";

function Avatar({ profile }) {
    return (
        <NavLink to="/" className="text-[rgb(255,255,255)] text-[1.2rem] flex
        items-center gap-5">
            <div className="relative w-[51px] h-[51px] rounded-full shrink-0">
                <img src="../src/assets/images/hq720.jpg"
                className="w-[51px] h-[51px] rounded-full object-cover"></img>
            </div>
            <div className="relative flex flex-col text-sm">
                <p className="text-2xl text-(--secondary-color)">
                    {`< ${profile.name} />`}
                </p>
            </div>
        </NavLink>
    )
}

function ContactNav({ path }) {
    return (
        <div className="px-[13px] border-[var(--secondary-color)]
        bg-[var(--secondary-color)] text-[white] h-[41px] flex items-center
        justify-center backdrop-blur-lg rounded-full transition-all duration-300
        ease-in-out 
        hover:shadow-[inset_-1px_1px_3px_rgba(200,200,255,0.5),0_0px_15px_5px_rgba(80,169,252,0.5)]">
            <NavLink to={path} className="
            text-[1.2rem] text-(--font-color)]">
                Contact Me
            </NavLink>
        </div>
    );
}

function NavCentre({ links }) {
    if (!Array.isArray(links)) {
        console.log("The prop is not an array");
        return null;
    }

    return (
        <div className="z-[5555555] rounded-full flex justify-center items-center gap-x-2
        border-2 border-[rgb(45,45,45)] bg-[#0E0F0E] h-[54px] px-[8px] antialiased">
            {links.map((link) => (
                <NavLink key={link.id} to={link.path}
                className={({ isActive }) =>
                `relative transition-all duration-500 ease-in-out px-3 py-[5px]
                flex text-[1.1rem] px-3
                ${isActive ?
                "text-white bg-[rgba(255,255,255,0.1)] backdrop-blur-m rounded-full\
                shadow-[inset_-1px_1px_2px_rgba(255,255,255,0.5)]" :
                "text-(--font-color) hover:text-[white] hover:cursor-pointer\
                hover:bg-[rgba(255,255,255,0.1)] backdrop-blur-sm rounded-full\
                hover:shadow-[inset_-1px_1px_2px_rgba(255,255,255,0.5)]"}`}>
                    {link.linkName}
                </NavLink>
            ))}
        </div>
    );
}

function Navbar() {
    const profile = {
        name: "John Le"
    }

    return (
        <nav className="top-0 z-25 sticky h-20 w-full flex flex-row
        px-35 items-center justify-center">
            <div className="w-full grid grid-cols-3 items-center">
                <div className="justify-self-start">
                    <Avatar profile={profile}/>
                </div>
                <div className="justify-self-center">
                    <NavCentre links={navLinks}/>
                </div>
                <div className="justify-self-end">
                    <ContactNav path={"/John/Contact"}/>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;