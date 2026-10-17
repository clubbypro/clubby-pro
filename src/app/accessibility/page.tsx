import type { Metadata } from "next";
import { siteContact } from "@/lib/siteContact";

export const metadata: Metadata = {
  title: "Accessibility — Clubby",
  description:
    "Clubby's commitment to WCAG 2.1 Level AA, the measures we take, known limitations, and how to send accessibility feedback.",
};

export default function AccessibilityPage() {
  const { ACCESSIBILITY_EMAIL, ACCESSIBILITY_PHONE } = siteContact;

  return (
    <div className="pt-24 pb-16">
      <section className="bg-gradient-to-br from-deep-green to-masters-green py-16 text-center">
        <h1 className="font-[var(--font-heading)] text-4xl md:text-6xl font-bold text-white">
          Accessibility
        </h1>
        <p className="mt-3 text-white text-lg max-w-2xl mx-auto px-4">
          Clubby is committed to making club fitting usable for every golfer.
        </p>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12 space-y-10 text-gray-700 leading-relaxed">
        <section>
          <h2 className="font-[var(--font-heading)] text-2xl font-bold text-charcoal mb-3">Our commitment</h2>
          <p>
            Clubby aims to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.
            We want people to measure a golfer, read our guides, and use our tools with a keyboard,
            a screen reader, and sufficient color contrast.
          </p>
        </section>

        <section>
          <h2 className="font-[var(--font-heading)] text-2xl font-bold text-charcoal mb-3">Measures we take</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Pages use a logical heading order and semantic regions, including lists for article content.</li>
            <li>Controls that collect video have an accessible name and a visible text label.</li>
            <li>Navigation and footer text is presented with contrast that meets WCAG 2.1 AA in each bar state.</li>
            <li>The site language is identified, and informative images include text alternatives.</li>
            <li>The fitting flow labels its fields, and primary actions are available from the keyboard.</li>
            <li>This statement explains how to report a barrier.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-[var(--font-heading)] text-2xl font-bold text-charcoal mb-3">Known limitations</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Swing Analyzer and Ball Tracer depend on uploaded or recorded video and on canvas drawing.
              Those steps do not yet have a fully equivalent path for people who cannot see or operate a pointer.
            </li>
            <li>
              A third-party shopping script may add content we do not fully control. That content can fall short of AA.
            </li>
            <li>
              Some secondary copy outside the navigation and footer is still being reviewed for contrast and labeling.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-[var(--font-heading)] text-2xl font-bold text-charcoal mb-3">Last review</h2>
          <p>This statement was last reviewed in October 2026.</p>
        </section>

        <section>
          <h2 className="font-[var(--font-heading)] text-2xl font-bold text-charcoal mb-3">Feedback</h2>
          <p>
            If you hit an accessibility barrier, email{" "}
            <a
              href={`mailto:${ACCESSIBILITY_EMAIL}`}
              className="text-masters-green font-semibold hover:underline"
            >
              {ACCESSIBILITY_EMAIL}
            </a>{" "}
            or call{" "}
            <a
              href={`tel:${ACCESSIBILITY_PHONE}`}
              className="text-masters-green font-semibold hover:underline"
            >
              {ACCESSIBILITY_PHONE}
            </a>
            . Tell us the page address and what you were trying to do, and we will follow up.
          </p>
        </section>
      </article>
    </div>
  );
}
