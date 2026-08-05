import puppyImg from "../../../assets/images/hq720.jpg";

function Summary({ puppy=puppyImg }) {
    return (
        <div className="relative flex justify-center items-center gap-5">
            <div className="relative w-25 h-25">
                <img src={puppy} className="w-25 h-25 object-cover rounded-lg"/>
            </div>
            <div className="relative flex flex-col justify-center">
                <name className="relative bg-clip-text text-transparent
                bg-linear-to-br from-(--secondary-color)
                from-10% to-(--tertiary-color) text-2xl font-bold mb-1">
                    John Le
                </name>
                <p className="relative text-sm text-white w-80">
                    Aspiring front-end web developer that is highly passionate 
                    about building modern and dynamic frontend applications.
                </p>
            </div>
        </div>
    );
}

export default Summary;