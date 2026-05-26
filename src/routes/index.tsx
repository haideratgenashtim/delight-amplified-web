import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, MapPin, PlayCircle, ShieldCheck, Heart, Star,
  QrCode, Coins, Gift, Sparkles, Users, BadgeCheck, Smartphone,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import community from "@/assets/community.jpg";
import scanImg from "@/assets/scan.jpg";
import vendor1 from "@/assets/vendor-1.jpg";
import vendor2 from "@/assets/vendor-2.jpg";
import vendor3 from "@/assets/vendor-3.jpg";
import leadership from "@/assets/leadership.jpg";
import craft from "@/assets/craft.jpg";

import upOurStory from "@/assets/up-our-story.jpg";
import upOurStory2 from "@/assets/up-our-story-2.jpg";
import upShoppers from "@/assets/up-shoppers.jpg";
import upShoppers2 from "@/assets/up-shoppers-2.jpg";
import upParallax1 from "@/assets/up-parallax-1.jpg";
import upParallax2 from "@/assets/up-parallax-2.jpg";
import upParallax3 from "@/assets/up-parallax-3.jpg";
import upParallax4 from "@/assets/up-parallax-4.jpg";
import upBanner1 from "@/assets/up-banner-1.jpg";
import upBanner2 from "@/assets/up-banner-2.jpg";
import upBanner3 from "@/assets/up-banner-3.jpg";
import upBanner4 from "@/assets/up-banner-4.jpg";
import benefit1 from "@/assets/benefit-1.jpg";
import benefit2 from "@/assets/benefit-2.jpg";
import benefit3 from "@/assets/benefit-3.jpg";
import benefit4 from "@/assets/benefit-4.jpg";
import governance1 from "@/assets/governance-1.jpg";
import bcorpLogo from "@/assets/bcorp-logo.png";

import heroVideo from "@/assets/hero-video.mp4.asset.json";
import scanVideo from "@/assets/scan-video.mp4.asset.json";
import communityVideo from "@/assets/community-video.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Honourable Merchant — Make every purchase count." },
      { name: "description", content: "Discover honourable shops near you. Scan to verify. Earn points and tokens with every visit. A community-owned standard for trade done with care." },
      { property: "og:title", content: "Honourable Merchant" },
      { property: "og:description", content: "SHOP WITH CONFIDENCE." },
    ],
  }),
  component: Home,
});

