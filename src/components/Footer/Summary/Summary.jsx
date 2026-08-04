import puppyImg from "../../../assets/images/hq720.jpg";

function Summary({ puppy=puppyImg }) {
    return (
        <div className="relative flex justify-center items-center">
            <div className="relative w-27 h-30">
                <img src={puppy} className="w-27 h-30 object-cover"/>
            </div>
            <div className="relative flex flex-col justify-center">
                <name className="relative ">
                    John Le
                </name>
            </div>
        </div>
    );
}

export default Summary;