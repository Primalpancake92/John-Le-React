function SubSection({ name, children }) {
    return (
        <section className="relative w-full h-full py-10
        flex flex-col justify-center items-center">
            <div>
                <h2 className="text-5xl font-semibold text-white text-center
                mb-10">{name}</h2>
                {children}
            </div>
        </section>
    )
}

export default SubSection;