import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import cakesCss from "../styles-cakes.css?url";

const checkoutUrl = "https://selar.com/2zmi40m090";
const PRICE_NOW = "3,700";
const PRICE_WAS = "15,000";
const TIMER_HOURS = 24;

export const Route = createFileRoute("/sell-this-cakes")({
  head: () => ({
    meta: [
      { title: "Sell This: Cakes — Get More Cake Orders Without Begging People to Buy" },
      {
        name: "description",
        content:
          "A practical sales playbook for bakers. Learn how to turn attention, enquiries and conversations into actual orders.",
      },
      { property: "og:title", content: "Sell This: Cakes — Get More Cake Orders Without Begging People to Buy" },
      { property: "og:description", content: "You already know how to bake. Now learn how to sell." },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/sell-this-cakes" },
      { rel: "stylesheet", href: cakesCss },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Book",
          name: "Sell This: Cakes",
          description: "How to Get More Cake Orders Without Begging People to Buy",
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
  component: SellThisCakes,
});

/* ── COUNTDOWN HOOK ── */
function useCountdown(hours: number) {
  const getEndTime = () => {
    if (typeof window === "undefined") return Date.now() + hours * 3600 * 1000;
    const stored = localStorage.getItem("stc_end");
    if (stored) return parseInt(stored, 10);
    const end = Date.now() + hours * 3600 * 1000;
    localStorage.setItem("stc_end", String(end));
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

/* ── FAQ DATA ── */
const faqs = [
  { q: "Is this a baking book?", a: "No. It is a sales playbook for people who already know how to bake and want to get better at selling their cakes." },
  { q: "Do I need a large following?", a: "No. The book focuses on identifying the right buyers and turning attention and conversations into enquiries and orders." },
  { q: "Is this only for professional bakers?", a: "No. If you sell cakes and want to improve how you attract, communicate with and convert customers, the strategies can be useful to you." },
  { q: "Does the book teach me how to price my cakes?", a: "It teaches you how to present your price, communicate value and respond to price objections. It is not a full cake-pricing or costing course." },
  { q: "What if customers keep saying my cake is too expensive?", a: "The book shows you how to distinguish between different reasons behind the objection and how to respond without immediately discounting." },
  { q: "Will this guarantee me more orders?", a: "No one can honestly guarantee a specific number of orders. The book gives you practical strategies, scripts and tools for improving how you market and sell your cakes. Your results will depend on your market, pricing, consistency, effort and execution." },
];

function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="stc-faq__list">
      {faqs.map((faq, i) => (
        <div key={i} className={`stc-faq__item${open === i ? " stc-faq__item--open" : ""}`}>
          <button
            className="stc-faq__q"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            {faq.q}
            <span className="stc-faq__icon" aria-hidden="true">+</span>
          </button>
          <div className="stc-faq__a">{faq.a}</div>
        </div>
      ))}
    </div>
  );
}

function CtaButton({ label }: { label: string }) {
  return (
    <a className="stc-btn" href={checkoutUrl}>
      {label}
      <span className="stc-btn__price">&#8358;{PRICE_WAS}</span>
      <span className="stc-btn__price--now">&#8358;{PRICE_NOW}</span>
    </a>
  );
}

function SellThisCakes() {
  const time = useCountdown(TIMER_HOURS);

  return (
    <div className="stc-page">

      {/* ── URGENCY BAR ── */}
      <div className="stc-urgency" role="banner" aria-label="Limited time offer">
        <span className="stc-urgency__text">Offer Ends Soon — Order Now</span>
        <div className="stc-urgency__timer" aria-label="Countdown timer">
          <span className="stc-urgency__unit">{time.h}</span>
          <span className="stc-urgency__sep">:</span>
          <span className="stc-urgency__unit">{time.m}</span>
          <span className="stc-urgency__sep">:</span>
          <span className="stc-urgency__unit">{time.s}</span>
        </div>
      </div>

      {/* ── HERO ── */}
      <header className="stc-hero">
        <div className="stc-shell">
          <div className="stc-hero__grid">

            {/* LEFT — copy */}
            <div>
              <p className="stc-hero__kicker">The Sell This Series</p>
              <h1 className="stc-hero__h1">Your Money Back If You Don't Start Getting Consistent Orders With This Method.</h1>
              <p className="stc-hero__sub">
                A practical sales playbook for bakers who know how to make great cakes — but want to get better at turning attention, enquiries and conversations into actual orders.
              </p>

              <ul className="stc-bullets">
                <li>Learn the 7-step SELL THIS system for getting more orders</li>
                <li>Practical scripts and tools — no complicated business theory</li>
                <li>Strategies for Instagram, WhatsApp, DMs and referrals</li>
              </ul>

              <div className="stc-price-block">
                <div className="stc-price-row">
                  <span className="stc-price-row__label">Regular Price:</span>
                  <span className="stc-price-row__val--crossed">&#8358;{PRICE_WAS}</span>
                </div>
                <div className="stc-price-row">
                  <span className="stc-price-row__label">Today Only:</span>
                  <span className="stc-price-row__val--today">&#8358;{PRICE_NOW}</span>
                </div>
                <div className="stc-price-row">
                  <span className="stc-price-row__label">You Save:</span>
                  <span className="stc-price-row__val--save">&#8358;11,300 (75%)</span>
                </div>
              </div>

              <CtaButton label="Get Instant Access —" />
              <p className="stc-trust">
                Instant Digital Access &nbsp;·&nbsp; Secure Checkout &nbsp;·&nbsp; Read on Any Device
              </p>
            </div>

            {/* RIGHT — book */}
            <div className="stc-hero__book">
              <img
                src="/sell-this-cakes-cover.png"
                alt="Sell This: Cakes — How to Get More Cake Orders Without Begging People to Buy"
                width="680"
                height="960"
                fetchPriority="high"
              />
            </div>

          </div>
        </div>
      </header>

      {/* ── FOOD IMAGE SECTION ── */}
      <section className="stc-food-section">
        <div className="stc-shell">
          <div className="stc-food-section__img">
            <img
              className="main"
              src="/sell-this-cakes-bundle.png"
              alt="The Complete Sell This: Cakes Business Bundle"
              width="960"
              height="540"
              loading="lazy"
              style={{ objectPosition: "center center" }}
            />
            <span className="stc-food-section__overlay">The Complete Bundle</span>
          </div>
          <p className="stc-food-section__caption">
            Everything you need to start getting consistent cake orders.
          </p>
          <CtaButton label="Download Instantly —" />
          <p className="stc-trust" style={{ marginTop: "8px" }}>
            Pay Once. Keep It Forever.
          </p>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="stc-includes">
        <div className="stc-shell">
          <div className="stc-includes__grid">

            <div>
              <h2 className="stc-includes__h2">Your Instant Access Includes</h2>
              <ul className="stc-bullets">
                <li>
                  <strong>Sell This: Cakes — Main Book (Digital)</strong>
                  <span style={{ display: "block", fontSize: "0.88rem", color: "var(--stc-fg-mid)", marginTop: "2px" }}>
                    Download instantly and start selling today.
                  </span>
                </li>
                <li>
                  <strong>The 7-Step SELL THIS System</strong>
                  <span style={{ display: "block", fontSize: "0.88rem", color: "var(--stc-fg-mid)", marginTop: "2px" }}>
                    Target. Attract. Discover. Present. Handle. Close. Multiply.
                  </span>
                </li>
                <li>
                  <strong>8 Practical Sales Tools</strong>
                  <span style={{ display: "block", fontSize: "0.88rem", color: "var(--stc-fg-mid)", marginTop: "2px" }}>
                    Buyer Map, Content System, Scripts, Objection Sheet, Follow-Up Sequence and more.
                  </span>
                </li>
                <li>
                  <strong>7-Day Cake Sales Challenge</strong>
                  <span style={{ display: "block", fontSize: "0.88rem", color: "var(--stc-fg-mid)", marginTop: "2px" }}>
                    A simple action plan to put what you have learned into practice immediately.
                  </span>
                </li>
              </ul>

              <CtaButton label="Get Instant Access —" />
              <p className="stc-try-note">Instant Digital Access &nbsp;·&nbsp; Secure Checkout via Selar</p>
            </div>

            <div className="stc-includes__img">
              <img
                src="/sell-this-cakes-baker.png"
                alt="Baker holding Sell This: Cakes book"
                width="480"
                height="600"
                loading="lazy"
                style={{ borderRadius: "8px", boxShadow: "0 8px 32px rgba(0,0,0,0.12)", objectFit: "cover" }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── GREEN CTA BAND ── */}
      <div className="stc-cta-band">
        <div className="stc-cta-band__inner">
          <p className="stc-cta-band__text">
            Download now and start getting more cake orders today
          </p>
          <div>
            <a className="stc-cta-band__btn" href={checkoutUrl}>
              Get Instant Access &nbsp;·&nbsp; <s style={{ opacity: 0.6, fontSize: "0.82rem" }}>&#8358;{PRICE_WAS}</s>&nbsp; &#8358;{PRICE_NOW}
            </a>
            <p className="stc-cta-band__trust" style={{ marginTop: "6px" }}>
              Instant Digital Access &nbsp;·&nbsp; Secure Checkout &nbsp;·&nbsp; Read on Any Device
            </p>
          </div>
        </div>
      </div>

      {/* ── FAQ ── */}
      <section className="stc-faq">
        <div className="stc-shell">
          <h2 className="stc-faq__h2">Frequently Asked Questions</h2>
          <FaqAccordion />
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="stc-footer">
        <p>
          &copy; {new Date().getFullYear()} Sell This: Cakes. All rights reserved.
        </p>
        <p>
          Results depend on your market, pricing, consistency and execution. No specific outcome is guaranteed.
        </p>
      </footer>

    </div>
  );
}
