import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import menCodeCss from "../styles-mencode.css?url";

const checkoutUrl = "https://selar.com/3q716c677j";
const PRICE_NOW = "5,000";
const PRICE_WAS = "10,000";

export const Route = createFileRoute("/the-men-code")({
  head: () => ({
    meta: [
      { title: "The Men Code — Last Longer, Perform Better, Leave Her Fully Satisfied" },
      {
        name: "description",
        content:
          "The private, no-nonsense guide that shows you what nobody taught you about stamina, confidence and what a woman really wants.",
      },
      { property: "og:title", content: "The Men Code — Last Longer, Perform Better, Leave Her Fully Satisfied" },
      { property: "og:description", content: "Discover the practical guide for Nigerian men who are tired of pretending everything is fine." },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/the-men-code" },
      { rel: "stylesheet", href: menCodeCss },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Book",
          name: "The Men Code",
          description: "How to Last Longer, Perform Better, and Leave Her Fully Satisfied",
          offers: {
            "@type": "Offer",
            priceCurrency: "NGN",
            price: "5000",
            availability: "https://schema.org/InStock",
            url: checkoutUrl,
          },
        }),
      },
    ],
  }),
  component: TheMenCode,
});

function Cta({ label, full, outline, dark }: { label: string; full?: boolean; outline?: boolean; dark?: boolean }) {
  return (
    <a
      className={`mc-btn${full ? "" : ""}${outline ? " mc-btn--outline" : ""}${dark ? " mc-btn--dark" : ""}`}
      href={checkoutUrl}
      style={full ? { width: "100%" } : { display: "inline-flex" }}
    >
      {label}
    </a>
  );
}

const chapters = [
  { num: "Ch. 1", text: "How the same habits that raise your blood pressure can quietly weaken your erections, and the simple daily changes that help." },
  { num: "Ch. 2", text: 'Why "performance anxiety" wrecks more nights than age ever will, and a calm reset you can use before things even begin.' },
  { num: "Ch. 3", text: "The pelvic floor exercise most men have never heard of that builds control and stamina, step by step." },
  { num: "Ch. 3", text: "The start-stop and squeeze techniques, explained so clearly you can try them tonight." },
  { num: "Ch. 4", text: "Why lasting long is only half the game, and what she actually wants that most men completely miss." },
  { num: "Ch. 5", text: "How to make her want you before you even reach the bedroom, using things you can say and do during the day." },
  { num: "Ch. 6", text: "How to keep things exciting after years together without awkwardness or trying to be someone you are not." },
  { num: "Ch. 7", text: "The everyday Nigerian foods, drinks and habits that help your stamina, and the ones that quietly kill it." },
  { num: "Ch. 8", text: "How to raise this with a doctor without feeling small, and the signs you should never ignore." },
  { num: "Ch. 9", text: "A 30-day action plan so you do not just read this book, you actually change something." },
];

const faqs = [
  { q: "Is this book only for men with serious problems?", a: "No. Whether you want to improve slightly or fix something that has been affecting your confidence for a while, the tools in this book are practical for both." },
  { q: "Is this safe?", a: "Yes. The book does not recommend any mixture, tablet or supplement. It focuses on lifestyle changes, mental tools and physical exercises. It works alongside proper medical care, not instead of it." },
  { q: "Will my partner know I bought this?", a: "No. Download is instant and discreet. The billing description will not reveal the content." },
  { q: "What if it does not help me?", a: "You are covered by the 60-day guarantee. If you genuinely feel it was not worth your money after reading and trying the exercises, send one message and you get a full refund." },
  { q: "Do I need to see a doctor first?", a: "If your problems are sudden, severe or worsening, yes. The book includes a chapter on when and how to speak to a doctor. It is designed to complement proper care." },
];

