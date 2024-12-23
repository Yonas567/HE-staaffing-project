import HalfColorImage from "../../components/halfColorImage.jsx";
import SlidingLogos from "../../components/SlidingLogos.jsx";
import GrayBgDescription from "./subpagesComponenet/grayBgDescription.jsx";
import OurAchievements from "../../components/OurAchievements.jsx";
import ServiceOverview from "../../components/ServicesOverview.jsx";
import SucessStories from "../../components/SuccessStories.jsx";
import ServiceForm from "../../components/ServiceForm.jsx";
import LookingToWork from "../../components/Lookingtowork.jsx";
import Faq from "../../components/FAQ.jsx";
export default function Consulting() {
  return (
    <main>
      <section className="mt-[133px]">
        <HalfColorImage />
      </section>
      <section>
        <SlidingLogos />
      </section>
      <section>
        <GrayBgDescription />
      </section>
      <section>
        <OurAchievements />
      </section>
      <section>
        <ServiceOverview />
      </section>
      <section>
        <SucessStories />
      </section>
      <section>
        <Faq />
      </section>
      <section>
        <ServiceForm />
      </section>
      <section>
        <LookingToWork />
      </section>
    </main>
  );
}
