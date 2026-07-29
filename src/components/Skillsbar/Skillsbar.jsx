import SubSection from "../SubSection/SubSection.jsx";
import SubSubSection from "../SubSubSection/SubSubSection.jsx";
import Heading from "../Heading/Heading.jsx";

export default function Skillsbar() {
    return (
        <div className="relative flex flex-col items-center justify-center 
        w-full h-full">
            <SubSection name={"< Tech Stack />"}>
                <SubSubSection name="Frontend" />
                <SubSubSection name="Core" />
                <SubSubSection name="Tools" />
                <SubSubSection name="Database" />
            </SubSection>
        </div>
    );
}