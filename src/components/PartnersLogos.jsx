import logo from "/he-logo.svg";

// Import all 32 logos...

export default function PartnerLogos() {
  const logos = [
    logo,
    logo,
    logo,
    logo,
    logo,
    logo,
    logo /* Add the rest of your logos here */,
  ];

  // Define unique class names for each section
  const sectionStyles = [
    "bg-red-100",
    "hidden",
    "bg-blue-100",
    "bg-yellow-100",
  ];

  return (
    <main>
      {sectionStyles.map((style, sectionIndex) => (
        <section key={sectionIndex} className={`flex ${style} p-4`}>
          {logos.map((logo, index) => (
            <div key={index} className="m-2">
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="h-16 w-auto"
              />
            </div>
          ))}
        </section>
      ))}
    </main>
  );
}
