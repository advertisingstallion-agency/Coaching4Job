"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function StickyCta() {
  const [scrolled, setScrolled] = useState(false);
  const [atContact, setAtContact] = useState(false);
  const hidden = !scrolled || atContact;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const contact = document.getElementById("contact");
    const observer = new IntersectionObserver(([entry]) => setAtContact(entry.isIntersecting));
    if (contact) observer.observe(contact);

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <Link
      href="/#contact"
      aria-hidden={hidden}
      tabIndex={hidden ? -1 : 0}
      className={`fixed bottom-5 right-5 z-40 inline-flex min-h-12 items-center gap-3 whitespace-nowrap rounded-full bg-brand-yellow px-6 text-sm font-bold text-brand-ink shadow-lg transition-all hover:-translate-y-0.5 sm:bottom-8 sm:right-8 sm:min-h-14 sm:px-7 sm:text-base ${
        hidden ? "pointer-events-none translate-y-4 opacity-0" : ""
      }`}
    >
      Réserver ma place
      <ArrowRight aria-hidden="true" className="size-4" />
    </Link>
  );
}