const heroTiles = [hero1, hero2, hero3, hero4, vendor1, vendor2, vendor3, craft];
const facesRow = [vendor1, vendor2, vendor3, leadership, craft, hero1, hero2, hero3, hero4, community];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* background video */}
        <div className="absolute inset-0 -z-10">
          <video
            src={heroVideo.url}
            autoPlay muted loop playsInline
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        </div>

        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-16 pb-10 text-center">
          <span className="pill"><Sparkles className="h-3.5 w-3.5" /> SHOP WITH CONFIDENCE.</span>
          <h1 className="mt-8 font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] leading-[1.02] font-medium">
            Make every
            <br className="hidden sm:block" />{" "}
            <span className="italic-gold">purchase count.</span>
          </h1>
          <p className="mt-7 mx-auto max-w-2xl text-lg text-muted-foreground">
            The Honourable Merchant is a mark of trust that certain standards are met for how people are treated and the environment is considered. 
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a href="#cta" className="btn-gold"><Smartphone className="h-4 w-4" /> Download the app <ArrowRight className="h-4 w-4" /></a>
            <a href="#how" className="btn-ghost"><PlayCircle className="h-4 w-4 text-gold" /> See how it works</a>
          </div>

        </div>

        {/* hero image collage */}
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {heroTiles.slice(0, 4).map((src, i) => (
              <div key={i} className={`relative overflow-hidden rounded-3xl ring-1 ring-border/70 ${i % 2 ? "translate-y-6" : ""}`}>
                <img src={src} alt="A happy merchant or customer" className="h-64 md:h-80 w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="mx-auto max-w-7xl px-5 sm:px-8 py-24">
        <div className="text-center">
          <span className="pill">How it works</span>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl">Two flows. One joyful loop.</h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
            Whether you're shopping or selling, the rhythm is the same: meet, verify, reward, repeat.
            Designed to feel human at every step.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          <FlowCard
            tag="For shoppers"
            title="Scan. Earn. Redeem."
            href="Explore the shopper app"
            image={upShoppers2}
            steps={[
              { icon: QrCode, title: "Scan the seal", body: "Verify a merchant's certification with a single tap." },
              { icon: Coins, title: "Earn points & tokens", body: "Every purchase rewards you — in points or digital tokens." },
              { icon: Gift, title: "Redeem for joy", body: "Spend points on real things. Trade tokens. Own a piece of it." },
            ]}
          />
          <FlowCard
            tag="For merchants"
            title="Join. Onboard. Grow."
            href="See merchant benefits"
            image={upOurStory}
            steps={[
              { icon: Heart, title: "Apply with heart", body: "Tell us what makes your business honourable." },
              { icon: BadgeCheck, title: "Get certified", body: "A clear, narrative assessment — not a checklist." },
              { icon: Users, title: "Welcome the movement", body: "Customers who choose you because you're trusted." },
            ]}
            footnote="Fixed fee or % of transactions"
          />
        </div>
      </section>

      {/* COMMUNITY VIDEO STRIP */}
      <section id="story" className="relative">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-border/70">
            <video
              src={communityVideo.url}
              autoPlay muted loop playsInline
              className="h-[60vh] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 text-white">
              <span className="pill !text-gold-soft !border-gold-soft/60">SHOP WITH CONFIDENCE </span>
              <h2 className="mt-4 font-serif text-3xl md:text-5xl max-w-2xl">
                Real shops. Real people. <span className="italic-gold">Real trust.</span>
              </h2>
              <p className="mt-3 max-w-xl text-white/85">
                Every certified merchant is a neighbour committed to doing trade with care —
                2,400+ welcomed this week alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FACES GRID */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {[upBanner3, upShoppers, upParallax1, upBanner4, upParallax3, upOurStory2].map((src, i) => (
            <figure key={i} className="relative overflow-hidden rounded-2xl aspect-[4/5] ring-1 ring-border/70 group">
              <img src={src} alt="A happy merchant or customer" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </figure>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href="#find" className="btn-gold"><MapPin className="h-4 w-4" /> Find an honourable merchant</a>
        </div>
      </section>

      {/* SCAN MOMENT */}
      <section id="find" className="mx-auto max-w-7xl px-5 sm:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="pill">Scan the seal</span>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl">
              A tiny gesture. <br />
              A whole lot of <span className="italic-gold">trust.</span>
            </h2>
            <p className="mt-5 text-muted-foreground max-w-lg">
              Every certified merchant displays an Honourable Merchant QR. One scan reveals their
              certification, their story, and the offers waiting for you inside.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#cta" className="btn-gold"><QrCode className="h-4 w-4" /> Try the scan experience</a>
              <a href="#wallet" className="btn-ghost"><Wallet /> See your wallet</a>
            </div>
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-border px-5 py-2.5 text-sm">
              <span className="text-muted-foreground">Verified in</span>
              <span className="font-serif text-2xl text-gold">0.4s</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="relative overflow-hidden rounded-3xl ring-1 ring-border/70 col-span-2">
              <video src={scanVideo.url} autoPlay muted loop playsInline className="h-72 w-full object-cover" />
            </div>
            <img src={upBanner1} alt="Joyful shoppers at an honourable merchant" loading="lazy" className="h-56 w-full object-cover rounded-3xl ring-1 ring-border/70" />
            <img src={upParallax4} alt="Happy customers with a merchant" loading="lazy" className="h-56 w-full object-cover rounded-3xl ring-1 ring-border/70" />
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="offers" className="mx-auto max-w-7xl px-5 sm:px-8 py-24">
        <div className="text-center">
          <span className="pill">Why it feels good</span>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl">Benefits, both sides of the counter.</h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b) => (
            <article key={b.title} className="rounded-3xl border border-border/70 bg-card p-6 hover:border-gold/60 transition group">
              <div className="h-11 w-11 rounded-full bg-gold/12 text-gold flex items-center justify-center group-hover:bg-gold group-hover:text-primary-foreground transition">
                <b.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-serif text-xl">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.body}</p>
              <img src={b.image} alt="" loading="lazy" className="mt-6 h-44 w-full object-cover rounded-2xl" />
            </article>
          ))}
        </div>
      </section>

      {/* GOVERNANCE */}
      <section id="governance" className="relative">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-24 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <span className="pill">Governance</span>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl">
              You own the <span className="italic-gold">Honourable Merchants.</span>
            </h2>
            <p className="mt-5 text-muted-foreground max-w-lg">
              No corporate boardroom decides what "honourable" means. Token holders do — shoppers,
              merchants, and stewards alike. A standard kept honest because it belongs to everyone.
            </p>
            <a href="#" className="btn-gold mt-7">How governance works <ArrowRight className="h-4 w-4" /></a>
            <img src={governance1} alt="Community leadership" loading="lazy" className="mt-10 rounded-3xl ring-1 ring-border/70 h-80 w-full object-cover" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {governance.map((g, i) => (
              <a key={g.title} href="#" className="group rounded-3xl border border-border/70 bg-card p-6 hover:border-gold/60 transition block">
                <div className="text-xs tracking-[0.2em] text-gold">0{i + 1}</div>
                <div className="mt-3 font-serif text-2xl">{g.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{g.body}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-gold opacity-0 group-hover:opacity-100 transition">
                  Read more <ArrowRight className="h-4 w-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section id="cta" className="mx-auto max-w-7xl px-5 sm:px-8 py-24">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-10 md:p-16 text-center">
          <div className="absolute inset-0 -z-10 opacity-30">
            <video src={heroVideo.url} autoPlay muted loop playsInline className="h-full w-full object-cover" />
          </div>
          <span className="pill">Join the movement</span>
          <h2 className="mt-6 font-serif text-4xl md:text-6xl max-w-3xl mx-auto">
            A joyful ecosystem <span className="italic-gold">starts with you.</span>
          </h2>
          <p className="mt-5 mx-auto max-w-xl text-muted-foreground">
            Download the app, scan your first seal, and meet the merchants shaping a kinder kind of commerce.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#" className="btn-gold"><Smartphone className="h-4 w-4" /> Download the app</a>
            <a href="#" className="btn-ghost">Become a merchant <ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function FlowCard({
  tag, title, steps, href, image, footnote,
}: {
  tag: string; title: string; href: string; image: string; footnote?: string;
  steps: { icon: React.ComponentType<{ className?: string }>; title: string; body: string }[];
}) {
  return (
    <div className="rounded-[2rem] border border-border/70 bg-card overflow-hidden">
      <div className="relative h-56">
        <img src={image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
        <span className="absolute top-5 left-5 pill bg-background/80">{tag}</span>
      </div>
      <div className="p-7 md:p-9">
        <h3 className="font-serif text-3xl">{title}</h3>
        <ol className="mt-6 space-y-5">
          {steps.map((s, i) => (
            <li key={s.title} className="flex gap-4">
              <div className="shrink-0 h-10 w-10 rounded-full bg-gold/10 text-gold flex items-center justify-center font-serif">
                0{i + 1}
              </div>
              <div>
                <div className="flex items-center gap-2 font-medium">
                  <s.icon className="h-4 w-4 text-gold" /> {s.title}
                </div>
                <p className="text-sm text-muted-foreground mt-1">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-7 flex items-center justify-between gap-4">
          <a href="#" className="btn-ghost">{href} <ArrowRight className="h-4 w-4" /></a>
          {footnote && <span className="text-xs text-muted-foreground">{footnote}</span>}
        </div>
      </div>
    </div>
  );
}

function Wallet() {
  return <span className="text-gold">◇</span>;
}

const benefits = [
  { icon: Heart, title: "Shop with feeling", body: "Find places that match your values, near you.", image: benefit1 },
  { icon: Coins, title: "Earn as you go", body: "Points and tokens for everyday purchases.", image: benefit2 },
  { icon: QrCode, title: "Verified, instantly", body: "QR scan reveals the merchant's status in a beat.", image: benefit3 },
  { icon: Users, title: "Own the standard", body: "Token holders shape how the movement grows.", image: benefit4 },
];

const governance = [
  { title: "You own it", body: "Token-based ownership distributes power to the community." },
  { title: "The Certification Body", body: "An independent, transparent entity that verifies merchants." },
  { title: "Council of Stewards", body: "Custodians of the standard — they hold it, they don't own it." },
  { title: "The Assessment", body: "A narrative review, not a tickbox audit. Real conversations." },
];
