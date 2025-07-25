import SlidingLogos from "../../components/SlidingLogos";
import GrayBgDescription from "./subpagesComponenet/grayBgDescription.jsx";
import HalfColorImage from "../../components/halfColorImage.jsx";
import OurAchievements from "../../components/OurAchievements.jsx";
import ServiceOverview from "../../components/ServicesOverview.jsx";
import SucessStories from "../../components/SuccessStories.jsx";
import ServiceForm from "../../components/ServiceForm.jsx";
import LookingToWork from "../../components/Lookingtowork.jsx";
import Faq from "../../components/Faq.jsx";
export default function SecurityStaffing() {
  return (
    <main className="mt-[133px]">
      <section>
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
