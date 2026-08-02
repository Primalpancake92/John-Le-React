    import { FaRegCopyright, FaCircle } from "react-icons/fa";

    function Copyright() {
        const currYear = new Date().getFullYear();

        return (
            <div className="relative w-365 h-auto border-t border-[rgb(30,30,30)] 
            grid grid-cols-2 m-auto py-2">
                <div className="relative text-white flex items-center 
                justify-start">
                    <div className="relative flex items-center justify-center">
                        <FaRegCopyright size={11} strokeWidth={5}/>
                    </div>
                    <p className="relative text-xs pr-0.5 pl-0.5 
                    flex justify-center items-center">
                        {currYear} John Le.
                    </p>
                    <p className="relative text-xs pl-0.5">
                        All rights reserved.
                    </p>
                </div>
                <div className="relative flex justify-end pl-0.5">
                    <p className="text-xs text-white">
                        Designed and developed with React and
                        Tailwind
                    </p>
                </div>
            </div>
        );
    }

    export default Copyright;