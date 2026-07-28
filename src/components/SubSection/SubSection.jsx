import Heading from "../Heading/Heading.jsx";

function SubSection({ name, children }) {
    return (
        <section className="flex flex-col gap-6">
            {/*Remember to put your heading component here
            and add relevant tailwindcss properties*/}
            <div className="grid grid-cols-2 gap-10">
                {children}
            </div>
        </section>
    );
}

export default SubSection;