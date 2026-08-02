import navLinks from "../../../local_data/navLinks";
import { Link } from "react-router";

function QuickLinks({ links=navLinks }) {
    return (
        <div className="relative text-white">
            <h1 className="relative text-(--secondary-color)">NAVIGATION</h1>
            {links.map((link) => (
                <div key={link.div} className="flex items-center hover:underline">
                    <Link to={link.path}>{link.linkName}</Link>
                </div>
            ))}
        </div>
    );
}

export default QuickLinks;