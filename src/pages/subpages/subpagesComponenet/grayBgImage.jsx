import { useLocation } from "react-router-dom";

const PATH_DATA = [
  {
    path: "/securityStaffing",
    image: "/img2.jpg",
    content: {
      title: "EVENT SECURITY GUARD PATROLS",
      description:
        "Proactive, vigilant, and highly trained, our security patrols are among the best in the industry. Ensure the safety and security of key assets at your event through our wide range of security patrol services.",
    },
  },
  {
    path: "/cleaningStaffing",
    image: "/img2.jpg",
    content: {
      title: "EVENT SECURITY GUARD PATROLS",
      description:
        "Proactive, vigilant, and highly trained, our security patrols are among the best in the industry. Ensure the safety and security of key assets at your event through our wide range of security patrol services.",
    },
  },
  {
    path: "/hotels",
    image: "/img2.jpg",
    content: {
      title: "EVENT SECURITY GUARD PATROLS",
      description:
        "Proactive, vigilant, and highly trained, our security patrols are among the best in the industry. Ensure the safety and security of key assets at your event through our wide range of security patrol services.",
    },
  },
  {
    path: "/hospitals",
    image: "/img2.jpg",
    content: {
      title: "EVENT SECURITY GUARD PATROLS",
      description:
        "Proactive, vigilant, and highly trained, our security patrols are among the best in the industry. Ensure the safety and security of key assets at your event through our wide range of security patrol services.",
    },
  },
  {
    path: "/college",
    image: "/img5.jpg",
    content: {
      title: "EVENT SECURITY GUARD PATROLS",
      description:
        "Proactive, vigilant, and highly trained, our security patrols are among the best in the industry. Ensure the safety and security of key assets at your event through our wide range of security patrol services.",
    },
  },
  {
    path: "/storesandmalls",
    image: "/img5.jpg",
    content: {
      title: "EVENT SECURITY GUARD PATROLS",
      description:
        "Proactive, vigilant, and highly trained, our security patrols are among the best in the industry. Ensure the safety and security of key assets at your event through our wide range of security patrol services.",
    },
  },
  {
    path: "/corporateoffices",
    image: "/img5.jpg",
    content: {
      title: "EVENT SECURITY GUARD PATROLS",
      description:
        "Proactive, vigilant, and highly trained, our security patrols are among the best in the industry. Ensure the safety and security of key assets at your event through our wide range of security patrol services.",
    },
  },
];

export default function GrayBgImage() {
  const { pathname } = useLocation();
  const normalizedPathname = decodeURIComponent(pathname);

  const matchedPath = PATH_DATA.find(
    (data) => data.path === normalizedPathname
  );

  if (!matchedPath) return null;

  const { image, content } = matchedPath;

  return (
    <section>
      <article className="grid lg:grid-cols-[1.3fr,1fr] mt-20">
        <div>
          <img src={image} className="hidden lg:block xl:h-[444px]" alt="" />
        </div>
        <div className="bg-black flex flex-col gap-14 pt-20 pl-4 pb-44 md:pl-10 lg:pb-32 xl:pb-10 xl:pl-40 xl:pr-20 text-white">
          <h1 className="text-3xl md:text-4xl lg:text-4xl xl:text-4xl">
            {content.title}
          </h1>
          <h3 className="text-lg md:text-lg">{content.description}</h3>
        </div>
      </article>
      {normalizedPathname === "/cleaningStaffing" && (
        <article className="grid lg:grid-cols-[1.3fr,1fr] mt-20">
          <div className="bg-black flex flex-col gap-14 pt-20 pl-4 pb-44 md:pl-10 lg:pb-32 xl:pb-10 xl:pl-40 xl:pr-20 text-white">
            <h1 className="text-3xl md:text-4xl lg:text-4xl xl:text-4xl">
              {content.title}
            </h1>
            <h3 className="text-lg md:text-lg">{content.description}</h3>
          </div>
          <div>
            <img src={image} className="hidden lg:block xl:h-[444px]" alt="" />
          </div>
        </article>
      )}
    </section>
  );
}
