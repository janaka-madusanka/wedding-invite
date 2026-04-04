import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const photos = [
  { src: gallery1, alt: "Couple portrait in garden", w: 800, h: 1024 },
  { src: gallery2, alt: "Couple walking in garden", w: 1024, h: 800 },
  { src: gallery3, alt: "Couple formal portrait", w: 800, h: 1024 },
  { src: gallery4, alt: "Couple on beach at sunset", w: 1024, h: 800 },
];

const GallerySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="gallery" className="wedding-section bg-wedding-ivory">
      <div ref={ref} className={`wedding-container transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center mb-12">
          <p className="font-script text-3xl gold-text mb-2">Memories</p>
          <h2 className="wedding-heading">Our Gallery</h2>
          <div className="section-divider mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-xl group ${i % 3 === 0 ? "row-span-2" : ""}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                width={photo.w}
                height={photo.h}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
