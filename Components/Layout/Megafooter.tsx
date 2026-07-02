import AppImage from "@/Components/ui/AppImage";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import {
  megaFooterColumns,
  megaFooterLegalLinks,
  megaFooterSocial,
  megaFooterUtilityLinks,
} from "./megafooterContent";
import MegafooterScrollTop from "./MegafooterScrollTop";
import MegafooterSubscribe from "./MegafooterSubscribe";
import "./megafooter.css";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 8.5H16V5.5H13.5C11.57 5.5 10 7.07 10 9V11H7V14H10V22H13V14H15.5L16 11H13V9C13 8.72 13.22 8.5 13.5 8.5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.5h4.56V23.5H.22V8.5zM8.5 8.5h4.37v2.05h.06c.61-1.15 2.1-2.37 4.32-2.37 4.62 0 5.47 3.04 5.47 6.99v7.33h-4.56v-6.5c0-1.55-.03-3.54-2.16-3.54-2.16 0-2.49 1.69-2.49 3.43v6.61H8.5V8.5z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7 3H17C19.2 3 21 4.8 21 7V17C21 19.2 19.2 21 17 21H7C4.8 21 3 19.2 3 17V7C3 4.8 4.8 3 7 3ZM12 8.2A3.8 3.8 0 1 0 12 15.8A3.8 3.8 0 1 0 12 8.2ZM17.5 6.7A1 1 0 1 0 17.5 8.7A1 1 0 1 0 17.5 6.7Z" />
    </svg>
  );
}

const socialIconMap = {
  Facebook: FacebookIcon,
  LinkedIn: LinkedInIcon,
  Instagram: InstagramIcon,
} as const;

export default function Megafooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="megafooter">
      <div className="megafooter__inner">
        <div className="megafooter__grid">
          {megaFooterColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="megafooter__column">
              {column.sections.map((section) => (
                <div key={section.title} className="megafooter__section">
                  <h3 className="megafooter__section-title">{section.title}</h3>
                  <ul className="megafooter__list">
                    {section.links.map((link) => (
                      <li key={`${section.title}-${link.label}`}>
                        <Link href={link.href} className="megafooter__link">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {section.viewAll ? (
                    <Link href={section.viewAll.href} className="megafooter__view-all">
                      {section.viewAll.label}
                    </Link>
                  ) : null}
                </div>
              ))}

              {columnIndex === megaFooterColumns.length - 1 ? (
                <MegafooterSubscribe />
              ) : null}
            </div>
          ))}
        </div>

        <div className="megafooter__utility">
          <div className="megafooter__utility-left">
            <Link href="/" className="megafooter__logo">
              <AppImage
                src="/assets/images/icons/logo.png"
                alt={siteConfig.name}
                width={150}
                height={48}
                className="megafooter__logo-image"
              />
            </Link>

            <nav aria-label="Footer utility" className="megafooter__utility-nav">
              {megaFooterUtilityLinks.map((link) => (
                <Link key={link.label} href={link.href} className="megafooter__utility-link">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="megafooter__social" aria-label="Social media">
            {megaFooterSocial.map((social) => {
              const Icon = socialIconMap[social.label];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="megafooter__social-link"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        <div className="megafooter__legal">
          <nav aria-label="Legal links" className="megafooter__legal-nav">
            {megaFooterLegalLinks.map((link) => (
              <Link key={link.label} href={link.href} className="megafooter__legal-link">
                {link.label}
              </Link>
            ))}
          </nav>

          <p className="megafooter__copyright" suppressHydrationWarning>
            Copyright © {currentYear} {siteConfig.name} All Rights Reserved.
          </p>
        </div>
      </div>

      <MegafooterScrollTop />
    </footer>
  );
}
