import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import divineIntimatyCss from "../styles-divine-intimacy.css?url";

const checkoutUrl = "https://selar.com/divine-intimacy"; // ← replace with actual Selar URL
const PRICE_NOW = "3,500";
const PRICE_WAS = "12,000";
const TIMER_HOURS = 24;
const STORAGE_KEY = "di_end";

/* ─────────────────────────────────────────────────────────
   ROUTE DEFINITION
───────────────────────────────────────────────────────── */
export const Route = createFileRoute("/divine-intimacy")({
  head: () => ({
    meta: [
      {
        title:
          "Divine Intimacy — A Christian Guide to Physical and Emotional Closeness in Marriage",
      },
      {
        name: "description",
        content:
          "God designed physical intimacy for married couples. This practical, faith-based ebook helps Christian husbands and wives build a deeply satisfying, shame-free intimate life together.",
      },
      { property: "og:title", content: "Divine Intimacy" },
      {
        property: "og:description",
        content:
          "Intimacy is not a forbidden topic — it is a gift. A practical, faith-grounded guide for married Christian couples.",
      },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/divine-intimacy" },
      { rel: "stylesheet", href: divineIntimatyCss },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Book",
          name: "Divine Intimacy",
          description:
            "A Christian guide to physical and emotional closeness in marriage.",
          offers: {
            "@type": "Offer",
            priceCurrency: "NGN",
            price: "3500",
            availability: "https://schema.org/InStock",
            url: checkoutUrl,
          },
        }),
      },
    ],
  }),
  component: DivineIntimacy,
});

