function SubSection({ name, children }) {
    return (
        <section className="relative w-max h-screen py-10 
        flex flex-col">
            <div className="flex justify-center items-center my-6">
                <div className="border-t border-(--secondary-color) w-10 "></div>
                <span className="flex items-center text-3xl text-(--secondary-color)
                font-md px-4">
                    {name}
                </span>
                <div className="grow h-px border-(--secondary-color)
                rounded-full bg-linear-to-r
                from-(--secondary-color) to-[rgba(15,15,15,0.28)]"></div>
            </div>
            {children}
        </section>
    );
}

export default SubSection;