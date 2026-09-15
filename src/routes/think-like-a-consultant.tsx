import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import consultantCss from "../styles-consultant.css?url";

const checkoutUrl = "https://selar.com/978m069577";
const PRICE_NOW = "3,700";
const PRICE_WAS = "15,000";
const TIMER_HOURS = 24;

export const Route = createFileRoute("/think-like-a-consultant")({
  head: () => ({
    meta: [
      { title: "Think Like a Consultant — Solve Problems. Make Better Decisions. Get Better Results." },
      {
        name: "description",
        content:
          "A practical business guide for entrepreneurs, business owners and professionals who want to solve problems better, make smarter decisions and turn confusion into clarity.",
      },
      { property: "og:title", content: "Think Like a Consultant" },
      { property: "og:description", content: "You don't need a $500-an-hour consultant. You need the way a consultant thinks." },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/think-like-a-consultant" },
      { rel: "stylesheet", href: consultantCss },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Book",
          name: "Think Like a Consultant",
          description: "Understand the Problem. Find the Opportunity. Make Better Decisions.",
          offers: {
            "@type": "Offer",
            priceCurrency: "NGN",
            price: "3700",
            availability: "https://schema.org/InStock",
            url: checkoutUrl,
          },
        }),
      },
    ],
  }),
  component: ThinkLikeAConsultant,
});

/* ── COUNTDOWN ── */
function useCountdown(hours: number) {
  const getEndTime = () => {
    if (typeof window === "undefined") return Date.now() + hours * 3600 * 1000;
    const stored = localStorage.getItem("tlc_end");
    if (stored) return parseInt(stored, 10);
    const end = Date.now() + hours * 3600 * 1000;
    localStorage.setItem("tlc_end", String(end));
    return end;
  };
  const calc = (end: number) => {
    const diff = Math.max(0, end - Date.now());
    return {
      h: String(Math.floor(diff / 3600000)).padStart(2, "0"),
      m: String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0"),
      s: String(Math.floor((diff % 60000) / 1000)).padStart(2, "0"),
    };
  };
  const [end] = useState(() => getEndTime());
  const [time, setTime] = useState(() => calc(end));
  useEffect(() => {
    const id = setInterval(() => setTime(calc(end)), 1000);
    return () => clearInterval(id);
  }, [end]);
  return time;
}

/* ── FAQ ── */
const faqs = [
  { q: "Is this book only for consultants?", a: "No. It is designed for business owners, entrepreneurs, managers and professionals who want to improve their problem-solving and decision-making skills." },
  { q: "Do I need an MBA or business degree?", a: "No. The book explains its tools in plain English and is designed to make structured thinking practical and learnable." },
  { q: "Is this a book about starting a business?", a: "Not specifically. It focuses on how to think through business problems, evaluate opportunities, make decisions and turn recommendations into action." },
  { q: "Is the book mostly theory?", a: "No. Each chapter includes practical explanations, examples and something you can apply to your own business." },
  { q: "What kinds of problems can I use this book to solve?", a: "The book explores challenges involving revenue, costs, pricing, competition, business models, employees, processes, growth, decision-making and execution." },
  { q: "Will this book guarantee business success?", a: "No. The book is an educational guide, and results will vary depending on your circumstances, industry and effort. It gives you a method for thinking through problems, not a guarantee of specific business results." },
  { q: "How many chapters are in the book?", a: "35 chapters, covering the full process from understanding problems to developing solutions and putting them into action." },
];

function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="tlc-faq__list">
      {faqs.map((faq, i) => (
        <div key={i} className={`tlc-faq__item${open === i ? " tlc-faq__item--open" : ""}`}>
          <button className="tlc-faq__q" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
            {faq.q}
            <span className="tlc-faq__icon" aria-hidden="true">+</span>
          </button>
          <div className="tlc-faq__a">{faq.a}</div>
        </div>
      ))}
    </div>
  );
}

