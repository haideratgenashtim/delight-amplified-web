import { Link } from "@tanstack/react-router";
import { Wallet } from "lucide-react";
import logo from "@/assets/logo.png";

export function SiteHeader() {
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
        <nav className="hidden lg:flex items-center gap-8 text-sm">
          <a href="#story" className="hover:text-gold transition">Our Story</a>
          <a href="#find" className="hover:text-gold transition">Find a Merchant</a>
          <a href="#offers" className="hover:text-gold transition">Offers</a>
          <a href="#redemption" className="hover:text-gold transition">Redemption</a>
          <a href="#governance" className="hover:text-gold transition">Governance</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="btn-ghost hidden sm:inline-flex">
            <Wallet className="h-4 w-4" /> My Wallet
          </button>
          <a href="#cta" className="btn-gold">Get the App</a>
        </div>
      </div>
    </header>
  );
}
