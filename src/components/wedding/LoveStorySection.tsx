import { Heart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import FloralDivider from "./FloralDivider";

const timeline = [
  { year: "2020", title: "First Meeting", description: "Our eyes met across a crowded room at a mutual friend's gathering. That was the moment everything changed." },
  { year: "2021", title: "First Date", description: "A cozy dinner at a little café turned into hours of laughter and deep conversations. We knew this was special." },
  { year: "2023", title: "Moving Together", description: "We took the leap and built our first home together, filling it with love, laughter, and countless memories." },
  { year: "2025", title: "The Proposal", description: "Under a sky full of stars, Kavindu got down on one knee. Through happy tears, Nethmi said yes!" },
  { year: "2026", title: "The Wedding", description: "The day we've been dreaming of — when we say 'I Do' and begin our forever journey together." },
];

const LoveStorySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="story" className="wedding-section bg-wedding-ivory">
      <div ref={ref} className={`wedding-container transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center mb-16">
          <p className="font-script text-3xl gold-text mb-2">Our Journey</p>
          <h2 className="wedding-heading">Our Love Story</h2>
          <div className="section-divider mt-4" />
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-wedding-gold-light/50 hidden md:block" />

          {timeline.map((item, i) => (
            <div key={item.year} className={`relative flex flex-col md:flex-row items-center mb-12 last:mb-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
              <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}>
                <div className="wedding-card">
                  <p className="font-sans text-xs tracking-[0.2em] uppercase gold-text mb-1">{item.year}</p>
                  <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground mb-2">{item.title}</h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed font-light">{item.description}</p>
                </div>
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-wedding-blush flex items-center justify-center z-10 hidden md:flex">
                <Heart size={14} className="text-wedding-blush-deep" fill="currentColor" />
              </div>

              <div className="md:w-1/2" />
            </div>
          ))}
        </div>

        <FloralDivider className="mt-12" />
      </div>
    </section>
  );
};

export default LoveStorySection;
