import { NavLink } from "react-router-dom"

function Avatar({ profile }) {
    return (
        <NavLink to="/" className="text-[rgb(255,255,255)] text-[1.3rem] flex
        items-center gap-5">
            <div className="relative w-[64px] h-[64px] rounded-full shrink-0">
                <img src="../src/assets/images/1741594104211.jpg"
                className="w-[64px] h-[64px] rounded-full object-fit"></img>
            </div>
            <div className="relative flex flex-col text-sm">
                <p className="text-2xl">{profile.name}</p>
                <p className="text-md">{profile.basic_info} | {profile.specialisation}</p>
            </div>
        </NavLink>
    )
}

function ContactNav({ path }) {
    return (
        <div className="px-[14px] border-[var(--secondary-color)]
        bg-[rgba(0,166,255,0.52)] text-[white] h-[46px] flex items-center
        justify-center backdrop-blur-lg rounded-full transition-all duration-300
        ease-in-out 
        hover:shadow-[inset_-1px_1px_3px_rgba(200,200,255,0.5),0_0px_15px_5px_rgba(25,165,241,0.5)]">
            <NavLink to={path} className="
            text-[1.3rem] text-[var(--font-color)]">
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
        <div className="rounded-full flex justify-center items-center gap-x-2
        border-1 bg-[rgba(15,15,15)] h-[64px] px-[8px] hover:border-1 hover:border-[grey]
        transition-all duration-300 ease-out antialiased backdrop-blur-md">
            {links.map((link) => (
                <NavLink key={link.id} to={link.path}
                className={({ isActive }) => 
                `relative transition-all duration-500 ease-in-out px-4 py-2
                flex text-[1.3rem]
                ${isActive ?
                "text-white bg-[rgba(255,255,255,0.1)] backdrop-blur-m rounded-full\
                shadow-[inset_-1px_1px_2px_rgba(255,255,255,0.5)]" :
                "text-[var(--font-color)] hover:text-[white] hover:cursor-pointer\
                hover:bg-[rgba(255,255,255,0.1)] backdrop-blur-sm rounded-full\
                hover:shadow-[inset_-1px_1px_2px_rgba(255,255,255,0.5)]"}`}>
                    {link.linkName}
                </NavLink>
            ))}
        </div>
    );
}

function Navbar() {
    const navLinks = [
        {id: "home", path: "/John/Home", linkName: "Home"},
        {id: "about", path: "/John/About", linkName: "About"},
        {id: "experience", path: "/John/Experience", linkName: "Experience"},
        {id: "projects", path: "/John/Projects", linkName: "Projects"}
    ];

    const profile = {
        name: "John Le",
        basic_info: "UTS",
        specialisation: "Front end web development"
    }

    return (
        <nav className="relative h-[125px] w-full bg-[rgba(0,0,0,0.6)] flex
        px-15 items-center justify-center">
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