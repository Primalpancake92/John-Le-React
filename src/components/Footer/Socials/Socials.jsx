import socials from "../../../local_data/socials";

function Socials({ socialsArr=socials }) {
    return (
        <div className="relative">
            <h1 className="relative text-(--secondary-color)
            font-bold mb-3">
                SOCIALS
            </h1>
            {socialsArr?.map(({ name, Icon, link }) => (
                <div key={name} className="relative flex justify-start
                items-center mb-1 gap-3 text-md  text-[rgb(115,114,114)]
                hover:text-white transition-color duration-300 ease-in-out">
                    {Icon && <Icon size={15}/>}
                    <a href={link} target="_blank">{name}</a>
                </div>
            ))}
        </div>
    );
}

export default Socials;