import { FaCopyright, FaRegDot } from "react-icons/fa"

export default function Copyright() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="relative w-4/5 border-t border-[rgb(30,30,30)] flex">
            <p>
                <FaCopyright /> {currentYear} <FaRegDot /> Designed by John Le.
                All rights reserved.
            </p>
        </div>
    );
}