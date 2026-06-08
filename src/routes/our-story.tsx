import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Award,
  GraduationCap,
  Globe2,
  HeartHandshake,
  Sparkles,
  TrendingUp,
  Leaf,
  Building2,
  ShieldCheck,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/our-story")({
  head: () => ({
    meta: [
      { title: "Our Story — Honourable Merchant" },
      {
        name: "description",
        content:
          "A decade of building purpose-driven business: from B Corp certification to global verification leadership.",
      },
      { property: "og:title", content: "Our Story — Honourable Merchant" },
      {
        property: "og:description",
        content:
          "The Genashtim journey — milestones from 2015 to 2026 in sustainability, ESG, and the B Corp movement.",
      },
    ],
  }),
  component: OurStoryPage,
});

type Chapter = {
  id: string;
  year: string;
  title: string;
  description: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const chapters: Chapter[] = [
  {
    id: "bcorp-2015",
    year: "2015",
    title: "Becoming a Certified B Corp",
    description:
      "Genashtim began an important chapter in 2015 by becoming a certified B Corp, joining a global community of businesses committed to balancing profit and purpose. Since then, Genashtim has continuously been recognized as “Best for the World” every year — reflecting its dedication to creating positive social and environmental impact while proving that businesses can succeed while making a difference.",
    Icon: Award,
  },
  {
    id: "sbf-2018",
    year: "2018",
    title: "Building ESG Awareness with Singapore Business Federation",
    description:
      "Between 2018 and 2021, Genashtim partnered with the Singapore Business Federation to help companies understand and adopt ESG practices. Through workshops and practical frameworks, over 400 businesses learned how sustainability could become part of their business strategy — helping organizations move from awareness to action in creating long-term impact.",
    Icon: GraduationCap,
  },
  {
    id: "bmb-2018",
    year: "2018",
    title: "Appointed as B Market Builder for Malaysia and Singapore",
    description:
      "In 2018, Genashtim was appointed as the B Market Builder for Malaysia and Singapore, taking on the mission of expanding the B Corp movement in the region. This milestone strengthened Genashtim’s role in helping businesses understand sustainable practices and encouraging more organizations to build purpose-driven business models.",
    Icon: HeartHandshake,
  },
  {
    id: "raise-2020",
    year: "2020",
    title: "Supporting Social Enterprises with raiSE",
    description:
      "From 2020 to 2022, Genashtim partnered with raiSE, Singapore’s Social Enterprise Authority, to improve the screening and accreditation process for social enterprises. By building a more efficient operational system, Genashtim reduced processing time from three weeks to one week — creating a faster and more effective system for future growth.",
    Icon: Sparkles,
  },
  {
    id: "ypo-2020",
    year: "2020",
    title: "Launching YPO Lestari Academy",
    description:
      "From 2020 to 2024, Genashtim established and managed YPO Lestari Academy, a learning platform designed to help business leaders integrate ESG principles into their companies. Through more than 50 sustainability-focused events featuring global experts, over 1,500 members gained insights on using business as a force for positive impact.",
    Icon: GraduationCap,
  },
  {
    id: "sea-2021",
    year: "2021",
    title: "Expanding Across Southeast Asia",
    description:
      "In 2021, Genashtim expanded its presence across Southeast Asia, extending its reach beyond existing markets. This expansion allowed the organization to support more companies in adopting ESG principles and sustainable business practices — strengthening its regional impact and helping businesses across Southeast Asia pursue responsible growth.",
    Icon: Globe2,
  },
  {
    id: "blab-2021",
    year: "2021",
    title: "Becoming a Key Global Verification Partner for B Lab",
    description:
      "Starting in 2021 until now, Genashtim became a major verification partner for B Lab Global, managing a large portion of global B Corp verification work. Through its audit and assessment processes, Genashtim has supported the certification and recertification of more than 11,000 companies worldwide — helping organizations validate and improve their ESG commitments.",
    Icon: ShieldCheck,
  },
  {
    id: "mida-2024",
    year: "2024",
    title: "Supporting ESG Adoption Through MIDA",
    description:
      "In 2024, Genashtim partnered with the Malaysia Investment Development Authority (MIDA) as the data partner for its ESG grant initiative. This project encouraged SMEs and mid-sized companies to measure and improve their sustainability performance, leading hundreds of businesses to begin their ESG journey and explore future growth opportunities.",
    Icon: TrendingUp,
  },
  {
    id: "bio-2024",
    year: "2024",
    title: "Advancing Sustainability with Bioeconomy Corporation",
    description:
      "In 2024, Genashtim collaborated with Bioeconomy Corporation to accelerate ESG adoption in Malaysia’s bio-based industry. Through workshops, training sessions, and strategic collaboration, the initiative equipped business owners and young professionals with knowledge and tools to build stronger sustainability practices and prepare for future industry demands.",
    Icon: Leaf,
  },
];

type Milestone = {
  year: string;
  title: string;
  blurb: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const milestones: Milestone[] = [
  {
    year: "2015",
    title: "B Corp Certified",
    blurb: "Genashtim becomes B Corp & ‘Best for the World’ every year since.",
    Icon: Award,
  },
  {
    year: "2018–2021",
    title: "ESG Training",
    blurb:
      "400+ companies trained with Singapore Business Federation. B Market Builder for Malaysia/Singapore.",
    Icon: GraduationCap,
  },
  {
    year: "2020–2024",
    title: "YPO Lestari Academy",
    blurb: "50+ events, 1,500+ CEOs trained in ESG & sustainability leadership.",
    Icon: Users,
  },
  {
    year: "2021–Current",
    title: "Global Verification Leader",
    blurb:
      "80% of B Lab global verification. 11k+ companies certified. Only V1 partner & one of two V2 providers.",
    Icon: ShieldCheck,
  },
  {
    year: "2024",
    title: "Strategic Partnerships",
    blurb:
      "MIDA ESG Grant + Bioeconomy Corp certification body for bio-based sector.",
    Icon: Building2,
  },
  {
    year: "2026",
    title: "Global Scale",
    blurb:
      "124k+ workers audited, ISO 17021 accredited, 150 auditors, 30+ languages, 25+ countries.",
    Icon: Globe2,
  },
];

function OurStoryPage() {
  // Group chapters by year, preserving order
  const grouped: { year: string; items: Chapter[] }[] = [];
  for (const c of chapters) {
    const last = grouped[grouped.length - 1];
    if (last && last.year === c.year) last.items.push(c);
    else grouped.push({ year: c.year, items: [c] });
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gold/10 via-background to-background" />
        <div className="mx-auto max-w-5xl px-5 sm:px-8 pt-20 pb-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 text-xs tracking-[0.22em] uppercase text-gold">
            Our Story
          </span>
          <h1 className="mt-6 font-serif text-4xl sm:text-5xl md:text-6xl leading-tight">
            A decade of business as a force for good.
          </h1>
          <p className="mt-5 text-muted-foreground text-lg max-w-2xl mx-auto">
            From a single B Corp certification in 2015 to verifying thousands of
            companies worldwide — the journey that shaped the Honourable
            Merchant movement.
          </p>
        </div>
      </section>

      {/* TIMELINE / ACCORDION */}
      <section className="mx-auto max-w-4xl px-5 sm:px-8 py-16 sm:py-20">
        <div className="space-y-12">
          {grouped.map((group) => (
            <div key={group.year} className="relative">
              <div className="flex items-center gap-4 mb-5">
                <div className="font-serif text-3xl sm:text-4xl text-gold tabular-nums">
                  {group.year}
                </div>
                <div className="h-px flex-1 bg-border" />
              </div>
              <Accordion
                type="single"
                collapsible
                className="rounded-2xl border border-border/70 bg-card/40 overflow-hidden"
              >
                {group.items.map(({ id, title, description, Icon }) => (
                  <AccordionItem
                    key={id}
                    value={id}
                    className="border-b border-border/60 last:border-b-0"
                  >
                    <AccordionTrigger className="px-5 sm:px-6 py-5 hover:no-underline hover:bg-accent/40 [&[data-state=open]]:bg-accent/40 [&[data-state=open]]:text-gold">
                      <div className="flex items-center gap-4 text-left">
                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold ring-1 ring-gold/30">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="font-serif text-lg sm:text-xl">
                          {title}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-5 sm:px-6 pb-6 pt-0">
                      <p className="text-muted-foreground leading-relaxed pl-14">
                        {description}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* MILESTONES */}
      <section className="border-t border-border/60 bg-card/20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 text-xs tracking-[0.22em] uppercase text-gold">
              Milestones
            </span>
            <h2 className="mt-5 font-serif text-3xl sm:text-4xl">
              The numbers behind the journey
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {milestones.map(({ year, title, blurb, Icon }) => (
              <div
                key={year + title}
                className="group rounded-2xl border border-border/70 bg-background p-6 hover:border-gold/50 transition"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold/10 text-gold ring-1 ring-gold/30 group-hover:scale-105 transition">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs tracking-[0.18em] uppercase text-muted-foreground">
                    {year}
                  </span>
                </div>
                <h3 className="mt-5 font-serif text-xl">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {blurb}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
