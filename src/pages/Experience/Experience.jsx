import experience from "../../local_data/workExperience";
import Profile from "../../components/Profile/Profile";
import ExperienceTile from "../../components/ExperienceTile/ExperienceTile";
import Footer from "../../components/Footer/Footer";

function Experiences() {
    return (
        <div className="grid grid-rows-3 grid-cols-1 w-175">
            <ExperienceTile />
        </div>
    );
}

export default function ExperienceTimeline() {
    return (
        <div className="relative flex flex-col justify-center">
            <Profile />
            <Experiences />
            <Footer />
        </div>
    )
}