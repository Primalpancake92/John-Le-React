import socials from "../../local_data/socials";
import { Link } from "react-router";

function Socials({ socialsArr }) {
    return (
        <div className="relative flex-col justify-center">
            {socialsArr?.map((social, Icon) => (
                <div className="relative flex items-center justify-center">
                    {Icon && <Icon size={10}/>}
                    <Link to={social.link}>{social.name}</Link>
                </div>
            ))}
        </div>
    );
}

function QuickLinks({ props }) {
    return (
        <div className="relative">
            
        </div>
    );
}

function Footer() {
    {/*
        This function returns two components, which are the social media 
        array (on the right hand side) and the copyright information (on 
        the left).
    */}

    return (
        <div>
            <Socials socialsArr={socials}/>
        </div>
    );
}

export default Footer;