import Socials from "./Socials/Socials";
import Copyright from "./Copyright/Copyright";
import QuickLinks from "./QuickLinks/QuickLinks";
import Summary from "./Summary/Summary";

function Footer() {
    {/*
        This function returns two components, which are the social media 
        array (on the right hand side) and the copyright information (on 
        the left).
    */}

    return (
        <>
            <div className="relative flex justify-center 
            h-50 border-t border-[rgb(30,30,30)] mt-20 w-full">
                <div className="relative grid grid-cols-3 place-items-center
                w-[1540px] m-auto p-10">
                    <Summary />
                    <QuickLinks />
                    <Socials />
                </div>
            </div>
            <div className="relative flex w-full justify-center items-center">
                <Copyright />
            </div>
        </>
    );
}

export default Footer;