import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-10 w-10 rounded-full" />
            <div className="font-serif text-lg font-semibold">Honourable Merchant</div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            A community-owned standard for trade done with care.
            Certified by To-Cert. Held in common by the people it serves.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Explore</div>
          <ul className="space-y-2 text-sm">
            <li><a href="#story" className="hover:text-gold">Our Story</a></li>
            <li><a href="#how" className="hover:text-gold">How it works</a></li>
            <li><a href="#find" className="hover:text-gold">Find a Merchant</a></li>
            <li><a href="#governance" className="hover:text-gold">Governance</a></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Join</div>
          <ul className="space-y-2 text-sm">
            <li><a href="#cta" className="hover:text-gold">Download the app</a></li>
            <li><a href="#merchants" className="hover:text-gold">Become a merchant</a></li>
            <li><a href="#wallet" className="hover:text-gold">Open a wallet</a></li>
            <li><a href="#redemption" className="hover:text-gold">Redeem rewards</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Honourable Merchant. Owned by its community.</div>
          <div className="tracking-[0.18em] uppercase">Certified by To-Cert</div>
        </div>
      </div>
    </footer>
  );
}
