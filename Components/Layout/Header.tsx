import AppImage from "@/Components/ui/AppImage";
import Link from "next/link";
import ServicesMegaMenu from "@/Components/Layout/ServicesMegaMenu";
import SpecialitiesMegaMenu from "@/Components/Layout/SpecialitiesMegaMenu";
import HospitalsMegaMenu from "@/Components/Layout/HospitalsMegaMenu";
import PatientCornerMegaMenu from "@/Components/Layout/PatientCornerMegaMenu";
import HeaderNav from "@/Components/Layout/HeaderNav";
import HeaderMegaNavItem from "@/Components/Layout/HeaderMegaNavItem";
import MobileMenu from "@/Components/Layout/MobileMenu";
import HeaderSearch, { HeaderSearchFallback } from "@/Components/Layout/HeaderSearch";
import ClientOnly from "@/Components/ui/ClientOnly";
import { mainNavItems } from "@/lib/navigation";

function ChevronDownIcon() {
  return (
    <svg
      className="h-3 w-3 opacity-80"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2.5 4.5L6 8L9.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MobileMenuFallback() {
  return (
    <div className="mobile-menu">
      <button
        type="button"
        className="mobile-menu__toggle"
        aria-label="Open menu"
        aria-expanded={false}
      >
        <svg
          className="mobile-menu__toggle-icon"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M4 7H20"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M4 12H20"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M4 17H14"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
}

export default function Header() {
  return (
    <header className="site-header absolute inset-x-0 top-0 z-[100] bg-transparent">
      <div className="site-header__inner mx-auto flex max-w-[1400px] items-center justify-between gap-8 px-6 py-5 lg:px-10">
        <Link
          href="/"
          className="flex shrink-0 items-center transition-opacity hover:opacity-90"
        >
          <AppImage
            src="/assets/images/icons/logo.png"
            alt="Sangi Hospital"
            width={180}
            height={56}
            priority
            className="h-10 w-auto sm:h-12"
          />
        </Link>

        <HeaderNav>
          {mainNavItems.map((item) =>
            item.megaMenu ? (
              <HeaderMegaNavItem
                key={item.label}
                label={item.label}
                href={item.href}
              >
                {item.megaMenu === "services" ? (
                  <ServicesMegaMenu />
                ) : item.megaMenu === "hospitals" ? (
                  <HospitalsMegaMenu />
                ) : item.megaMenu === "specialities" ? (
                  <SpecialitiesMegaMenu />
                ) : (
                  <PatientCornerMegaMenu />
                )}
              </HeaderMegaNavItem>
            ) : item.children ? (
              <div key={item.label} className="header-nav-item">
                <Link
                  href={item.href}
                  className="header-nav-link font-body"
                >
                  {item.label}
                  <ChevronDownIcon />
                </Link>

                <div className="header-nav-dropdown">
                  <div className="header-nav-dropdown__panel">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="header-nav-dropdown__link font-body"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div key={item.label} className="header-nav-item">
                <Link href={item.href} className="header-nav-link font-body">
                  {item.label}
                </Link>
              </div>
            ),
          )}
        </HeaderNav>

        <div className="flex shrink-0 items-center gap-3 sm:gap-5">
          <ClientOnly fallback={<HeaderSearchFallback />}>
            <HeaderSearch />
          </ClientOnly>

          <Link
            href="/appointment"
            className="btn-gradient-primary hidden rounded-full px-6 py-3 font-body text-sm font-semibold text-white sm:inline-block"
          >
            Make An Appointment
          </Link>

          <ClientOnly fallback={<MobileMenuFallback />}>
            <MobileMenu />
          </ClientOnly>
        </div>
      </div>
    </header>
  );
}
