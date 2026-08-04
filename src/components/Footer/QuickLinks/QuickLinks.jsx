import navLinks from "../../../local_data/navLinks";
import { Link } from "react-router";

function QuickLinks({ links=navLinks }) {
    return (
        <div className="relative">
            <h1 className="relative text-(--secondary-color) font-bold mb-3">
                NAVIGATION
            </h1>
            {links.map((link) => (
                <div key={link.div} className="flex items-center hover:text-white
                text-md text-[rgb(115,114,114)] transition-color duration-300
                mb-1">
                    <Link to={link.path}>{link.linkName}</Link>
                </div>
            ))}
        </div>
    );
}

export default QuickLinks;