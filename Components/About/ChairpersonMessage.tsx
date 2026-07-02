import AppImage from "@/Components/ui/AppImage";
import { chairpersonMessage } from "./aboutContent";

export default function ChairpersonMessage() {
  const { brand, heading, name, title, image, blocks } = chairpersonMessage;

  return (
    <section className="chairperson-message" aria-labelledby="chairperson-title">
      <div className="chairperson-message__layout">
        <aside className="chairperson-message__portrait">
          <div className="chairperson-message__photo-wrap">
            <AppImage
              src={image}
              alt={name}
              fill
              className="chairperson-message__photo"
              sizes="(max-width: 991px) 100vw, 50vw"
              priority={false}
            />
            <div className="chairperson-message__photo-overlay" aria-hidden="true" />
          </div>

          <div className="chairperson-message__intro">
            <p className="chairperson-message__brand">{brand}</p>
            <h2 id="chairperson-title" className="chairperson-message__heading">
              {heading}
            </h2>
            <p className="chairperson-message__name">{name}</p>
            <p className="chairperson-message__title">{title}</p>
          </div>
        </aside>

        <div className="chairperson-message__message">
          <div className="chairperson-message__content">
            {blocks.map((block, index) => {
              if (block.type === "heading") {
                return (
                  <h3 key={`${block.type}-${index}`} className="chairperson-message__section-title">
                    {block.text}
                  </h3>
                );
              }

              if (block.type === "quote") {
                return (
                  <blockquote
                    key={`${block.type}-${index}`}
                    className="chairperson-message__quote"
                  >
                    <p>{block.text}</p>
                  </blockquote>
                );
              }

              if (block.type === "signoff") {
                return (
                  <div key={`${block.type}-${index}`} className="chairperson-message__signoff">
                    {block.lines.map((line, lineIndex) => (
                      <p
                        key={`${line}-${lineIndex}`}
                        className={
                          lineIndex === block.lines.length - 1
                            ? "chairperson-message__signoff-role"
                            : lineIndex === 1
                              ? "chairperson-message__signoff-name"
                              : undefined
                        }
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                );
              }

              return (
                <p key={`${block.type}-${index}`} className="chairperson-message__paragraph">
                  {block.text}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
