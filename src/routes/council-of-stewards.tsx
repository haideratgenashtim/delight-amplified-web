import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Scale, ShieldCheck, Compass, Users } from "lucide-react";

export const Route = createFileRoute("/council-of-stewards")({
  head: () => ({
    meta: [
      { title: "Council of Stewards — Honourable Merchant" },
      {
        name: "description",
        content:
          "Moral stewardship and ethical oversight for the Honourable Merchant movement.",
      },
      { property: "og:title", content: "Council of Stewards — Honourable Merchant" },
      {
        property: "og:description",
        content:
          "Guardianship of the Charter, adjudication, and strategic mentorship by experts of high character.",
      },
    ],
  }),
  component: CouncilPage,
});

const responsibilities = [
  {
    title: "Guardianship of the Charter",
    description:
      "Reviews and approves industry-specific standards to ensure they align with the movement's core values.",
    Icon: ShieldCheck,
  },
  {
    title: "Adjudication & Compliance Oversight",
    description:
      "Serves as the final authority on member disciplinary appeals and reviews restitution efforts to determine ongoing membership status.",
    Icon: Scale,
  },
  {
    title: "Strategic Mentorship",
    description:
      "Provides direct guidance and ethical counsel to the initial cohort of founding members.",
    Icon: Compass,
  },
];

function CouncilPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-5xl px-5 sm:px-8 pt-16 pb-12 text-center">
        <span className="pill"><Users className="h-3.5 w-3.5" /> MORAL STEWARDSHIP</span>
        <h1 className="mt-8 font-serif text-5xl sm:text-6xl md:text-7xl leading-[1.05] font-medium">
          Council of <span className="italic-gold">Stewards</span>
        </h1>
        <p className="mt-6 mx-auto max-w-3xl text-lg text-muted-foreground">
          The Council of Stewards provides moral stewardship and ethical oversight to the Honourable
          Merchant movement. The Council ensures the movement remains a force for honourable commerce
          rather than becoming a superficial credential.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 sm:px-8 pb-16">
        <h2 className="font-serif text-3xl sm:text-4xl font-medium">Three Primary Responsibilities</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {responsibilities.map((r) => (
            <div key={r.title} className="rounded-2xl border border-border/70 bg-card p-6">
              <r.Icon className="h-7 w-7 text-gold" />
              <h3 className="mt-4 font-serif text-xl font-medium">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 sm:px-8 pb-16">
        <h2 className="font-serif text-3xl sm:text-4xl font-medium">Experts of High Character</h2>
        <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
          The Council comprises individuals of recognized integrity across the professional fields
          essential to the movement's governance and long-term integrity. Each steward brings substantial
          real-world experience and a demonstrated commitment to principles beyond profit.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-5 sm:px-8 pb-16">
        <div className="rounded-3xl border border-border/70 bg-card p-8 sm:p-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium">Authority and Decision-Making</h2>
          <div className="mt-5 space-y-4 text-base text-muted-foreground leading-relaxed">
            <p>
              The Council of Stewards helps protect the integrity of the Honourable Merchant seal by
              reviewing serious concerns, disputed certifications, and applications that may not meet
              the required standards.
            </p>
            <p>
              Its role is to ensure that decisions remain fair, independent, and aligned with the values
              of responsible and ethical commerce.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 sm:px-8 pb-16">
        <p className="text-sm text-muted-foreground italic">
          Note: Council profiles and council pictures to be added later (continuously rotating wheel of
          photos which, if 1 photo is clicked, shows information or trivia about the person).
        </p>
      </section>

      <SiteFooter />
    </div>
  );
}
