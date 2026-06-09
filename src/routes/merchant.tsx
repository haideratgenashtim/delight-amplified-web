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
  ClipboardList,
  Gauge,
  CheckCircle2,
  FileUp,
  ShieldCheck,
  BadgeCheck,
  Leaf,
  Recycle,
  Trees,
  Users,
  HeartHandshake,
  ShoppingBag,
  Scale,
  Eye,
} from "lucide-react";

export const Route = createFileRoute("/merchant")({
  head: () => ({
    meta: [
      { title: "Merchants — Honourable Merchant" },
      {
        name: "description",
        content:
          "How merchants earn the Honourable Merchant certification: qualifying score, six-step process, and the eight impact areas of assessment.",
      },
      { property: "og:title", content: "Merchants — Honourable Merchant" },
      {
        property: "og:description",
        content:
          "Qualifying score, certification process, and the eight impact areas across Environment, Social, and Governance.",
      },
    ],
  }),
  component: MerchantPage,
});

type Step = {
  id: string;
  step: string;
  title: string;
  description: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const steps: Step[] = [
  {
    id: "step-1",
    step: "Step 1",
    title: "Complete the assessment",
    description:
      "Start by completing our 50-question assessment covering governance, environment, operations, customer practices, and social responsibility. There is no time limit, so you can complete it at your own pace — no time pressure. It covers the key business practices and standards your company has in place.",
    Icon: ClipboardList,
  },
  {
    id: "step-2",
    step: "Step 2",
    title: "Receive the initial score",
    description:
      "Once submitted, your company will instantly receive your initial score. If you fall short of the 80-point threshold, the system highlights the impact areas with the lowest scores and offers practical suggestions for improvement, along with guidance on how to retake the assessment once changes are made.",
    Icon: Gauge,
  },
  {
    id: "step-3",
    step: "Step 3",
    title: "Choose to proceed with certification",
    description:
      "After reviewing your score, you may choose whether to continue with the certification process. Proceeding is completely voluntary — you remain in control of how and when you move forward.",
    Icon: CheckCircle2,
  },
  {
    id: "step-4",
    step: "Step 4",
    title: "Submit supporting information and documentation",
    description:
      "If your company chooses to proceed, you will provide supporting information and/or documentation to verify your responses. Examples include company policies, financial records, customer feedback, licences, certifications, and sustainability reports. After uploading, click submit to trigger the review of your responses and evidence.",
    Icon: FileUp,
  },
  {
    id: "step-5",
    step: "Step 5",
    title: "Independent verification and review",
    description:
      "Your application is assigned to an analyst from our independent verification team, who reviews it for accuracy and consistency between your responses and the submitted evidence. You will be kept informed of the verification notes, outcomes, and the expected turnaround time throughout the process.",
    Icon: ShieldCheck,
  },
  {
    id: "step-6",
    step: "Step 6",
    title: "Certified Honourable Merchant",
    description:
      "After verification, your final score is confirmed. Companies scoring 80 points or above proceed to certification approval and are officially recognised as Honourable Merchants — a signal to customers, partners, and stakeholders that your business has been independently verified to meet the highest standards of integrity and commercial conduct. The status is not permanent; maintaining the standard is as important as achieving it. If certification is not achieved on the first attempt, you will receive tailored pointers and a recommended timeline for re-trying.",
    Icon: BadgeCheck,
  },
];

type ImpactArea = {
  id: string;
  title: string;
  summary: string;
  Icon: React.ComponentType<{ className?: string }>;
};

type ImpactPillar = {
  pillar: string;
  letter: string;
  blurb: string;
  areas: ImpactArea[];
};

const pillars: ImpactPillar[] = [
  {
    pillar: "Environment",
    letter: "E",
    blurb: "How a business cares for the planet it depends on.",
    areas: [
      {
        id: "env-climate",
        title: "Climate and Energy",
        summary:
          "Looks at energy use, climate action, and environmental impact.",
        Icon: Leaf,
      },
      {
        id: "env-circular",
        title: "Resources and Circular Economy",
        summary:
          "Looks at resource use, waste reduction, and responsible production.",
        Icon: Recycle,
      },
      {
        id: "env-nature",
        title: "Nature and Responsible Sourcing",
        summary:
          "Looks at sourcing practices and care for nature and biodiversity.",
        Icon: Trees,
      },
    ],
  },
  {
    pillar: "Social",
    letter: "S",
    blurb: "How a business treats its people, customers, and community.",
    areas: [
      {
        id: "soc-people",
        title: "People and Workplace",
        summary:
          "Looks at fair treatment, worker wellbeing, inclusion, and workplace responsibility.",
        Icon: Users,
      },
      {
        id: "soc-community",
        title: "Community and Inclusive Growth",
        summary:
          "Looks at community contribution and inclusive economic participation.",
        Icon: HeartHandshake,
      },
      {
        id: "soc-product",
        title: "Product Responsibility and Consumer Trust",
        summary:
          "Looks at product safety, honest practices, and customer trust.",
        Icon: ShoppingBag,
      },
    ],
  },
  {
    pillar: "Governance",
    letter: "G",
    blurb: "How a business makes decisions and stays accountable.",
    areas: [
      {
        id: "gov-ethics",
        title: "Ethics and Integrity",
        summary: "Looks at honesty, accountability, and ethical conduct.",
        Icon: Scale,
      },
      {
        id: "gov-transparency",
        title: "Governance and Transparency",
        summary:
          "Looks at decision-making, transparency, and responsible business practices.",
        Icon: Eye,
      },
    ],
  },
];

function MerchantPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gold/10 via-background to-background" />
        <div className="mx-auto max-w-5xl px-5 sm:px-8 pt-20 pb-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 text-xs tracking-[0.22em] uppercase text-gold">
            Merchants
          </span>
          <h1 className="mt-6 font-serif text-4xl sm:text-5xl md:text-6xl leading-tight">
            Earn the Honourable Merchant mark.
          </h1>
          <p className="mt-5 text-muted-foreground text-lg max-w-2xl mx-auto">
            A transparent path to certification — verified by independent
            reviewers, recognised by conscious shoppers.
          </p>
        </div>
      </section>

      {/* QUALIFYING SCORE */}
      <section className="mx-auto max-w-4xl px-5 sm:px-8 py-14 sm:py-16">
        <div className="rounded-2xl border border-gold/40 bg-gold/5 p-7 sm:p-9">
          <div className="flex items-start gap-5">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold ring-1 ring-gold/40">
              <Gauge className="h-6 w-6" />
            </span>
            <div>
              <div className="text-xs tracking-[0.22em] uppercase text-gold">
                I. Qualifying Score
              </div>
              <h2 className="mt-2 font-serif text-2xl sm:text-3xl">
                A verified score of 80 points or above.
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                A company must achieve and maintain a verified score of{" "}
                <span className="text-foreground font-medium">80 points or above</span>{" "}
                throughout the full review process. This threshold reflects a
                genuine commitment to excellence and is non-negotiable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATION PROCESS */}
      <section className="mx-auto max-w-4xl px-5 sm:px-8 pb-16 sm:pb-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 text-xs tracking-[0.22em] uppercase text-gold">
            II. The Certification Process
          </span>
          <h2 className="mt-5 font-serif text-3xl sm:text-4xl">
            Six steps from assessment to certified status
          </h2>
        </div>

        <Accordion
          type="single"
          collapsible
          className="rounded-2xl border border-border/70 bg-card/40 overflow-hidden"
        >
          {steps.map(({ id, step, title, description, Icon }) => (
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
                  <div>
                    <div className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
                      {step}
                    </div>
                    <div className="font-serif text-lg sm:text-xl">{title}</div>
                  </div>
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
      </section>

      {/* ASSESSMENT / IMPACT AREAS */}
      <section className="border-t border-border/60 bg-card/20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 text-xs tracking-[0.22em] uppercase text-gold">
              Assessment
            </span>
            <h2 className="mt-5 font-serif text-3xl sm:text-4xl">
              Eight core impact areas
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Structured around environmental stewardship, social
              responsibility, and governance excellence.
            </p>
          </div>

          <div className="space-y-10">
            {pillars.map((p) => (
              <div key={p.pillar}>
                <div className="flex items-center gap-4 mb-5">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold/10 text-gold ring-1 ring-gold/30 font-serif text-lg">
                    {p.letter}
                  </span>
                  <div>
                    <div className="font-serif text-2xl">{p.pillar}</div>
                    <div className="text-sm text-muted-foreground">
                      {p.blurb}
                    </div>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {p.areas.map(({ id, title, summary, Icon }) => (
                    <div
                      key={id}
                      className="group rounded-2xl border border-border/70 bg-background p-6 hover:border-gold/50 transition"
                    >
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold/10 text-gold ring-1 ring-gold/30 group-hover:scale-105 transition">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="mt-5 font-serif text-xl">{title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {summary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
