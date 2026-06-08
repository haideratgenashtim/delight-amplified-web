import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ShoppingBag, Coins, Trophy, Sparkles, ShieldCheck, BadgeCheck,
  Wallet, Repeat, Users, Leaf, ChevronDown, ArrowRight, Smartphone,
  QrCode, Gift, Vote, Star,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

import upShoppers from "@/assets/up-shoppers.jpg";
import upShoppers2 from "@/assets/up-shoppers-2.jpg";
import upBanner1 from "@/assets/up-banner-1.jpg";
import benefit2 from "@/assets/benefit-2.jpg";
import benefit3 from "@/assets/benefit-3.jpg";

export const Route = createFileRoute("/shopper")({
  head: () => ({
    meta: [
      { title: "Shopper — Honourable Merchant" },
      { name: "description", content: "Shop, earn, and own the future. Earn points at certified Honourable Merchants, convert to HM Tokens, and help shape the movement." },
      { property: "og:title", content: "Shopper — Honourable Merchant" },
      { property: "og:description", content: "Shop. Earn. Own the Future. The Honourable Merchant app for shoppers." },
    ],
  }),
  component: ShopperPage,
});

function ShopperPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={upShoppers2} alt="" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
        </div>
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-20 pb-16 text-center">
          <span className="pill"><Sparkles className="h-3.5 w-3.5" /> For shoppers</span>
          <h1 className="mt-8 font-serif text-5xl sm:text-6xl md:text-7xl leading-[1.02] font-medium">
            Shop. Earn.{" "}
            <span className="italic-gold">Own the future.</span>
          </h1>
          <p className="mt-7 mx-auto max-w-2xl text-lg text-muted-foreground">
            Supporting an Honourable Merchant is already a meaningful choice. Every purchase helps
            support businesses committed to ethical and responsible practices.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a href="#cta" className="btn-gold"><Smartphone className="h-4 w-4" /> Download the HM app <ArrowRight className="h-4 w-4" /></a>
            <a href="#journey" className="btn-ghost">See how it works</a>
          </div>
        </div>
      </section>

      {/* INTRO — Want to do more */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <img src={upShoppers} alt="Shoppers using the HM app" loading="lazy" className="rounded-[2rem] h-[28rem] w-full object-cover ring-1 ring-border/70" />
          <div>
            <span className="pill">The HM app</span>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl">
              Want to do <span className="italic-gold">more?</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              The HM app gives you access to the full Honourable Merchants ecosystem.
              Instantly view a merchant's certification status, tier, and latest assessment date.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                { icon: BadgeCheck, label: "Instant verification" },
                { icon: ShieldCheck, label: "Transparent certification status" },
                { icon: Leaf, label: "Protection against greenwashing" },
              ].map((f) => (
                <li key={f.label} className="flex items-center gap-3">
                  <span className="h-9 w-9 rounded-full bg-gold/12 text-gold flex items-center justify-center">
                    <f.icon className="h-4 w-4" />
                  </span>
                  <span className="text-base">{f.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* JOURNEY INFOGRAPHIC */}
      <section id="journey" className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <div className="text-center">
          <span className="pill">Your journey</span>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl">
            Shop <span className="italic-gold">→</span> Convert <span className="italic-gold">→</span> Own
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
            A simple three-step path from everyday purchases to true ownership in the movement.
          </p>
        </div>

        <div className="mt-14 relative">
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
          <div className="grid md:grid-cols-3 gap-6 relative">
            {[
              { icon: ShoppingBag, step: "01", title: "Shop", body: "Buy from certified Honourable Merchants. Points credit automatically to your wallet." },
              { icon: Repeat, step: "02", title: "Convert", body: "Tap to convert HM Points into HM Tokens — the digital heartbeat of the platform." },
              { icon: Trophy, step: "03", title: "Own", body: "Hold tokens, have your say, and help shape the future of the movement." },
            ].map((s) => (
              <div key={s.step} className="rounded-3xl border border-border/70 bg-card p-7 text-center relative">
                <div className="mx-auto h-24 w-24 rounded-full bg-gold/12 text-gold flex items-center justify-center ring-1 ring-gold/40">
                  <s.icon className="h-10 w-10" />
                </div>
                <div className="mt-5 text-xs tracking-[0.2em] text-gold">{s.step}</div>
                <h3 className="mt-2 font-serif text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EARN POINTS */}
      <FeatureBlock
        tag="Earn points"
        title={<>Earn points with <span className="italic-gold">every purchase.</span></>}
        body="Shop at certified Honourable Merchants and earn loyalty points automatically with every eligible transaction."
        bullets={[
          "Points credited directly to your wallet",
          "Rewards across the HM merchant network",
          "Simple and automatic tracking",
        ]}
        image={benefit2}
        icon={Coins}
      />

      {/* REDEEM REWARDS / TOKENS */}
      <section id="redemption" className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <div className="rounded-[2rem] border border-border/70 bg-card p-8 md:p-14">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="pill">Redeem</span>
              <h2 className="mt-5 font-serif text-4xl md:text-5xl">
                Redeem rewards or <span className="italic-gold">digital tokens.</span>
              </h2>
              <p className="mt-5 text-muted-foreground">
                HM Tokens are designed to encourage continued participation and engagement within
                the Honourable Merchant ecosystem.
              </p>
              <p className="mt-3 text-muted-foreground">
                Depending on future platform features and participating merchants, tokens may provide access to:
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  { icon: Gift, label: "Rewards & promotions" },
                  { icon: Star, label: "Exclusive member benefits" },
                  { icon: Users, label: "Community participation activities" },
                  { icon: Trophy, label: "Loyalty-based experiences within the HM ecosystem" },
                ].map((f) => (
                  <li key={f.label} className="flex items-center gap-3">
                    <span className="h-9 w-9 rounded-full bg-gold/12 text-gold flex items-center justify-center">
                      <f.icon className="h-4 w-4" />
                    </span>
                    <span>{f.label}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted-foreground italic">
                As the Honourable Merchant network grows, additional features and participation
                opportunities may continue to be introduced progressively.
              </p>
            </div>

            <div>
              <TokenUtility />
            </div>
          </div>
        </div>
      </section>

      {/* TRACK IMPACT */}
      <FeatureBlock
        tag="Your impact"
        title={<>Track your <span className="italic-gold">positive impact.</span></>}
        body="Your dashboard helps you see the difference your spending makes by tracking the social and environmental impact of the businesses you support."
        bullets={[
          "View your cumulative impact",
          "Support verified responsible businesses",
          "Make more informed purchasing decisions",
        ]}
        image={upBanner1}
        icon={Leaf}
        reverse
      />

      {/* OWNERSHIP MANIFESTO */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-24">
        <div className="text-center max-w-3xl mx-auto">
          <span className="pill">A different kind of loyalty</span>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl">
            Not another loyalty program. <br />
            <span className="italic-gold">An ownership movement.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Traditional programs reward you with points that expire or force you to buy things you
            don't need. We do things differently. The community that helps us grow should share in
            our success — the more you participate, the more ownership opportunities you unlock.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          <OwnershipCard
            icon={ShoppingBag}
            step="01"
            title="Shop & earn effortlessly"
            lead="Every time you buy from a certified Honourable Merchant, you automatically rack up HM Points through our app."
            items={[
              { label: "Seamless tracking", body: "Points link instantly to your secure digital wallet." },
              { label: "Everyday rewards", body: "Turn routine morning coffees and grocery runs into future value." },
              { label: "Zero stress", body: "No physical cards to lose, no complicated forms to fill out." },
            ]}
          />
          <OwnershipCard
            icon={Repeat}
            step="02"
            title="Turn points into HM Tokens"
            lead="Your points aren't just for show. With a single tap in the app, you can convert HM Points into HM Tokens — the digital heartbeat of our platform."
            items={[
              { label: "Real digital assets", body: "Move from passive shopper to active stakeholder." },
              { label: "Simple conversion", body: "A clean, user-friendly in-app experience with no tech headaches." },
            ]}
          />
          <OwnershipCard
            icon={Vote}
            step="03"
            title="Join the ownership movement"
            lead="As an HM Token holder, you don't just use the platform — you help shape it."
            items={[
              { label: "Have your say", body: "Influence the direction, features, and community initiatives of the HM network." },
              { label: "Grow together", body: "As more merchants and shoppers join, the influence and impact of your tokens grow too." },
            ]}
          />
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="mx-auto max-w-7xl px-5 sm:px-8 py-24">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-10 md:p-16 text-center">
          <span className="pill">Join the movement</span>
          <h2 className="mt-6 font-serif text-4xl md:text-6xl max-w-3xl mx-auto">
            Your next purchase can <span className="italic-gold">build the future.</span>
          </h2>
          <p className="mt-5 mx-auto max-w-xl text-muted-foreground">
            Download the HM app, scan your first seal, and start turning everyday shopping into
            ownership.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#" className="btn-gold"><Smartphone className="h-4 w-4" /> Download the app</a>
            <a href="/" className="btn-ghost">Back to home <ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function FeatureBlock({
  tag, title, body, bullets, image, icon: Icon, reverse,
}: {
  tag: string;
  title: React.ReactNode;
  body: string;
  bullets: string[];
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  reverse?: boolean;
}) {
  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20">
      <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <div>
          <span className="pill"><Icon className="h-3.5 w-3.5" /> {tag}</span>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl">{title}</h2>
          <p className="mt-5 text-muted-foreground max-w-lg">{body}</p>
          <ul className="mt-7 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <BadgeCheck className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-border/70">
          <img src={image} alt="" loading="lazy" className="h-[26rem] w-full object-cover" />
        </div>
      </div>
    </section>
  );
}

function OwnershipCard({
  icon: Icon, step, title, lead, items,
}: {
  icon: React.ComponentType<{ className?: string }>;
  step: string;
  title: string;
  lead: string;
  items: { label: string; body: string }[];
}) {
  return (
    <article className="rounded-3xl border border-border/70 bg-card p-7 hover:border-gold/60 transition">
      <div className="flex items-center justify-between">
        <span className="h-11 w-11 rounded-full bg-gold/12 text-gold flex items-center justify-center">
          <Icon className="h-5 w-5" />
        </span>
        <span className="text-xs tracking-[0.2em] text-gold">{step}</span>
      </div>
      <h3 className="mt-5 font-serif text-2xl">{title}</h3>
      <p className="mt-3 text-sm text-muted-foreground">{lead}</p>
      <ul className="mt-5 space-y-3">
        {items.map((it) => (
          <li key={it.label}>
            <div className="text-sm font-medium text-foreground">{it.label}</div>
            <p className="text-sm text-muted-foreground mt-0.5">{it.body}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}

function TokenUtility() {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-gold/40 bg-gold/5 p-6">
      <div className="flex items-center gap-3">
        <Coins className="h-6 w-6 text-gold" />
        <h3 className="font-serif text-2xl">What can you do with HM Tokens today?</h3>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">
        HM Tokens are utility tokens within the Honourable Merchant ecosystem. Here's a snapshot of
        what they unlock — today and as the network grows.
      </p>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="mt-5 inline-flex items-center gap-2 text-sm text-gold hover:opacity-80 transition"
      >
        {open ? "Hide token utility" : "Learn more about token utility"}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="mt-5 grid sm:grid-cols-2 gap-4">
          {[
            { icon: Wallet, title: "Spend at merchants", body: "Use tokens at participating Honourable Merchants for purchases and perks." },
            { icon: Star, title: "VIP discounts", body: "Unlock member-only pricing and seasonal offers." },
            { icon: Gift, title: "Exclusive drops", body: "Early access to limited products, events, and experiences." },
            { icon: Vote, title: "Community voice", body: "Vote on initiatives that shape the future of the network." },
            { icon: QrCode, title: "Scan-to-redeem", body: "Redeem tokens in-store with a single QR scan from the app." },
            { icon: Users, title: "Refer & multiply", body: "Earn token bonuses when friends join and shop honourably." },
          ].map((t) => (
            <div key={t.title} className="rounded-xl border border-border/70 bg-background p-4">
              <div className="flex items-center gap-2 text-gold">
                <t.icon className="h-4 w-4" />
                <span className="text-sm font-medium text-foreground">{t.title}</span>
              </div>
              <p className="mt-1.5 text-xs text-muted-foreground">{t.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
