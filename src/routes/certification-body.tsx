import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ShieldCheck, Globe2, Users, Award } from "lucide-react";

export const Route = createFileRoute("/certification-body")({
  head: () => ({
    meta: [
      { title: "The Certification Body — Honourable Merchant" },
      {
        name: "description",
        content:
          "Verified by To-Cert. Independent certification body that audits and verifies Honourable Merchants worldwide.",
      },
      { property: "og:title", content: "The Certification Body — Honourable Merchant" },
      {
        property: "og:description",
        content:
          "How independent verification by To-Cert gives the Honourable Merchant seal its meaning.",
      },
    ],
  }),
  component: CertificationBodyPage,
});

const stats = [
  {
    value: "150+",
    label: "Auditors worldwide",
    detail: "25+ countries, 30+ languages",
    Icon: Globe2,
  },
  {
    value: "11,000+",
    label: "Companies verified",
    detail: "B Corp & recertifications since 2021",
    Icon: Award,
  },
  {
    value: "80%",
    label: "B Lab global capacity",
    detail: "Assurance partner for Standards V1/V2",
    Icon: ShieldCheck,
  },
];

function CertificationBodyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-5xl px-5 sm:px-8 pt-16 pb-12 text-center">
        <span className="pill"><ShieldCheck className="h-3.5 w-3.5" /> INDEPENDENT VERIFICATION</span>
        <h1 className="mt-8 font-serif text-5xl sm:text-6xl md:text-7xl leading-[1.05] font-medium">
          The Certification <span className="italic-gold">Body</span>
        </h1>
        <p className="mt-6 mx-auto max-w-2xl text-lg text-muted-foreground">
          Verified by To-Cert. What that means in practice.
        </p>
        <p className="mt-4 mx-auto max-w-3xl text-base text-muted-foreground">
          The Honourable Merchant seal is not self-issued. It results from independent verification by
          To-Cert, the firm that handles verification work for the movement.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-5 sm:px-8 pb-16">
        <h2 className="font-serif text-3xl sm:text-4xl font-medium">Why The Certification Body</h2>
        <div className="mt-6 space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
          <p>
            The Honourable Merchant seal is not something a business can give itself. It is verified by
            To-Cert, an independent certification body.
          </p>
          <p>
            To-Cert reviews each merchant against clear standards and confirms if they meet them. This is
            what gives the seal real meaning. It is based on verification, not just a claim.
          </p>
          <p>
            The certification is not permanent. Merchants must renew it regularly to keep their certified
            status.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 sm:px-8 pb-16">
        <div className="rounded-3xl border border-border/70 bg-card p-8 sm:p-12">
          <p className="text-xs tracking-[0.22em] text-muted-foreground uppercase">The Certification Body</p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-medium">By the numbers</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-border/70 bg-background p-6">
                <s.Icon className="h-7 w-7 text-gold" />
                <div className="mt-4 font-serif text-4xl font-medium">{s.value}</div>
                <div className="mt-1 font-medium">{s.label}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.detail}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-5 text-base text-muted-foreground leading-relaxed">
            <p>
              To-Cert is a specialist verification firm with 150 auditors working across 25+ countries in
              30+ languages. They are a certification body who assess whether practices exist, evaluate
              them against global standards, and issue findings.
            </p>
            <p>
              Since 2021, To-Cert has managed 80% of B Lab's global verification work, conducting or
              recertifying over 11,000 companies. Their client experience spans companies with revenues to
              US$8 billion, workforces to 14,000+ employees, and operations across 750 sites in 30+
              countries.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
