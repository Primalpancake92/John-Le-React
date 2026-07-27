import experience from "../../local_data/workExperience";
import Profile from "../../components/Profile/Profile";
import ExperienceTile from "../../components/ExperienceTile/ExperienceTile";

function Experiences() {
    return (
        <div className="grid grid-rows-3 grid-cols-1 w-175">
            <ExperienceTile />
        </div>
    );
}

export default function ExperienceTimeline() {
    return (
        <div className="relative flex flex-row justify-center gap-10">
            <Profile />
            <Experiences />
        </div>
    )
}