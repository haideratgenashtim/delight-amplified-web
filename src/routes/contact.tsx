import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Mail, MessageCircle, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Honourable Merchant" },
      {
        name: "description",
        content:
          "Still have questions? Reach out to the Honourable Merchant program team and we'll be happy to assist you.",
      },
      { property: "og:title", content: "Contact — Honourable Merchant" },
      {
        property: "og:description",
        content: "Reach out to the Honourable Merchant program team.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-3xl px-5 sm:px-8 pt-20 pb-16 text-center">
        <span className="pill"><MessageCircle className="h-3.5 w-3.5" /> WE'RE HERE TO HELP</span>
        <h1 className="mt-8 font-serif text-5xl sm:text-6xl md:text-7xl leading-[1.05] font-medium">
          Still have <span className="italic-gold">questions?</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Reach out to the Honourable Merchant program team through the website contact page and we'll
          be happy to assist you.
        </p>

        <form
          className="mt-12 text-left grid gap-4 rounded-3xl border border-border/70 bg-card p-6 sm:p-8"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm">
              <span className="font-medium">Name</span>
              <input
                type="text"
                required
                className="rounded-xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring"
                placeholder="Your name"
              />
            </label>
            <label className="grid gap-2 text-sm">
              <span className="font-medium">Email</span>
              <input
                type="email"
                required
                className="rounded-xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring"
                placeholder="you@example.com"
              />
            </label>
          </div>
          <label className="grid gap-2 text-sm">
            <span className="font-medium">Subject</span>
            <input
              type="text"
              className="rounded-xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring"
              placeholder="How can we help?"
            />
          </label>
          <label className="grid gap-2 text-sm">
            <span className="font-medium">Message</span>
            <textarea
              required
              rows={5}
              className="rounded-xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring"
              placeholder="Tell us a bit more..."
            />
          </label>
          <button type="submit" className="btn-gold justify-center mt-2">
            <Mail className="h-4 w-4" /> Send message <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        <p className="mt-8 text-sm text-muted-foreground">
          Prefer to browse common questions first?{" "}
          <Link to="/faq" className="text-gold hover:underline">Visit our FAQ</Link>.
        </p>
      </section>

      <SiteFooter />
    </div>
  );
}
