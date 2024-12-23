import HalfColorImage from "../../components/halfColorImage.jsx";
import OurPromise from "./subpagesComponenet/ourPromise.jsx";
import PartnerLogos from "../../components/PartnersLogos.jsx";
export default function AboutUs() {
  return (
    <main className="mt-[133px]">
      <section>
        <HalfColorImage />
      </section>
      <section>
        <OurPromise />
      </section>
      <section>
        <PartnerLogos />
      </section>
    </main>
  );
}
