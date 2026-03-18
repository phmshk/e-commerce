import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { Logo } from "@/src/shared/ui/Logo";

const SOCIAL_LINKS = [
  {
    icon: <Github className="size-5" />,
    href: "https://github.com/phmshk",
    label: "GitHub",
  },
  {
    icon: <Linkedin className="size-5" />,
    href: "https://www.linkedin.com/in/philipp-litzenberger-a0896937b/",
    label: "LinkedIn",
  },
];

const COMPANY_LINKS = [
  { title: "About Us", href: "/about" },
  { title: "Contact", href: "/contact" },
  { title: "Careers", href: "/careers" },
  { title: "Journal", href: "/blog" },
  { title: "Support", href: "/support" },
];

export const Footer = () => {
  return (
    <footer className="border-t bg-background/95 backdrop-blur mx-auto w-full max-w-[1440px] p-4 md:p-8">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-5 lg:col-span-6 flex flex-col gap-4">
          <Logo />
          <p className="max-w-xs text-sm text-muted-foreground">
            Lumia. High-performance ecosystem for the modern home. Engineered
            for intelligence, designed for life.
          </p>
        </div>

        <div className="md:col-span-3 flex flex-col gap-5">
          <h4 className="text-sm font-bold uppercase text-foreground">
            Company
          </h4>
          <nav className="flex flex-col gap-3" aria-label="footer links">
            {COMPANY_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary"
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>

        <div className="md:col-span-4 lg:col-span-3 flex flex-col gap-5">
          <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">
            Connect
          </h4>
          <div className="flex flex-wrap gap-3">
            {SOCIAL_LINKS.map((social) => (
              <Button
                key={social.label}
                variant="outline"
                size="icon"
                className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                asChild
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              </Button>
            ))}
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              asChild
            >
              <a href="mailto:ph.litzenberger@gmail.com">
                <Mail className="size-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1.5 text-sm font-medium">
        <span className="text-muted-foreground">Built by</span>
        <Link
          href="https://www.linkedin.com/in/philipp-litzenberger-a0896937b/"
          className="group flex items-center gap-1 transition-colors hover:text-primary"
        >
          Philipp Litzenberger
        </Link>
      </div>
    </footer>
  );
};
