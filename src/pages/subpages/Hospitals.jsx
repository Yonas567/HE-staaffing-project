import HalfColorImage from "../../components/halfColorImage.jsx";
import SlidingLogos from "../../components/SlidingLogos.jsx";
import GrayBgDescription from "./subpagesComponenet/grayBgDescription.jsx";
export default function Hospitals() {
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
    </main>
  );
}