/* ─────────────────────────────────────────────────────────
   COUNTDOWN HOOK
───────────────────────────────────────────────────────── */
function useCountdown(hours: number) {
  const getEndTime = () => {
    if (typeof window === "undefined")
      return Date.now() + hours * 3600 * 1000;
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return parseInt(stored, 10);
    const end = Date.now() + hours * 3600 * 1000;
    localStorage.setItem(STORAGE_KEY, String(end));
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

/* ─────────────────────────────────────────────────────────
   CTA BUTTON
───────────────────────────────────────────────────────── */
function CtaButton({ label }: { label: string }) {
  return (
    <a className="di-btn" href={checkoutUrl}>
      <span className="di-btn__label">{label}</span>
      <span className="di-btn__prices">
        <span className="di-btn__old">&#8358;{PRICE_WAS}</span>
        <span className="di-btn__now">&#8358;{PRICE_NOW}</span>
      </span>
    </a>
  );
}

/* ─────────────────────────────────────────────────────────
   FAQ DATA & ACCORDION
───────────────────────────────────────────────────────── */
const faqs = [
  {
    q: "Is this book appropriate for Christian couples?",
    a: "Yes. Divine Intimacy is written entirely within a Christian framework. It draws on scripture and a biblical understanding of marriage. It does not contain explicit content — it is a mature, tasteful educational resource for married couples.",
  },
  {
    q: "We are already married. Will this book still help us?",
    a: "Absolutely. Whether you have been married for six months or sixteen years, the book addresses physical intimacy, emotional connection, communication, and long-term rekindling. It is not just for newlyweds.",
  },
  {
    q: "We are still engaged. Should we read this before marriage?",
    a: "Yes. Many couples enter marriage without having had honest conversations about intimacy. This book gives engaged couples a biblical, practical foundation to enter marriage with clarity and confidence rather than confusion or shame.",
  },
  {
    q: "Is this book too explicit or inappropriate?",
    a: "No. It is written with care and discretion. The goal is education and connection, not titillation. It covers physical and emotional intimacy in language that is honest, mature, and respectful.",
  },
  {
    q: "Does the book address couples going through a dry season or distance?",
    a: "Yes. There are chapters specifically on emotional disconnection, rekindling desire, navigating differences in drive, and restoring closeness after conflict or seasons of distance.",
  },
  {
    q: "What format is the book in, and how do I access it?",
    a: "It is a digital ebook (PDF). After payment on Selar, you receive immediate access. You can read it on your phone, tablet, laptop, or any device — privately, at your own pace.",
  },
  {
    q: "Can we read it together as a couple?",
    a: "Yes, and that is encouraged. The book includes reflection questions at the end of each chapter designed to open honest, loving conversations between husband and wife.",
  },
];

function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="di-faq__list">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className={`di-faq__item${open === i ? " di-faq__item--open" : ""}`}
        >
          <button
            className="di-faq__q"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            {faq.q}
            <span className="di-faq__icon" aria-hidden="true">
              +
            </span>
          </button>
          <div className="di-faq__a">{faq.a}</div>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────────────────── */
function DivineIntimacy() {
  const time = useCountdown(TIMER_HOURS);

  return (
    <div className="di-page">

      {/* ══════════════════════════════════════════
          ANNOUNCEMENT BAR
      ══════════════════════════════════════════ */}
      <div className="di-announce" role="banner">
        <span className="di-announce__text">
          Introductory Price — Limited Time Only
        </span>
        <div className="di-announce__timer" aria-label="Time remaining">
          <span className="di-announce__unit">{time.h}</span>
          <span className="di-announce__sep">:</span>
          <span className="di-announce__unit">{time.m}</span>
          <span className="di-announce__sep">:</span>
          <span className="di-announce__unit">{time.s}</span>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <header className="di-hero">
        <div className="di-shell">
          <div className="di-hero__grid">
            {/* LEFT: COPY */}
            <div>
              <p className="di-hero__eyebrow">
                A Christian Guide for Married Couples
              </p>

              <h1 className="di-hero__title">
                <em>Divine Intimacy</em>
              </h1>
              <p className="di-hero__subtitle">
                God designed physical closeness for marriage. This book shows you how to enjoy it — freely, faithfully, and without shame.
              </p>

              <p className="di-hero__desc">
                Most Christian couples were never taught how to talk about sex — or how to truly connect physically and emotionally after marriage. They carry silence, unmet expectations, and quiet frustration that slowly erodes the intimacy God intended for them.
              </p>
              <p className="di-hero__desc" style={{ marginBottom: "24px" }}>
                <em>Divine Intimacy</em> is a practical, scripture-grounded guide that helps married couples build a satisfying, shame-free intimate life — one that honours God and deepens their love for each other.
              </p>

              <ul className="di-hero__bullets">
                <li>Understand God's design for physical and emotional intimacy</li>
                <li>Have honest, loving conversations about desire and expectations</li>
                <li>Move past shame, silence, and religious misconceptions about sex</li>
                <li>Reconnect emotionally and physically — at any stage of marriage</li>
                <li>Build habits of closeness that last a lifetime</li>
              </ul>

              <div className="di-price-block">
                <div className="di-price-row">
                  <span className="di-price-row__label">Regular Price:</span>
                  <span className="di-price-row__crossed">
                    &#8358;{PRICE_WAS}
                  </span>
                </div>
                <div className="di-price-row">
                  <span className="di-price-row__label">Today Only:</span>
                  <span className="di-price-row__today">
                    &#8358;{PRICE_NOW}
                  </span>
                </div>
                <div className="di-price-row">
                  <span className="di-price-row__label">You Save:</span>
                  <span className="di-price-row__save">
                    &#8358;8,500 (71% off)
                  </span>
                </div>
              </div>

              <CtaButton label="Get Instant Access —" />
              <p className="di-trust">
                Instant Digital Access &nbsp;·&nbsp; Secure Checkout &nbsp;·&nbsp; Private &amp; Discreet
              </p>
            </div>

            {/* RIGHT: BOOK COVER */}
            <div className="di-hero__book">
              <img
                src="/divine-intimacy-cover.png"
                alt="Divine Intimacy ebook cover"
                width="600"
                height="840"
                fetchPriority="high"
                onError={(e) => {
                  // fallback placeholder when cover image is not yet available
                  const el = e.currentTarget as HTMLImageElement;
                  el.style.display = "none";
                  const fallback = el.nextElementSibling as HTMLElement | null;
                  if (fallback) fallback.style.display = "flex";
                }}
              />
              {/* Placeholder shown until real cover is added */}
              <div
                style={{
                  display: "none",
                  width: "100%",
                  maxWidth: "260px",
                  aspectRatio: "5/7",
                  background: "linear-gradient(145deg, #07583C 0%, #044028 100%)",
                  borderRadius: "4px 14px 14px 4px",
                  boxShadow: "-6px 0 0 #4A6357, -16px 6px 44px rgba(7,88,60,0.28)",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: "12px",
                  padding: "32px 24px",
                  textAlign: "center",
                }}
              >
                <p style={{ fontFamily: "var(--di-serif)", fontSize: "2rem", fontWeight: 700, color: "#fff", lineHeight: 1.1, margin: 0 }}>
                  Divine<br />Intimacy
                </p>
                <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.65)", letterSpacing: "0.1em", textTransform: "uppercase", margin: 0 }}>
                  A Christian Guide
                </p>
                <div style={{ width: "40px", height: "2px", background: "rgba(255,255,255,0.3)" }} />
                <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.45)", margin: 0 }}>
                  for Married Couples
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════════
          THE PROBLEM
      ══════════════════════════════════════════ */}
      <section className="di-section">
        <div className="di-reading">
          <p className="di-eyebrow">The Problem</p>
          <h2 className="di-h2">
            Nobody taught you how to do this. And the silence has a cost.
          </h2>
          <p className="di-body">
            Christian couples are often raised to guard their purity before marriage, but they are rarely given practical, faith-grounded guidance on how to build a healthy intimate life <em>within</em> marriage. The message tends to stop at "wait until the wedding night."
          </p>
          <p className="di-body">
            The result is real and common — and it is not talked about nearly enough.
          </p>

          <div className="di-pains">
            {[
              {
                mark: "Common",
                text: "\"We love each other, but we don't talk about this. I don't even know how to bring it up.\"",
              },
              {
                mark: "Common",
                text: "\"I grew up feeling like sex was shameful. I know it isn't now, but the feeling is still there.\"",
              },
              {
                mark: "Common",
                text: "\"We're not connecting the way we used to. I don't know what changed or how to fix it.\"",
              },
              {
                mark: "Common",
                text: "\"I have questions I've never felt safe asking anyone — especially not in church.\"",
              },
              {
                mark: "Common",
                text: "\"I want our marriage to be intimate in every way, but I don't know where to start.\"",
              },
            ].map((item, i) => (
              <div key={i} className="di-pain">
                <span className="di-pain__mark">{item.mark}</span>
                <span className="di-pain__text">{item.text}</span>
              </div>
            ))}
          </div>

          <p className="di-body">
            These are not signs of a broken marriage. They are signs that good people were never given the right tools. <em>Divine Intimacy</em> was written to give you those tools.
          </p>
        </div>
      </section>

      <hr className="di-rule" />

      {/* ══════════════════════════════════════════
          SCRIPTURE ANCHOR / PULL QUOTE
      ══════════════════════════════════════════ */}
      <section className="di-section di-section--pale">
        <div className="di-reading">
          <div className="di-quote">
            <p className="di-quote__text">
              "Marriage is honourable among all, and the bed undefiled."
            </p>
            <p className="di-quote__author">Hebrews 13:4</p>
          </div>

          <p className="di-body">
            The Bible is not silent about physical intimacy. The Song of Solomon is an entire book devoted to desire, delight, and the beauty of love between a husband and wife. God is not embarrassed by the intimate life He designed for married couples — and neither should you be.
          </p>
          <p className="di-body">
            <em>Divine Intimacy</em> approaches this topic the way it deserves: with scripture, maturity, honesty, and deep respect for the covenant of marriage.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHAT'S INSIDE — TABLE OF CONTENTS
      ══════════════════════════════════════════ */}
      <section className="di-section">
        <div className="di-reading">
          <p className="di-eyebrow">What's Inside</p>
          <h2 className="di-h2">
            A complete guide to intimacy in Christian marriage
          </h2>
          <p className="di-body">
            From foundational theology to practical, day-to-day habits — every chapter is designed to help you and your spouse grow closer, communicate better, and experience the fullness of what God designed marriage to be.
          </p>

          <p
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--di-green)",
              margin: "32px 0 16px",
            }}
          >
            Table of Contents
          </p>

          <ol className="di-chapters">
            {[
              "God's Design for Intimacy — What the Bible Actually Says",
              "Why Intimacy Matters More Than You Were Told",
              "The Difference Between Sex and Intimacy",
              "Unpacking the Shame You Brought Into Marriage",
              "The Covenant Bed — Understanding the Sacredness of Marital Sex",
              "How to Talk to Your Spouse About What You Need",
              "Desire, Drive, and Differences — Why You Don't Always Feel the Same",
              "Emotional Intimacy as the Foundation of Physical Closeness",
              "Rekindling Connection After Conflict",
              "Practical Conversation Starters for Couples",
              "Physical Touch Beyond the Bedroom",
              "What Gets in the Way — Stress, Fatigue, and Distraction",
              "Navigating Seasons of Low Desire",
              "Intimacy After Children",
              "Intimacy After Hurt or Betrayal",
              "Healing Shame Around Your Body",
              "Understanding Your Spouse's Love Language in the Bedroom",
              "Building a Culture of Affection in Your Home",
              "Mutual Pleasure and the Art of Selfless Giving",
              "Frequency, Expectations, and Healthy Boundaries",
              "The Role of Prayer and Spiritual Connection in Physical Intimacy",
              "Making Time for Each Other — Practical Rhythms for Busy Couples",
              "Long-Term Closeness — How to Keep the Flame Alive After Years",
              "When to Seek Help — Counselling, Medical Support, and Community",
              "A Word to Husbands — What Your Wife Needs You to Understand",
              "A Word to Wives — What Your Husband Needs You to Know",
              "Reflection Questions for Couples — Going Deeper Together",
            ].map((chapter, i) => (
              <li key={i}>
                <span className="di-chapters__num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="di-chapters__title">{chapter}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHAT'S COVERED — PARTS GRID
      ══════════════════════════════════════════ */}
      <section className="di-section di-section--warm">
        <div className="di-shell">
          <p className="di-eyebrow">6 Core Areas</p>
          <h2 className="di-h2">
            Every dimension of intimacy, covered in one book
          </h2>

          <div className="di-parts">
            {[
              {
                num: "01",
                label: "Part 1",
                name: "Theology & Foundation",
                items: [
                  "God's Design",
                  "Biblical View of Sex",
                  "Covenant & Sacredness",
                  "Unpacking Shame",
                  "The Gift of Desire",
                ],
              },
              {
                num: "02",
                label: "Part 2",
                name: "Communication & Emotional Intimacy",
                items: [
                  "Honest Conversations",
                  "Emotional Foundation",
                  "Conflict & Reconnection",
                  "Love Languages",
                  "Vulnerability",
                ],
              },
              {
                num: "03",
                label: "Part 3",
                name: "Physical Closeness",
                items: [
                  "Mutual Pleasure",
                  "Touch & Affection",
                  "Differences in Drive",
                  "Expectations & Boundaries",
                  "Frequency",
                ],
              },
              {
                num: "04",
                label: "Part 4",
                name: "Navigating Difficult Seasons",
                items: [
                  "Low Desire",
                  "After Children",
                  "After Betrayal",
                  "Stress & Fatigue",
                  "Healing & Restoration",
                ],
              },
              {
                num: "05",
                label: "Part 5",
                name: "Practical Habits for Lasting Closeness",
                items: [
                  "Daily Rhythms",
                  "Making Time",
                  "Affection Culture",
                  "Long-Term Connection",
                  "Spiritual Practices",
                ],
              },
              {
                num: "06",
                label: "Part 6",
                name: "Voices to Each Spouse",
                items: [
                  "Word to Husbands",
                  "Word to Wives",
                  "Reflection Questions",
                  "Couple Conversations",
                  "Next Steps",
                ],
              },
            ].map((part) => (
              <div key={part.num} className="di-part">
                <div className="di-part__header">
                  <div className="di-part__num">{part.num}</div>
                  <div>
                    <p className="di-part__label">{part.label}</p>
                    <p className="di-part__name">{part.name}</p>
                  </div>
                </div>
                <div className="di-part__items">
                  {part.items.map((item) => (
                    <span key={item} className="di-part__item">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          VALUES / WHY THIS BOOK IS DIFFERENT
      ══════════════════════════════════════════ */}
      <section className="di-section">
        <div className="di-shell">
          <p className="di-eyebrow">Why This Book</p>
          <h2 className="di-h2 di-h2--center">
            Written to honour God and serve your marriage
          </h2>
          <p
            className="di-body"
            style={{ textAlign: "center", maxWidth: "520px", margin: "0 auto 32px" }}
          >
            Most books on this topic are either too clinical, too explicit, or have no faith foundation at all. <em>Divine Intimacy</em> is different.
          </p>

          <div className="di-values">
            {[
              {
                icon: "✝️",
                title: "Scripture-Grounded",
                desc: "Every chapter is anchored in a biblical view of marriage, the body, and physical love. Not secular pop psychology with Bible verses added later.",
              },
              {
                icon: "🤝",
                title: "Honest & Practical",
                desc: "Real questions, real answers. No euphemisms that obscure meaning, and no graphic content that crosses into inappropriate territory.",
              },
              {
                icon: "🔒",
                title: "Private & Discreet",
                desc: "A digital ebook you can read privately, at your own pace, in your own space — without embarrassment or judgment.",
              },
              {
                icon: "👫",
                title: "For Both Spouses",
                desc: "Written to be read individually and together. Includes dedicated chapters speaking directly to husbands and to wives.",
              },
              {
                icon: "💬",
                title: "Opens Conversation",
                desc: "Reflection questions at the end of each chapter are designed to help couples talk about things they may never have discussed before.",
              },
              {
                icon: "🌱",
                title: "For Every Season",
                desc: "Whether you are engaged, newly married, or years into your covenant — this book meets you exactly where you are.",
              },
            ].map((v) => (
              <div key={v.title} className="di-value">
                <div className="di-value__icon">{v.icon}</div>
                <p className="di-value__title">{v.title}</p>
                <p className="di-value__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHO IT'S FOR
      ══════════════════════════════════════════ */}
      <section className="di-section di-section--pale">
        <div className="di-shell">
          <p className="di-eyebrow">Is This For You?</p>
          <h2 className="di-h2">This book is for you if…</h2>
          <div className="di-who-grid">
            <div className="di-who-card di-who-card--yes">
              <p className="di-who-card__label">This is for you</p>
              <ul>
                <li>You are married or preparing for marriage</li>
                <li>You want a faith-based, practical guide to intimacy</li>
                <li>You feel disconnected and want to rebuild closeness</li>
                <li>You carry shame or confusion about sex from your upbringing</li>
                <li>You want to have better conversations with your spouse</li>
                <li>You want a richer, more satisfying intimate life</li>
              </ul>
            </div>
            <div className="di-who-card di-who-card--no">
              <p className="di-who-card__label">This is not for you</p>
              <ul>
                <li>You are looking for explicit or adult content</li>
                <li>You are not in a committed marriage relationship</li>
                <li>You want a purely clinical or secular resource</li>
                <li>You are not open to a faith perspective on intimacy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHAT'S INCLUDED
      ══════════════════════════════════════════ */}
      <section className="di-section">
        <div className="di-shell">
          <p className="di-eyebrow">What You Get</p>
          <h2 className="di-h2">Everything included in your purchase</h2>

          <div className="di-includes">
            {[
              {
                icon: "📖",
                tag: "Main Book",
                name: "Divine Intimacy — Complete Digital Ebook",
                desc: "The full 27-chapter guide to physical, emotional, and spiritual intimacy in Christian marriage. Instant PDF access upon purchase.",
              },
              {
                icon: "💬",
                tag: "Conversation Starters",
                name: "Couple Reflection Questions",
                desc: "End-of-chapter questions designed to open honest, loving conversations between you and your spouse. Perfect for reading together.",
              },
              {
                icon: "✉️",
                tag: "Personal Chapters",
                name: "Direct Words to Husbands and Wives",
                desc: "Dedicated chapters written specifically to each spouse — offering perspective, challenge, and encouragement from their partner's point of view.",
              },
              {
                icon: "🗺️",
                tag: "Practical Guide",
                name: "Intimacy Habits — A Practical Action Plan",
                desc: "A simple, actionable framework for building daily and weekly rhythms of closeness, affection, and connection into your marriage.",
              },
            ].map((item) => (
              <div key={item.name} className="di-include">
                <div className="di-include__icon">{item.icon}</div>
                <div>
                  <p className="di-include__tag">{item.tag}</p>
                  <p className="di-include__name">{item.name}</p>
                  <p className="di-include__desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FINAL OFFER BOX
      ══════════════════════════════════════════ */}
      <div className="di-offer">
        <div className="di-shell">
          <div className="di-offer__grid">
            <div className="di-offer__book">
              <img
                src="/divine-intimacy-cover.png"
                alt="Divine Intimacy"
                width="600"
                height="840"
                loading="lazy"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
            <div>
              <p className="di-eyebrow">Get the Book</p>
              <h2 className="di-h2">
                <em>Divine Intimacy</em>
              </h2>
              <p
                style={{
                  fontStyle: "italic",
                  color: "var(--di-fg-mid)",
                  fontSize: "0.97rem",
                  marginBottom: "4px",
                  lineHeight: "1.55",
                }}
              >
                A Christian guide to physical and emotional closeness in marriage.
              </p>
              <ul className="di-offer__outcomes">
                {[
                  "Understand what God designed physical intimacy to be",
                  "Release the shame and silence that holds couples back",
                  "Have the conversations your marriage has been waiting for",
                  "Rebuild and deepen emotional and physical connection",
                  "Develop practical habits of closeness that last",
                  "Experience the full intimacy God designed for your covenant",
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="di-price-block">
                <div className="di-price-row">
                  <span className="di-price-row__label">Regular Price:</span>
                  <span className="di-price-row__crossed">
                    &#8358;{PRICE_WAS}
                  </span>
                </div>
                <div className="di-price-row">
                  <span className="di-price-row__label">Today Only:</span>
                  <span className="di-price-row__today">
                    &#8358;{PRICE_NOW}
                  </span>
                </div>
              </div>

              <CtaButton label="Get Instant Access —" />
              <p className="di-trust">
                Instant Digital Access &nbsp;·&nbsp; Secure Checkout via Selar &nbsp;·&nbsp; Pay Once, Keep Forever
              </p>
              <p className="di-disclaimer">
                This is a digital product. No physical book will be shipped. Access is delivered immediately after payment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          CTA BAND
      ══════════════════════════════════════════ */}
      <div className="di-cta-band">
        <div className="di-cta-band__inner">
          <h2 className="di-cta-band__heading">
            Your marriage deserves more than silence.<br />
            <em>Start the conversation today.</em>
          </h2>
          <p className="di-cta-band__sub">
            Instant digital access. Private and discreet. Read together or separately.
          </p>
          <div>
            <a className="di-cta-band__btn" href={checkoutUrl}>
              Get Instant Access &nbsp;·&nbsp;{" "}
              <s style={{ opacity: 0.55, fontSize: "0.82rem" }}>
                &#8358;{PRICE_WAS}
              </s>
              &nbsp; &#8358;{PRICE_NOW}
            </a>
            <p className="di-cta-band__trust" style={{ marginTop: "10px" }}>
              Instant Digital Access &nbsp;·&nbsp; Secure Checkout &nbsp;·&nbsp; Private &amp; Discreet
            </p>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════ */}
      <section className="di-faq">
        <div className="di-shell">
          <h2 className="di-faq__h2">Frequently Asked Questions</h2>
          <FaqAccordion />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CLOSING
      ══════════════════════════════════════════ */}
      <div className="di-close">
        <div
          className="di-reading"
          style={{ textAlign: "center" }}
        >
          <p className="di-close__pre">
            A word before you go
          </p>
          <h2 className="di-close__h2">
            Intimacy is not a luxury. It is part of what God designed your marriage to be.
          </h2>
          <p className="di-close__body">
            The silence between spouses is rarely what either of them wants. It builds slowly — through unanswered questions, unspoken expectations, and a culture that never gave Christian couples the right language or the right permission to talk about this part of their marriage.
          </p>
          <p className="di-close__body">
            This book does not promise to fix everything. But it gives you a starting point — a shared language, a biblical foundation, and a set of honest conversations that can change the temperature of your marriage for the better.
          </p>
          <p
            className="di-close__body"
            style={{ marginBottom: "32px" }}
          >
            You are not alone in what you are navigating. And you deserve to build the intimate marriage God had in mind when He brought you together.
          </p>

          <CtaButton label="Get Divine Intimacy Today —" />
          <p className="di-trust" style={{ marginTop: "10px" }}>
            Instant Digital Access &nbsp;·&nbsp; Secure Checkout &nbsp;·&nbsp; Private &amp; Discreet
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════ */}
      <footer className="di-footer">
        <div className="di-shell">
          <p className="di-footer__text">
            &copy; {new Date().getFullYear()} Divine Intimacy. All rights reserved.
            <br />
            This is an educational digital product for married Christian couples. It is not a substitute for professional counselling, medical advice, or pastoral care.
            <br />
            <a href="/">afterido.com</a>
          </p>
        </div>
      </footer>

    </div>
  );
}
