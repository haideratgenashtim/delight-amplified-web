import { Link } from "@tanstack/react-router";
import { Menu, Wallet } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const menuLinks = [
  { label: "Our Story", href: "/our-story" },
  { label: "Find Merchant", href: "/#find" },
  { label: "Offers", href: "/#offers" },
  { label: "Redemption", href: "/#redemption" },
  { label: "Governance", href: "/#governance" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[color-mix(in_oklab,var(--background)_82%,transparent)] border-b border-border/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-20 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Honourable Merchant" className="h-11 w-11 rounded-full ring-1 ring-gold/40" />
          <div className="leading-tight">
            <div className="font-serif text-lg font-semibold">Honourable Merchant</div>
            <div className="text-[10px] tracking-[0.22em] text-muted-foreground uppercase">A movement, not a brand</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link
            to="/shopper"
            className="hover:text-gold transition"
            activeProps={{ className: "text-gold" }}
          >
            Shopper
          </Link>
          <Link
            to="/merchant"
            className="hover:text-gold transition"
            activeProps={{ className: "text-gold" }}
          >
            Merchant
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <button className="btn-ghost hidden sm:inline-flex">
            <Wallet className="h-4 w-4" /> My Wallet
          </button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-border/70 hover:border-gold/60 hover:text-gold transition"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetHeader>
                <SheetTitle className="font-serif text-2xl">Explore</SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-1">
                {menuLinks.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="px-3 py-3 rounded-lg text-base hover:bg-accent hover:text-gold transition"
                  >
                    {l.label}
                  </a>
                ))}
                <Link
                  to="/shopper"
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-lg text-base hover:bg-accent hover:text-gold transition md:hidden"
                >
                  Shopper
                </Link>
                <Link
                  to="/merchant"
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-lg text-base hover:bg-accent hover:text-gold transition md:hidden"
                >
                  Merchant
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