function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="mc-faq__list">
      {faqs.map((faq, i) => (
        <div key={i} className={`mc-faq__item${open === i ? " mc-faq__item--open" : ""}`}>
          <button className="mc-faq__q" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
            {faq.q}
            <span className="mc-faq__icon" aria-hidden="true">+</span>
          </button>
          <div className="mc-faq__a">{faq.a}</div>
        </div>
      ))}
    </div>
  );
}

function TheMenCode() {
  return (
    <div className="mc-page">

      {/* ── HERO — Black ── */}
      <header className="mc-hero">
        <div className="mc-shell">
          <div className="mc-hero__grid">
            <div>
              <p className="mc-hero__eyebrow">For Nigerian men · Private &amp; Discreet</p>
              <h1 className="mc-hero__h1">
                How To Last Longer, Perform Better And <span>Leave Her Fully Satisfied</span>
              </h1>
              <p className="mc-hero__sub">
                Without roadside mixtures, risky tablets or explaining yourself to anybody.
              </p>
              <p className="mc-hero__sub">
                Discover The Men Code — the private, no-nonsense guide that shows you what nobody taught you about stamina, confidence and what a woman really wants.
              </p>

              <div className="mc-price-block">
                <div className="mc-price-row">
                  <span className="mc-price-row__label">Regular Price:</span>
                  <span className="mc-price-row__crossed">&#8358;{PRICE_WAS}</span>
                </div>
                <div className="mc-price-row">
                  <span className="mc-price-row__label">Launch Price:</span>
                  <span className="mc-price-row__today">&#8358;{PRICE_NOW}</span>
                </div>
                <div className="mc-price-row">
                  <span className="mc-price-row__label">Goes up to &#8358;{PRICE_WAS} on 1st November</span>
                  <span className="mc-price-row__save">Save 50%</span>
                </div>
              </div>

              <Cta label={"Send me The Men Code"} full />
              <p className="mc-trust mc-trust--light" style={{ marginTop: "10px" }}>
                Instant download &nbsp;·&nbsp; Read privately on any phone &nbsp;·&nbsp; Discreet billing
              </p>
            </div>

            <div className="mc-hero__book">
              <img
                src="/men-code-cover.png"
                alt="The Men Code book cover"
                width="600"
                height="840"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </header>

      {/* ── LETTER — White ── */}
      <section className="mc-section mc-section--white">
        <div className="mc-reading">
          <p style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "20px", color: "#111" }}>Dear Friend,</p>
          <div className="mc-letter">
            <p>Let me tell you something men will never say at the beer parlour.</p>
            <p>Almost every man has finished too early. Almost every man has gone soft at the very moment it mattered. And almost every man has lain awake afterwards, wondering if she noticed.</p>
            <p>Nobody talks about it. So you think you are the only one.</p>
            <p><strong>You are not. Not even close.</strong></p>
            <p>So what do most men do? They buy the mixture from the roadside. They swallow the "strong" tablet a friend swore by. Or they just start avoiding the bedroom and hope the problem quietly disappears.</p>
            <p>It doesn't. It gets worse. Her patience gets thinner, and your confidence gets thinner too.</p>
          </div>
        </div>
      </section>

      {/* ── NOBODY TOLD YOU — Dark ── */}
      <section className="mc-section mc-section--dark">
        <div className="mc-reading">
          <span className="mc-eyebrow mc-eyebrow--light">Here is what nobody told you</span>
          <h2 className="mc-h2 mc-h2--white">Most of these problems are not about age. And they are not "spiritual."</h2>
          <p className="mc-body mc-body--light">
            They come from things you can actually fix: blood flow, stress, poor sleep, too much sugar and alcohol, a mind that will not stop watching itself, and a few simple skills no one ever taught you.
          </p>
          <p style={{ color: "#CCC", fontSize: "1rem", lineHeight: 1.75, marginBottom: "28px" }}>
            <strong style={{ color: "#fff" }}>And skills can be learned.</strong> That is why I put everything in one book.
          </p>

          <div style={{
            background: "rgba(204,31,31,0.12)",
            border: "1px solid rgba(204,31,31,0.3)",
            borderLeft: "4px solid var(--mc-red)",
            borderRadius: "0 6px 6px 0",
            padding: "20px 22px",
          }}>
            <p style={{ margin: 0, color: "#fff", fontSize: "1.05rem", fontFamily: "var(--mc-serif)", fontStyle: "italic", lineHeight: 1.6 }}>
              It is a straight-talking guide, written in plain language, that you can read privately on your phone in a weekend. No grammar. No shame. No hype. Just what works.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INSIDE — White ── */}
      <section className="mc-section mc-section--white">
        <div className="mc-reading">
          <span className="mc-eyebrow">Inside the book</span>
          <h2 className="mc-h2">Inside, you will discover:</h2>

          <ul className="mc-chapters">
            {chapters.map((c, i) => (
              <li key={i}>
                <span className="mc-chapters__num">{c.num}</span>
                <span className="mc-chapters__text">{c.text}</span>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: "32px" }}>
            <Cta label="Yes, I want The Men Code" full />
          </div>
        </div>
      </section>

      {/* ── AUTHOR — Black ── */}
      <section className="mc-author">
        <div className="mc-reading">
          <span className="mc-eyebrow mc-author__eyebrow">Why I wrote this book</span>
          <h2 className="mc-author__h2">Why I wrote this book (and why I left my job)</h2>
          <p className="mc-author__body">My name is Ojonugwua Lawrence. For many years, I worked at an e-commerce brand that sold herbal products to men who wanted better stamina and bedroom performance.</p>
          <p className="mc-author__body">The products sold fast. Men rushed to buy them, because we told them there were "no side effects". But deep down, I knew that was not the full story.</p>
          <p className="mc-author__body">I saw enough to know that men were swallowing things without understanding what was in them or what they might be doing to their bodies. That sat heavily on my conscience, and eventually I made the decision to leave the job.</p>
          <p className="mc-author__body">I could not keep selling a promise I did not believe in.</p>
          <p className="mc-author__body">So I started asking a different question: what is the safest, most natural way for a man to get these results? I spent years researching it, from the health side, the lifestyle side and the mind side. The answers were simpler than any roadside mixture, and most men had never been told them.</p>
          <p className="mc-author__body" style={{ marginBottom: 0 }}>
            Those answers are what I put into The Men Code. It is the book I wish every man I once sold to had been given first.
          </p>
        </div>
      </section>

      {/* ── GUARANTEE — Grey ── */}
      <section className="mc-section mc-section--grey">
        <div className="mc-reading" style={{ textAlign: "center" }}>
          <span className="mc-eyebrow">Risk-free</span>
          <h2 className="mc-h2">The "No Shalaye" 60-Day Guarantee</h2>
          <div className="mc-guarantee">
            <p className="mc-guarantee__title">Read it. Try it. If it doesn't help — get every kobo back.</p>
            <p className="mc-guarantee__body">
              Read the book. Try the exercises. Follow the 30-day plan. If you feel it was not worth your money, send me one message. No long story. No arguments. I will refund every kobo.
            </p>
            <p className="mc-guarantee__body" style={{ marginTop: "12px", fontWeight: 600 }}>
              You risk nothing. The only way to lose is to keep doing what you are doing now.
            </p>
          </div>
        </div>
      </section>

      {/* ── BONUSES + OFFER — Black ── */}
      <section className="mc-offer">
        <div className="mc-shell">
          <div className="mc-offer__grid">
            <div className="mc-offer__book">
              <img
                src="/men-code-cover.png"
                alt="The Men Code"
                width="600"
                height="840"
                loading="lazy"
              />
            </div>

            <div>
              <span className="mc-eyebrow">Get the book today</span>
              <h2 className="mc-h2 mc-h2--white">The Men Code</h2>
              <p style={{ color: "#AAA", fontStyle: "italic", fontSize: "0.97rem", marginBottom: "20px" }}>
                How to Last Longer, Perform Better and Leave Her Fully Satisfied
              </p>

              <p style={{ color: "#CCC", fontSize: "0.9rem", fontWeight: 700, marginBottom: "10px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Free bonuses when you order today:
              </p>
              <div className="mc-bonuses" style={{ marginBottom: "28px" }}>
                <div className="mc-bonus" style={{ background: "#1A1A1A", borderColor: "#2A2A2A" }}>
                  <span className="mc-bonus__icon">📋</span>
                  <div>
                    <p className="mc-bonus__title" style={{ color: "#fff" }}>The 30-Day Tracker</p>
                    <p className="mc-bonus__desc" style={{ color: "#999" }}>Track your progress day by day.</p>
                  </div>
                </div>
                <div className="mc-bonus" style={{ background: "#1A1A1A", borderColor: "#2A2A2A" }}>
                  <span className="mc-bonus__icon">💬</span>
                  <div>
                    <p className="mc-bonus__title" style={{ color: "#fff" }}>The "Talking To Your Doctor" Script</p>
                    <p className="mc-bonus__desc" style={{ color: "#999" }}>Know exactly what to say.</p>
                  </div>
                </div>
                <div className="mc-bonus" style={{ background: "#1A1A1A", borderColor: "#2A2A2A" }}>
                  <span className="mc-bonus__icon">⚡</span>
                  <div>
                    <p className="mc-bonus__title" style={{ color: "#fff" }}>The 7-Day Stamina Routine</p>
                    <p className="mc-bonus__desc" style={{ color: "#999" }}>A simple week-one action plan.</p>
                  </div>
                </div>
              </div>

              <div className="mc-price-block">
                <div className="mc-price-row">
                  <span className="mc-price-row__label">Regular Price:</span>
                  <span className="mc-price-row__crossed">&#8358;{PRICE_WAS}</span>
                </div>
                <div className="mc-price-row">
                  <span className="mc-price-row__label">Launch Price:</span>
                  <span className="mc-price-row__today">&#8358;{PRICE_NOW}</span>
                </div>
              </div>

              <Cta label="Send me my copy now" full />
              <p className="mc-trust mc-trust--light" style={{ marginTop: "10px" }}>
                Secure payment &nbsp;·&nbsp; Discreet billing &nbsp;·&nbsp; Nobody will know
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BAND — Red ── */}
      <div className="mc-cta-band">
        <div className="mc-cta-band__inner">
          <p className="mc-cta-band__text">
            In a year, you will either be a man who did something about this — or a man who kept hoping.
          </p>
          <a className="mc-cta-band__btn" href={checkoutUrl}>
            Get The Men Code — &#8358;{PRICE_NOW}
          </a>
        </div>
      </div>

      {/* ── FAQ — White ── */}
      <section className="mc-faq">
        <div className="mc-shell">
          <h2 className="mc-faq__h2">Frequently Asked Questions</h2>
          <FaqAccordion />
        </div>
      </section>

      {/* ── CLOSE — Black ── */}
      <div className="mc-close">
        <div className="mc-reading">
          <p className="mc-close__main">
            Make the decision that gives her, and you, <span>the better nights ahead.</span>
          </p>
          <p className="mc-close__sub">
            To your confidence and your health — Ojonugwua Lawrence
          </p>
          <Cta label="Get The Men Code — &#8358;5,000" />
          <p className="mc-trust mc-trust--light" style={{ marginTop: "12px" }}>
            P.S. You are covered by the 60-day guarantee. If it does not help, you get every kobo back. The only real risk is doing nothing.
          </p>
        </div>
      </div>

      {/* ── DISCLAIMER ── */}
      <div className="mc-disclaimer">
        <p>
          The Men Code is for adults 18 and over and is for educational purposes only. It is not medical advice and does not diagnose, treat or cure any condition. Consult a qualified healthcare professional before making health changes, and never stop prescribed medication without your doctor's guidance. Results vary and are not guaranteed.
        </p>
      </div>

    </div>
  );
}
