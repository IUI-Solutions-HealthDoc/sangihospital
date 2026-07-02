import AppImage from "@/Components/ui/AppImage";
import { founderPage } from "./founderContent";

export default function FounderEditorial() {
  const { founder, heading, stats, paragraphs } = founderPage;

  return (
    <section className="chairman-editorial">
      <div className="chairman-editorial__inner">
        {/* Left — Text + stats */}
        <div className="chairman-editorial__text">
          <h2 className="chairman-editorial__heading">
            <span className="chairman-editorial__heading-line1">
              {heading.line1}
            </span>
            <span className="chairman-editorial__heading-line2">
              {heading.line2}
            </span>
          </h2>
          <p className="chairman-editorial__tagline">{heading.tagline}</p>

          <div className="chairman-editorial__intro">
            {paragraphs.slice(0, 2).map((para, index) => (
              <p key={index} className="chairman-editorial__intro-para">
                {para}
              </p>
            ))}
          </div>

          {/* Stats row */}
          <div className="chairman-editorial__stats">
            {stats.map((stat) => (
              <div key={stat.label} className="chairman-editorial__stat">
                <p className="chairman-editorial__stat-value">{stat.value}</p>
                <p className="chairman-editorial__stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Founder photo + name */}
        <div className="chairman-editorial__image-panel">
          <div className="chairman-editorial__photo">
            <AppImage
              src={founder.image}
              alt={founder.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>

          <div className="chairman-editorial__name-plate">
            <p className="chairman-editorial__name">{founder.name}</p>
            <p className="chairman-editorial__designation">
              {founder.title}, {founder.organization}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
