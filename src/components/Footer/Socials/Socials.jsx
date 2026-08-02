import socials from "../../../local_data/socials";

function Socials({ socialsArr=socials }) {
    return (
        <div className="relative flex-col justify-center items-center">
            {socialsArr?.map(({ name, Icon, link }) => (
                <div key={name} className="relative flex justify-start
                items-center gap-2 text-white">
                    {Icon && <Icon size={20}/>}
                    <a href={link}>{name}</a>
                </div>
            ))}
        </div>
    );
}

export default Socials;