function CtaButton({ label }: { label: string }) {
  return (
    <a className="tlc-btn" href={checkoutUrl}>
      {label}
      <span className="tlc-btn__old">&#8358;{PRICE_WAS}</span>
      <span className="tlc-btn__now">&#8358;{PRICE_NOW}</span>
    </a>
  );
}

const parts = [
  {
    num: "01", title: "Part 1", name: "Building the Consultant's Mindset",
    items: ["What Consultants Get Paid For", "The One Skill That Matters Most", "Breaking Problems Into Clear Parts", "How to Frame a Problem Using SCQA", "The 6-Step Process for Any Problem"],
  },
  {
    num: "02", title: "Part 2", name: "Understanding Your Business",
    items: ["SWOT Analysis", "PESTLE Analysis", "Competitive Forces", "Market Sizing", "Value Chain Analysis"],
  },
  {
    num: "03", title: "Part 3", name: "Finding the Real Problem",
    items: ["KPI Trees", "Root Cause Analysis", "The Five Whys", "The 80/20 Rule", "Cost and Time Leak Analysis", "Process Mapping", "Systems Thinking"],
  },
  {
    num: "04", title: "Part 4", name: "Developing Better Solutions",
    items: ["Generating Multiple Solutions", "Strategic Choice Tools", "Prioritizing Competing Demands", "Risk Analysis", "Testing Ideas Before Committing"],
  },
  {
    num: "05", title: "Part 5", name: "Making Better Business Decisions",
    items: ["Business Model Analysis", "Short-Term and Long-Term Planning", "Pricing", "Scaling Your Business"],
  },
  {
    num: "06", title: "Part 6", name: "Turning Ideas Into Action",
    items: ["Leading Your Team Through Change", "Creating Action Plans", "Managing Projects", "Getting Stakeholders on Board", "Tracking Progress", "Continuous Improvement"],
  },
  {
    num: "07", title: "Part 7", name: "Putting Everything Together",
    items: ["Quick-Reference Checklist", "3 Problems Solved From Start to Finish", "When to Use the Full Process", "Common Mistakes Even Trained Consultants Make"],
  },
];

const includes = [
  { icon: "📘", name: "Main Book", title: "Think Like a Consultant — Complete Digital Book", desc: "The complete 35-chapter guide to structured thinking, business problem-solving and decision-making." },
  { icon: "🔧", name: "Frameworks", title: "Practical Business Frameworks", desc: "MECE, SCQA, SWOT, PESTLE, KPI Trees, Five Whys, 80/20 Analysis, Value Chain Analysis, Market Sizing, Risk Analysis and more." },
  { icon: "✏️", name: "Exercises", title: "Actionable Exercises and Worksheets", desc: "Work through practical exercises designed to help you apply the concepts to your own business immediately." },
  { icon: "✅", name: "Checklist", title: "The Consultant's Quick-Reference Checklist", desc: "A practical checklist that brings the book's problem-solving process together in one place." },
  { icon: "📋", name: "Examples", title: "Three Complete Problem-Solving Examples", desc: "See how the system is applied to real business problems from start to finish." },
];

