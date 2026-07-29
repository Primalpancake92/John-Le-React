import Heading from "../Heading/Heading.jsx";

function SubSection({ name, children }) {
    return (
        <div className="relative flex flex-col justify-center items-center
        w-full h-screen">
            <div className="relative flex flex-col items-center justify-center
            w-full">
                <Heading headingName={name}/>
                <div className="relative grid grid-cols-2 gap-15">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default SubSection;