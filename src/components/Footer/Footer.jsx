import Socials from "./Socials/Socials";
import Copyright from "./Copyright/Copyright.jsx";
import QuickLinks from "./QuickLinks/QuickLinks";

function Footer() {
    {/*
        This function returns two components, which are the social media 
        array (on the right hand side) and the copyright information (on 
        the left).
    */}

    return (
        <>
            <div className="relative grid grid-cols-3 place-items-center
            w-full h-50 border-t border-[rgb(30,30,30)] mt-20
            gap-20 p-7">
                <QuickLinks />
                <Socials />
            </div>
            <div className="relative flex w-full justify-center items-center">
                <Copyright />
            </div>
        </>
    );
}

export default Footer;