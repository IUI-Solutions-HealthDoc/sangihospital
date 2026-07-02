import AppImage from "@/Components/ui/AppImage";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { specialitiesMegaMenu } from "@/lib/specialities-menu";

export default function SpecialitiesMegaMenu() {
  const { columns, description, image, imageAlt, title, viewAllHref } =
    specialitiesMegaMenu;

  return (
    <div className="header-mega">
      <div className="header-mega__panel">
        <div className="header-mega__brand">
          <div className="header-mega__image-wrap">
            <AppImage
              src={image}
              alt={imageAlt}
              fill
              sizes="240px"
              className="header-mega__image"
            />
          </div>

          <Link href="/" className="header-mega__logo">
            <AppImage
              src="/assets/images/icons/logo.png"
              alt={title}
              width={150}
              height={46}
              className="header-mega__logo-image"
            />
          </Link>

          <p className="header-mega__description">{description}</p>

          <Link href={viewAllHref} className="header-mega__cta">
            View All Specialities
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        {columns.map((column) => (
          <div key={column.title} className="header-mega__column">
            <h3 className="header-mega__column-title">{column.title}</h3>
            <ul className="header-mega__list">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="header-mega__link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