function ThinkLikeAConsultant() {
  const time = useCountdown(TIMER_HOURS);

  return (
    <div className="tlc-page">

      {/* ── URGENCY BAR ── */}
      <div className="tlc-urgency" role="banner">
        <span className="tlc-urgency__text">Limited Time Offer — Order Now</span>
        <div className="tlc-urgency__timer">
          <span className="tlc-urgency__unit">{time.h}</span>
          <span className="tlc-urgency__sep">:</span>
          <span className="tlc-urgency__unit">{time.m}</span>
          <span className="tlc-urgency__sep">:</span>
          <span className="tlc-urgency__unit">{time.s}</span>
        </div>
      </div>

      {/* ── HERO ── */}
      <header className="tlc-hero">
        <div className="tlc-shell">
          <div className="tlc-hero__grid">
            <div>
              <h1 className="tlc-hero__h1">Stop Guessing Your Way Through Business Problems.</h1>

              <div style={{ margin: "20px 0", display: "flex", flexDirection: "column", gap: "6px" }}>
                {[
                  { label: "Sales are down", text: '"Let\'s run a promotion."' },
                  { label: "Employee underperforming", text: '"Let\'s fire them."' },
                  { label: "Website not converting", text: '"Let\'s redesign it."' },
                ].map((r, i) => (
                  <p key={i} style={{ margin: 0, fontSize: "0.95rem", color: "var(--tlc-fg)" }}>
                    <strong style={{ color: "var(--tlc-blue)" }}>{r.label}</strong>
                    {" → "}
                    <em style={{ color: "var(--tlc-fg-mid)" }}>{r.text}</em>
                  </p>
                ))}
              </div>

              <p className="tlc-hero__desc" style={{ fontWeight: 600, color: "var(--tlc-fg)" }}>
                But what if you're solving the wrong problem?
              </p>
              <p className="tlc-hero__desc">
                Think Like a Consultant shows you how to break down complex business problems, find the root cause, and choose solutions based on clear thinking — not guesswork.
              </p>
              <p className="tlc-hero__desc">
                No MBA. No consulting background.
              </p>
              <p className="tlc-hero__desc">
                Just practical tools for thinking through your business like a consultant.
              </p>

              <div className="tlc-price-block">
                <div className="tlc-price-row">
                  <span className="tlc-price-row__label">Regular Price:</span>
                  <span className="tlc-price-row__crossed">&#8358;{PRICE_WAS}</span>
                </div>
                <div className="tlc-price-row">
                  <span className="tlc-price-row__label">Today Only:</span>
                  <span className="tlc-price-row__today">&#8358;{PRICE_NOW}</span>
                </div>
                <div className="tlc-price-row">
                  <span className="tlc-price-row__label">You Save:</span>
                  <span className="tlc-price-row__save">&#8358;11,300 (75%)</span>
                </div>
              </div>

              <CtaButton label="Get Instant Access —" />
              <p className="tlc-trust">Instant Digital Access &nbsp;·&nbsp; Secure Checkout &nbsp;·&nbsp; Read on Any Device</p>
            </div>

            <div className="tlc-hero__book">
              <img
                src="/think-like-a-consultant-cover.png"
                alt="Think Like a Consultant book cover"
                width="600"
                height="840"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </header>

      {/* ── PROBLEM SECTION ── */}
      <section className="tlc-section tlc-section--alt">
        <div className="tlc-reading">
          <span className="tlc-eyebrow tlc-eyebrow--blue">Sound familiar?</span>
          <h2 className="tlc-h2">But what if you're solving the wrong problem?</h2>

          <div className="tlc-reactions">
            {[
              { label: "Sales are down", text: '"Let\'s run a promotion."' },
              { label: "Employee underperforming", text: '"Let\'s fire them."' },
              { label: "Website not converting", text: '"Let\'s redesign it."' },
            ].map((r, i) => (
              <div key={i} className="tlc-reaction">
                <span className="tlc-reaction__label">{r.label}</span>
                <span className="tlc-reaction__text">{r.text}</span>
              </div>
            ))}
          </div>

          <p className="tlc-body">These decisions may turn out to be right. But what if they are not?</p>
          <p className="tlc-body">A promotion will not necessarily fix a customer-retention problem. A new website will not automatically solve a sales-process problem. And replacing an employee will not necessarily fix a poorly defined role.</p>
          <p className="tlc-body" style={{ fontWeight: 600, color: "var(--tlc-fg)", borderLeft: "3px solid var(--tlc-blue)", paddingLeft: "16px" }}>
            The difference between guessing and diagnosing is the difference between reacting to a problem and understanding it.
          </p>
          <p className="tlc-body">Think Like a Consultant helps you develop the habit of understanding a problem before rushing to solve it.</p>
        </div>
      </section>

      {/* ── 35 CHAPTERS / PARTS ── */}
      <section className="tlc-section">
        <div className="tlc-shell">
          <div style={{ maxWidth: "700px" }}>
            <span className="tlc-eyebrow tlc-eyebrow--blue">What's inside</span>
            <h2 className="tlc-h2">35 Chapters. One Repeatable Way to Think.</h2>
            <p className="tlc-body" style={{ color: "var(--tlc-fg-mid)" }}>
              A practical system that takes you from identifying a problem to understanding it, developing solutions and putting them into action.
            </p>
          </div>

          <div className="tlc-parts">
            {parts.map((p) => (
              <div key={p.num} className="tlc-part">
                <div className="tlc-part__header">
                  <div className="tlc-part__num">{p.num}</div>
                  <div>
                    <p className="tlc-part__title">{p.title}</p>
                    <p className="tlc-part__name">{p.name}</p>
                  </div>
                </div>
                <div className="tlc-part__items">
                  {p.items.map(item => (
                    <span key={item} className="tlc-part__item">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FRAMEWORKS DARK BAND ── */}
      <section className="tlc-section tlc-section--dark">
        <div className="tlc-reading">
          <span className="tlc-eyebrow">Practical frameworks</span>
          <h2 className="tlc-h2 tlc-h2--white">The tools consultants use. Explained in plain English.</h2>
          <p className="tlc-body tlc-body--light" style={{ marginBottom: "8px" }}>
            No complicated business theory for the sake of theory. Every framework in this book comes with a plain-English explanation and an exercise you can apply immediately.
          </p>
          <div className="tlc-frameworks">
            {["MECE", "SCQA", "SWOT", "PESTLE", "KPI Trees", "Five Whys", "80/20", "Value Chain", "Market Sizing", "Risk Analysis"].map(f => (
              <div key={f} className="tlc-framework">{f}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="tlc-section tlc-section--panel">
        <div className="tlc-shell">
          <div style={{ maxWidth: "700px" }}>
            <span className="tlc-eyebrow tlc-eyebrow--blue">Your purchase includes</span>
            <h2 className="tlc-h2">Everything you need to start thinking differently about your business.</h2>
          </div>
          <div className="tlc-includes-grid">
            {includes.map((inc, i) => (
              <div key={i} className="tlc-include">
                <div className="tlc-include__icon">{inc.icon}</div>
                <div>
                  <p className="tlc-include__name">{inc.name}</p>
                  <p className="tlc-include__title">{inc.title}</p>
                  <p className="tlc-include__desc">{inc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className="tlc-section tlc-section--navy">
        <div className="tlc-reading">
          <span className="tlc-eyebrow">Who this book is for</span>
          <h2 className="tlc-h2 tlc-h2--white">This book is for you if…</h2>

          <div className="tlc-who-grid">
            {[
              { icon: "🏢", title: "Business Owners", text: "Who want to make better decisions instead of constantly reacting to problems." },
              { icon: "🚀", title: "Entrepreneurs", text: "Who want to evaluate opportunities and approach challenges more strategically." },
              { icon: "👥", title: "Managers & Team Leaders", text: "Who need practical tools for solving problems and improving performance." },
              { icon: "💼", title: "Professionals", text: "Who want to develop stronger analytical and decision-making skills." },
              { icon: "🧠", title: "Anyone", text: "Who wants to learn how to think through difficult business situations more clearly." },
            ].map((w, i) => (
              <div key={i} className="tlc-who-item">
                <span className="tlc-who-item__icon">{w.icon}</span>
                <div className="tlc-who-item__text">
                  <strong>{w.title}</strong>
                  {w.text}
                </div>
              </div>
            ))}
          </div>

          <p style={{ marginTop: "32px", fontStyle: "italic", color: "#8A9BB0", fontSize: "0.97rem", textAlign: "center" }}>
            You don't have to be a consultant to benefit from the way consultants think.
          </p>
        </div>
      </section>

      {/* ── FINAL OFFER ── */}
      <section className="tlc-offer">
        <div className="tlc-shell">
          <div className="tlc-offer__grid">
            <div className="tlc-offer__book">
              <img
                src="/think-like-a-consultant-cover.png"
                alt="Think Like a Consultant"
                width="600"
                height="840"
                loading="lazy"
              />
            </div>
            <div>
              <span className="tlc-eyebrow tlc-eyebrow--blue">Get the book</span>
              <h2 className="tlc-h2">Think Like a Consultant</h2>
              <p style={{ fontStyle: "italic", color: "var(--tlc-fg-mid)", fontSize: "0.97rem", marginBottom: "4px" }}>
                Understand the Problem. Find the Opportunity. Make Better Decisions.
              </p>
              <ul className="tlc-offer__outcomes">
                {[
                  "Identify the real problem instead of treating symptoms",
                  "Break complex challenges into manageable parts",
                  "Ask better questions before making important decisions",
                  "Use 10+ practical frameworks to understand your business",
                  "Evaluate options and test ideas before committing",
                  "Turn recommendations into action plans that get done",
                ].map(item => <li key={item}>{item}</li>)}
              </ul>
              <div className="tlc-price-block" style={{ marginBottom: "16px" }}>
                <div className="tlc-price-row">
                  <span className="tlc-price-row__label">Regular Price:</span>
                  <span className="tlc-price-row__crossed">&#8358;{PRICE_WAS}</span>
                </div>
                <div className="tlc-price-row">
                  <span className="tlc-price-row__label">Today Only:</span>
                  <span className="tlc-price-row__today">&#8358;{PRICE_NOW}</span>
                </div>
              </div>
              <CtaButton label="Get Instant Access —" />
              <p className="tlc-trust">Instant Digital Access &nbsp;·&nbsp; Secure Checkout via Selar &nbsp;·&nbsp; Pay Once, Keep Forever</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <div className="tlc-cta-band">
        <div className="tlc-cta-band__inner">
          <p className="tlc-cta-band__text">
            Stop reacting. Start diagnosing. Get instant access today.
          </p>
          <div>
            <a className="tlc-cta-band__btn" href={checkoutUrl}>
              Get Instant Access &nbsp;·&nbsp; <s style={{ opacity: 0.6, fontSize: "0.82rem" }}>&#8358;{PRICE_WAS}</s>&nbsp; &#8358;{PRICE_NOW}
            </a>
            <p className="tlc-cta-band__trust" style={{ marginTop: "6px" }}>
              Instant Digital Access &nbsp;·&nbsp; Secure Checkout &nbsp;·&nbsp; Read on Any Device
            </p>
          </div>
        </div>
      </div>

      {/* ── FAQ ── */}
      <section className="tlc-faq">
        <div className="tlc-shell">
          <h2 className="tlc-faq__h2">Frequently Asked Questions</h2>
          <FaqAccordion />
        </div>
      </section>

      {/* ── CLOSING ── */}
      <div className="tlc-close">
        <div className="tlc-reading" style={{ textAlign: "center" }}>
          <p className="tlc-close__pre">Your business doesn't always need more effort.</p>
          <p className="tlc-close__main">
            Sometimes, it needs a <span>better way to think.</span>
          </p>
          <p style={{ color: "#8A9BB0", marginBottom: "8px", fontSize: "0.88rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>
            Think Like a Consultant
          </p>
          <p style={{ color: "#5A6A7A", marginBottom: "36px", fontSize: "0.9rem", fontStyle: "italic" }}>
            Understand the Problem. Find the Opportunity. Make Better Decisions.
          </p>
          <a className="tlc-btn" href={checkoutUrl} style={{ display: "inline-flex", width: "auto", background: "var(--tlc-gold)", borderColor: "var(--tlc-gold)", color: "#0D1B2A", fontWeight: 800 }}>
            Get Your Copy — &#8358;{PRICE_NOW}
          </a>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer className="tlc-footer">
        <p>&copy; {new Date().getFullYear()} Think Like a Consultant. All rights reserved.</p>
        <p>Results depend on your circumstances, industry and effort. No specific business outcome is guaranteed.</p>
      </footer>

    </div>
  );
}
