import AppImage from "@/Components/ui/AppImage";
import { HospitalPhones } from "@/Components/ui/HospitalPhones";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
      <path d="M13.5 8.5H16V5.5H13.5C11.57 5.5 10 7.07 10 9V11H7V14H10V22H13V14H15.5L16 11H13V9C13 8.72 13.22 8.5 13.5 8.5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.5h4.56V23.5H.22V8.5zM8.5 8.5h4.37v2.05h.06c.61-1.15 2.1-2.37 4.32-2.37 4.62 0 5.47 3.04 5.47 6.99v7.33h-4.56v-6.5c0-1.55-.03-3.54-2.16-3.54-2.16 0-2.49 1.69-2.49 3.43v6.61H8.5V8.5z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
      <path d="M7 3H17C19.2 3 21 4.8 21 7V17C21 19.2 19.2 21 17 21H7C4.8 21 3 19.2 3 17V7C3 4.8 4.8 3 7 3ZM12 8.2A3.8 3.8 0 1 0 12 15.8A3.8 3.8 0 1 0 12 8.2ZM17.5 6.7A1 1 0 1 0 17.5 8.7A1 1 0 1 0 17.5 6.7Z" />
    </svg>
  );
}

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Refund", href: "/refund" },
  { label: "Help Center", href: "/help-center" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

const footerResources = [
  { label: "Demos", href: "/demos" },
  { label: "Instructions", href: "/instructions" },
  { label: "Personal Meeting", href: "/personal-meeting" },
  { label: "Doctor List", href: "/doctors" },
  { label: "Refund Policy", href: "/refund-policy" },
];

const socialLinks = [
  { label: "Facebook", href: siteConfig.social.facebook, icon: FacebookIcon },
  { label: "LinkedIn", href: siteConfig.social.linkedin, icon: LinkedInIcon },
  { label: "Instagram", href: siteConfig.social.instagram, icon: InstagramIcon },
];


export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container position-relative">

        <div className="row g-4 g-lg-5 py-5 py-lg-6">
          <div className="col-lg-4 col-md-6">
            <Link href="/" className="site-footer__logo d-inline-block">
              <AppImage
                src="/assets/images/icons/logo.png"
                alt="Sangi Hospital"
                width={180}
                height={56}
                className="h-11 w-auto"
              />
            </Link>

            <p className="site-footer__text mt-4 mb-4">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>

            <div className="d-flex align-items-center gap-2">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="site-footer__social"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div className="col-lg-2 col-md-3 col-6">
            <h3 className="site-footer__heading font-heading">Links</h3>
            <ul className="site-footer__list list-unstyled mb-0">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="site-footer__link font-body">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 col-6">
            <h3 className="site-footer__heading font-heading">Resources</h3>
            <ul className="site-footer__list list-unstyled mb-0">
              {footerResources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="site-footer__link font-body">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-4 col-md-12">
            <h3 className="site-footer__heading font-heading">Office</h3>
            <p className="site-footer__text mb-4">
              America- 66 Brooklyn golden street 600
              <br />
              New York. USA
            </p>
            <HospitalPhones
              layout="stack"
              linkClassName="site-footer__phone font-heading"
            />
          </div>
        </div>

        <div className="site-footer__bottom row align-items-center py-4">
          <div className="col-md-6">
            <p className="site-footer__copyright font-body mb-0" suppressHydrationWarning>
              Sangi Hospital © {new Date().getFullYear()}. All Rights Reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <Link href="/privacy-policy" className="site-footer__bottom-link font-body">
              Privacy Policy
            </Link>
            <span className="site-footer__bottom-sep" aria-hidden="true">
              {" "}
              ·{" "}
            </span>
            <Link href="/cookie-policy" className="site-footer__bottom-link font-body">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
