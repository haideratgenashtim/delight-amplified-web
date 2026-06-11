import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Honourable Merchant" },
      {
        name: "description",
        content:
          "Frequently asked questions about the Honourable Merchant program: certification, membership, marketplace, redemption, and more.",
      },
      { property: "og:title", content: "FAQ — Honourable Merchant" },
      {
        property: "og:description",
        content: "Answers to common questions about certification, membership, and rewards.",
      },
    ],
  }),
  component: FaqPage,
});

type QA = { q: string; a: string };
type Category = { title: string; items: QA[] };

const categories: Category[] = [
  {
    title: "General Questions",
    items: [
      {
        q: "What is the Honourable Merchant program?",
        a: "The Honourable Merchant program is a platform that connects consumers with sustainable, ethical, and purpose-driven brands that meet defined responsible business standards.",
      },
      {
        q: "What are certified brands on the Honourable Merchant program?",
        a: "Certified brands are businesses that have successfully met the platform's sustainability, ethical, and purpose-driven evaluation criteria.",
      },
      {
        q: "What does it mean to be a certified Honourable Merchant?",
        a: "Certified merchants are recognized for demonstrating responsible business practices, sustainability commitments, ethical operations, and positive social or environmental impact.",
      },
      {
        q: "Who can apply for certification?",
        a: "Businesses, brands, retailers, service providers, and organizations that align with sustainability and purpose-driven values can apply for certification.",
      },
      {
        q: "Is the Honourable Merchant program only for sustainable brands?",
        a: "Yes. The platform is specifically designed to showcase and support brands committed to sustainability, ethical practices, and long-term positive impact.",
      },
    ],
  },
  {
    title: "Certification & Eligibility",
    items: [
      {
        q: "What benefits do certified merchants receive?",
        a: "Certified merchants receive increased brand visibility, credibility, customer trust, marketplace exposure, and access to a community of conscious consumers seeking sustainable and purpose-driven businesses.",
      },
      {
        q: "How does the certification process work?",
        a: "Businesses submit an application along with relevant company and sustainability information. Applications are then reviewed against defined evaluation criteria before approval.",
      },
      {
        q: "What criteria are used to evaluate brands?",
        a: "Evaluation may include sustainability initiatives, ethical sourcing, social responsibility, transparency, operational practices, environmental impact, and brand purpose.",
      },
      {
        q: "How long does the certification process take?",
        a: "The review timeline depends on the completeness of the application and supporting documentation provided.",
      },
      {
        q: "How often are merchants reviewed or reassessed?",
        a: "Certified merchants may undergo periodic reviews or reassessments to ensure continued compliance with certification standards and evolving sustainability expectations.",
      },
      {
        q: "Can certification be revoked?",
        a: "Yes. Certification may be suspended or revoked if a business no longer meets the required standards or provides inaccurate information.",
      },
      {
        q: "Can businesses reapply if they are not approved initially?",
        a: "Yes. Businesses can improve their practices or documentation and reapply for evaluation.",
      },
    ],
  },
  {
    title: "Membership & Pricing",
    items: [
      {
        q: "How much does it cost to join the platform?",
        a: "Membership or certification pricing depends on the business size, operational scale, and applicable program tier.",
      },
      {
        q: "Why is pricing based on revenue tiers instead of a flat fee?",
        a: "Revenue-based pricing helps create fair and accessible participation opportunities for businesses of different sizes while ensuring smaller businesses are not disproportionately impacted.",
      },
      {
        q: "Are there discounts for businesses with multiple branches or locations?",
        a: "Yes. Special pricing or bundled rates may be available for businesses operating multiple branches or locations.",
      },
      {
        q: "Are there recurring renewal fees?",
        a: "Certification or membership may require periodic renewal to maintain active status and continued marketplace visibility.",
      },
      {
        q: "What payment methods are accepted?",
        a: "We accept secure online payment methods and other approved payment options where applicable.",
      },
    ],
  },
  {
    title: "Marketplace & Purchasing",
    items: [
      {
        q: "Can customers directly purchase products from certified merchants?",
        a: "Yes. Customers can explore and purchase products or services from certified merchants through the platform.",
      },
      {
        q: "Does the Honourable Merchant program sell products directly?",
        a: "No. The platform primarily connects customers with certified sustainable and purpose-driven brands.",
      },
      {
        q: "How do I know if a merchant is genuinely sustainable?",
        a: "Certified merchants undergo a review and evaluation process based on defined sustainability and ethical standards before being approved.",
      },
      {
        q: "Can I browse products by category or values?",
        a: "Yes. Users may browse merchants and products based on categories, sustainability focus areas, or purpose-driven values.",
      },
      {
        q: "Are all merchants independently verified?",
        a: "Merchants are assessed according to the platform's certification and review framework before certification is granted.",
      },
    ],
  },
  {
    title: "For Businesses",
    items: [
      {
        q: "Why should my business join the Honourable Merchant program?",
        a: "Joining the platform helps businesses gain visibility among conscious consumers while strengthening brand credibility and trust.",
      },
      {
        q: "Can startups or small businesses apply?",
        a: "Yes. Businesses of all sizes are encouraged to apply if they align with the platform's sustainability and ethical standards.",
      },
      {
        q: "Do international businesses qualify?",
        a: "Yes. Businesses from different regions may apply, subject to eligibility and review requirements.",
      },
      {
        q: "What documents may be required during application?",
        a: "Businesses may be asked to provide company information, sustainability policies, certifications, operational details, or supporting evidence related to ethical and responsible practices.",
      },
      {
        q: "Will my application information remain confidential?",
        a: "Yes. Submitted business information is handled securely and used only for evaluation and certification purposes.",
      },
    ],
  },
  {
    title: "Redemption, Rewards & Ownership",
    items: [
      {
        q: "What is the redemption feature on the Honourable Merchant program?",
        a: "The redemption feature allows customers to redeem eligible rewards, offers, benefits, or value provided through participating certified merchants on the platform.",
      },
      {
        q: "How does redemption work?",
        a: "Customers can redeem eligible offers or rewards according to the terms specified by the participating merchant or platform program.",
      },
      {
        q: "Who owns the redeemed products or rewards after redemption?",
        a: "Ownership of redeemed products, services, or benefits is transferred to the customer once the redemption process is successfully completed, subject to the merchant's applicable terms and conditions.",
      },
      {
        q: "Are redemption offers available from all merchants?",
        a: "No. Redemption benefits, offers, or reward programs may vary depending on the participating merchant.",
      },
      {
        q: "Can redeemed rewards be exchanged or refunded?",
        a: "Exchange or refund eligibility depends on the specific merchant's policies and the nature of the redeemed item or service.",
      },
      {
        q: "Do redeemed offers expire?",
        a: "Yes. Certain rewards, offers, or redemption opportunities may have validity periods or expiration dates.",
      },
      {
        q: "Can merchants create their own redemption offers?",
        a: "Yes. Participating merchants may provide custom redemption campaigns, offers, loyalty rewards, or promotional benefits through the platform.",
      },
      {
        q: "Are there limits on redemption usage?",
        a: "Some offers may include usage limits, eligibility conditions, or one-time redemption restrictions.",
      },
      {
        q: "What happens if a redemption request fails?",
        a: "Customers can contact platform support or the participating merchant for assistance regarding failed or incomplete redemption requests.",
      },
      {
        q: "Can redemption benefits be transferred to another person?",
        a: "Transferability depends on the merchant's individual terms and the specific reward or benefit offered.",
      },
    ],
  },
  {
    title: "Customer Trust & Transparency",
    items: [
      {
        q: "Why does certification matter?",
        a: "Certification helps consumers identify businesses that are genuinely committed to sustainability, ethics, and responsible practices.",
      },
      {
        q: "How does the Honourable Merchant program support conscious consumerism?",
        a: "The platform simplifies the discovery of brands that align with environmentally and socially responsible values.",
      },
      {
        q: "Can customers provide feedback about merchants?",
        a: "Yes. Customer feedback may help maintain transparency, accountability, and overall marketplace quality.",
      },
      {
        q: "Does the Honourable Merchant program guarantee merchant products or services?",
        a: "While merchants are reviewed before certification, customers should independently evaluate products or services before making purchases.",
      },
    ],
  },
  {
    title: "Contact & Support",
    items: [
      {
        q: "How can businesses apply?",
        a: "Businesses can apply through the website application or contact page.",
      },
      {
        q: "How can customers contact support?",
        a: "Customers can reach support through the website contact form or official communication channels.",
      },
      {
        q: "What is the typical response time?",
        a: "Most inquiries are responded to within 24–48 business hours.",
      },
      {
        q: "Who can I contact for partnership opportunities?",
        a: "Partnership and collaboration inquiries can be submitted through the contact page.",
      },
    ],
  },
];

function FaqPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-4xl px-5 sm:px-8 pt-16 pb-10 text-center">
        <span className="pill"><HelpCircle className="h-3.5 w-3.5" /> ANSWERS</span>
        <h1 className="mt-8 font-serif text-5xl sm:text-6xl md:text-7xl leading-[1.05] font-medium">
          Frequently Asked <span className="italic-gold">Questions</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Everything you need to know about the Honourable Merchant program — organized by topic.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-5 sm:px-8 pb-16">
        <div className="space-y-10">
          {categories.map((cat) => (
            <div key={cat.title} className="rounded-3xl border border-border/70 bg-card p-6 sm:p-8">
              <h2 className="font-serif text-2xl sm:text-3xl font-medium">{cat.title}</h2>
              <Accordion type="single" collapsible className="mt-4">
                {cat.items.map((item, i) => (
                  <AccordionItem key={i} value={`${cat.title}-${i}`}>
                    <AccordionTrigger className="text-base font-medium">{item.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-border/70 bg-card p-8 text-center">
          <h3 className="font-serif text-2xl font-medium">Still have questions?</h3>
          <p className="mt-3 text-muted-foreground">
            Reach out to the Honourable Merchant program team and we'll be happy to assist you.
          </p>
          <Link to="/contact" className="btn-gold mt-5 inline-flex">
            Contact us
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
