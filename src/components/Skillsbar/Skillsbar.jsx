import SubSection from "../SubSection/SubSection.jsx";
import SubSubSection from "../SubSubSection/SubSubSection.jsx";
import Heading from "../Heading/Heading.jsx";

export default function Skillsbar() {
    return (
        <div className="w-full flex flex-col h-max items-center">
            <Heading headingName={"< Tech Stack />"} />
            <SubSection>
                <SubSubSection name="Frontend" />
                <SubSubSection name="Core" />
                <SubSubSection name="Tools" />
                <SubSubSection name="Database" />
            </SubSection>
        </div>
    );
}