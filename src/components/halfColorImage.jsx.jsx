import { useLocation } from "react-router-dom";
export default function HalfColorImage() {
  const { pathname } = useLocation();
  const normalizedPathname = decodeURIComponent(pathname); //to handle the & character as normal in client and partnership
  const titles = {
    "/service": {
      main: "EVENT MANAGEMENT SERVICES",
      sub: " WITH A COMPREHENSIVE LIST OF WORLD-CLASS EVENT MANAGEMENT SERVICES,WE OFFER THE BEST IN EVENT SECURITY,EVENT STAFFING AND CONSULTING.",
      img: "/img2.jpg",
    },
    "/resources": {
      main: "RESOURCES",
      img: "/img2.jpg",
      style: "h-200px",
    },
    "/client & partnership": {
      main: "CLIENTS AND PARTNERS",
      sub: "  WE PROVIDE END-TO-END EVENT SECURITY,STAFFING, AND CROWED MANAGEMENT SERVICES FOR MANY CLIENTS ACROSS NORTH AMERICA.",
      img: "/img2.jpg",
    },
    "/securityStaffing": {
      main: "SECURITY STAFFING",
      sub: " WITH A COMPREHENSIVE LIST OF WORLD-CLASS EVENT MANAGEMENT SERVICES,WE OFFER THE BEST IN EVENT SECURITY,EVENT STAFFING AND CONSULTING.",
      img: "/img2.jpg",
    },
    "/cleaningStaffing": {
      main: "CLEANING STAFFING",
      sub: " OUR EVENT STAFFING SERVICE PROVIDE THE SUPPORT YOU NEED, FROM PARKING ATTENDANTS TO STAFF SECURITY AND MORE.",
      img: "/img2.jpg",
    },
    "/consulting": {
      main: "CONSULTATION",
      sub: " OUR EVENT STAFFING SERVICE PROVIDE THE SUPPORT YOU NEED, FROM PARKING ATTENDANTS TO STAFF SECURITY AND MORE.",
      img: "/img2.jpg",
    },
  };
  const title = titles[normalizedPathname];
  return (
    <section>
      <article className={`grid lg:grid-cols-[1.3fr,1fr]`}>
        <div
          className={` bg-red-700 flex flex-col gap-14 pt-20 pl-4 pb-44 md:pl-10 lg:pb-32 xl:pb-44 xl:pl-40  xl:pr-4 text-white ${
            title?.style || ""
          } `}>
          <div>
            {title ? (
              <h1 className="text-3xl md:text-5xl xl:text-6xl">{title.main}</h1>
            ) : null}
          </div>
          <div>
            {title ? <h3 className="text-lg md:text-xl">{title.sub}</h3> : null}
          </div>
        </div>
        <div>
          {title ? <img src={title.img} className="hidden lg:block" /> : null}
        </div>
      </article>
    </section>
  );
}
