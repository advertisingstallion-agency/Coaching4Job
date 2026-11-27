import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const navigationLinks = [
  { href: "/#a-propos", label: "À propos" },
  { href: "/#methode", label: "Méthode" },
  { href: "/#accompagnements", label: "Accompagnements" },
  { href: "/#webinaire", label: "Webinaire" },
];

export default function Component() {
  return (
    <header className="relative z-20 border-b-2 border-brand-ink/45 bg-white">
      <div className="relative mx-auto flex h-16 max-w-[1320px] items-center gap-4 px-5 sm:px-8 xl:h-[92px] xl:px-14">
        <Link
          href="/#accueil"
          aria-label="Coaching 4 Job, accueil"
          className="flex min-w-0 items-center gap-3 text-brand-ink xl:gap-4"
        >
          <Image
            src="/images/coaching4job-logo.png"
            alt="Coaching 4 Job"
            width={2148}
            height={818}
            sizes="140px"
            className="h-[36px] w-auto xl:h-[52px]"
            preload
          />
        </Link>
        <NavigationMenu
          aria-label="Navigation principale"
          className="absolute left-1/2 hidden -translate-x-1/2 xl:flex"
        >
          <NavigationMenuList className="gap-8">
            {navigationLinks.map((link) => (
              <NavigationMenuItem key={link.label}>
                <NavigationMenuLink
                  className="nav-link !p-0 !pb-1.5 text-sm font-medium text-brand-ink hover:bg-transparent focus:bg-transparent"
                  href={link.href}
                >
                  {link.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
