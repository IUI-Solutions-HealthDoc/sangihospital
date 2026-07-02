"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useHeaderNav } from "@/Components/Layout/HeaderNavContext";

type HeaderMegaNavItemProps = {
  label: string;
  href: string;
  children: ReactNode;
};

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

const CLOSE_DELAY_MS = 120;

export default function HeaderMegaNavItem({
  label,
  href,
  children,
}: HeaderMegaNavItemProps) {
  const pathname = usePathname();
  const { registerCloser } = useHeaderNav();
  const [isOpen, setIsOpen] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const clearCloseTimer = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const closeMenu = useCallback(() => {
    clearCloseTimer();
    setIsOpen(false);
  }, [clearCloseTimer]);

  const openMenu = useCallback(() => {
    clearCloseTimer();
    setIsOpen(true);
  }, [clearCloseTimer]);

  const scheduleClose = useCallback(() => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setIsOpen(false);
    }, CLOSE_DELAY_MS);
  }, [clearCloseTimer]);

  useEffect(() => registerCloser(closeMenu), [registerCloser, closeMenu]);

  useEffect(() => clearCloseTimer, [clearCloseTimer]);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  const handlePointerEnter = () => {
    openMenu();
  };

  const handlePointerLeave = (event: React.PointerEvent<HTMLDivElement>) => {
    const nextTarget = event.relatedTarget;

    if (
      nextTarget instanceof Node &&
      containerRef.current?.contains(nextTarget)
    ) {
      return;
    }

    scheduleClose();
  };

  const handleLinkClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest("a")) {
      closeMenu();
    }
  };

  return (
    <div
      ref={containerRef}
      className={`header-nav-item header-nav-item--mega${
        isOpen ? " is-mega-open" : ""
      }`}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <Link
        href={href}
        className="header-nav-link font-body"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {label}
        <ChevronDownIcon />
      </Link>

      <div
        className="header-mega__slot"
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onClickCapture={handleLinkClick}
      >
        {isOpen ? children : null}
      </div>
    </div>
  );
}
