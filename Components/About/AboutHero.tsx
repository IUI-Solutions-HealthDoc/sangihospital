import AppImage from "@/Components/ui/AppImage";
import { aboutHero } from "./aboutContent";

export default function AboutHero() {
  return (
    <section className="about-hero bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Image column */}
          <div className="about-hero__image-wrap relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,3,40,0.12)]">
              <AppImage
                src={aboutHero.image}
                alt="Sangi Hospital building"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Decorative accent */}
            <div
              className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-2xl bg-gradient-primary opacity-[0.08]"
              aria-hidden="true"
            />
          </div>

          {/* Content column */}
          <div className="about-hero__content">
            <p className="font-body text-sm font-semibold uppercase tracking-[0.25em] text-foreground-accent">
              {aboutHero.eyebrow}
            </p>

            <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-foreground-deeper sm:text-4xl lg:text-[2.75rem]">
              {aboutHero.heading}
            </h2>

            <div className="mt-6 space-y-4">
              {aboutHero.paragraphs.map((para, index) => (
                <p
                  key={index}
                  className="font-body text-base leading-relaxed text-slate-600"
                >
                  {para}
                </p>
              ))}
            </div>

            {aboutHero.closingNote && (
              <p className="mt-6 font-body text-sm italic text-foreground-accent">
                {aboutHero.closingNote}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
