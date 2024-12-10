const images = [
  "/img1.jpg", // Assuming images are in public/images folder
  "/img1.jpg",
  "/img1.jpg",
  "/img1.jpg",
  "/img1.jpg",
  "/img1.jpg",
];
const [currentIndex, setCurrentIndex] = useState(0);
const [isTransitioning, setIsTransitioning] = useState(false);

// Add duplicate images for seamless looping
const extendedImages = [...images, ...images];

// Automatically transition to the next slide
useEffect(() => {
  const interval = setInterval(() => {
    handleNext();
  }, 3000); // 3 seconds per slide

  return () => clearInterval(interval);
}, []);

// Handle next slide
const handleNext = () => {
  if (isTransitioning) return; // Prevent double transitions
  setIsTransitioning(true);
  setCurrentIndex((prevIndex) => prevIndex + 1);
};

// Handle previous slide
const handlePrevious = () => {
  if (isTransitioning) return; // Prevent double transitions
  setIsTransitioning(true);
  setCurrentIndex((prevIndex) => prevIndex - 1);
};

// Reset position for seamless infinite scrolling
useEffect(() => {
  const transitionEndHandler = () => {
    setIsTransitioning(false);
    if (currentIndex === images.length) {
      setCurrentIndex(0); // Reset to the first image
    } else if (currentIndex === -1) {
      setCurrentIndex(images.length - 1); // Reset to the last image
    }
  };

  const timeout = setTimeout(transitionEndHandler, 500); // Match the CSS transition duration
  return () => clearTimeout(timeout);
}, [currentIndex, images.length]);
/////////////////
////////////
////////////////
//////////////////
//////////////////
<div className="relative overflow-hidden w-full h-64 bg-gray-200">
  {/* Carousel Images */}
  <div
    className="flex transition-transform duration-500 ease-in-out"
    style={{
      transform: `translateX(-${(currentIndex % images.length) * 100}%)`,
    }}>
    {extendedImages.map((src, index) => (
      <img
        key={index}
        src={src}
        alt={`Slide ${index + 1}`}
        className="w-full h-full object-cover"
      />
    ))}
  </div>

  {/* Navigation Buttons */}
  <button
    onClick={handlePrevious}
    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
    &larr;
  </button>
  <button
    onClick={handleNext}
    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
    &rarr;
  </button>
</div>;
