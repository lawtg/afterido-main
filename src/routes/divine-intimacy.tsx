import { createFileRoute } from "@tanstack/react-router";
import divineIntimatyCss from "../styles-divine-intimacy.css?url";

const checkoutUrl = "https://selar.com/divine-intimacy"; // ← replace with actual Selar URL
const PRICE_NOW = "₦3,500";
const PRICE_WAS = "₦12,000";

/* ─────────────────────────────────────────────────────────
   ROUTE
───────────────────────────────────────────────────────── */
export const Route = createFileRoute("/divine-intimacy")({
  head: () => ({
    meta: [
      {
        title:
          "Divine Intimacy — How Christian Couples Can Have Truly Great Sex in Marriage, Without Porn, Without Guilt",
      },
      {
        name: "description",
        content:
          "A practical, faith-grounded guide that shows married Christian couples how to build a satisfying intimate life — step by step, with their faith intact.",
      },
      { property: "og:title", content: "Divine Intimacy" },
      {
        property: "og:description",
        content:
          "Great sex in marriage is a learnable skill. And you don't need porn to learn it.",
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
            "How Christian Couples Can Learn To Have Truly Great Sex In Marriage, Without Watching Porn, Without Guilt, And Without Compromising Your Faith",
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
   REUSABLE CTA BUTTON
───────────────────────────────────────────────────────── */
function Cta({ label }: { label: string }) {
  return (
    <a className="di-cta" href={checkoutUrl}>
      {label} <span className="di-cta__arrow" aria-hidden="true">→</span>
    </a>
  );
}

/* ─────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────── */
function DivineIntimacy() {
  return (
    <div className="di-page">

      {/* ══════════════════════════════════════════
          ANNOUNCEMENT BAR
      ══════════════════════════════════════════ */}
      <div className="di-bar" role="banner">
        <span className="di-bar__dot" aria-hidden="true" />
        <span className="di-bar__text">
          Private, discreet delivery. Limited copies available at this price.
        </span>
      </div>

      {/* ══════════════════════════════════════════
          HERO — centred, oversized headline
      ══════════════════════════════════════════ */}
      <header className="di-hero">

        {/* Pill eyebrow */}
        <p className="di-hero__pill">For Christian Couples</p>

        {/* Book title as small eyebrow above main headline */}
        <p style={{
          fontFamily: "var(--di-serif)",
          fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
          fontWeight: 700,
          fontStyle: "italic",
          color: "var(--di-green)",
          margin: "0 auto 12px",
          textAlign: "center",
          letterSpacing: "0.01em",
        }}>
          Divine Intimacy
        </p>

        {/* Main headline — ends at "Marriage," */}
        <h1 className="di-hero__h1">
          How Christian Couples Can Learn To Have{" "}
          <span className="w-green">Truly Great Sex</span>{" "}
          In Marriage,
        </h1>

        {/* Subtitle — the rest of the headline copy, smaller weight */}
        <p className="di-hero__sub">
          Without Watching <span style={{ color: "var(--di-orange)", fontWeight: 700 }}>Porn</span>, Without Guilt, And Without Compromising Your Faith
        </p>

        {/* CTA */}
        <Cta label="GET MY COPY NOW" />

        {/* Trust line */}
        <p className="di-trust">
          Private, discreet delivery. Only a few copies left at this price!
        </p>

      </header>

      <hr className="di-rule" />

      {/* ══════════════════════════════════════════
          OPEN LETTER
      ══════════════════════════════════════════ */}
      <section className="di-letter">
        <div className="di-reading">

          <p style={{
            fontFamily: "var(--di-sans)",
            fontSize: "1.05rem",
            fontWeight: 700,
            color: "var(--di-fg)",
            marginBottom: "6px",
          }}>
            Dear Friend,
          </p>
          <p className="di-letter__date">[Date]</p>

          <p>Let me ask you a question you may never have said out loud.</p>

          <p>Where were you supposed to learn how to have a great sex life in marriage?</p>

          <p>
            Not from church. Church said "wait," and then went silent.<br />
            Not from your parents. That conversation never happened.<br />
            Not from friends. Half of what they say is wrong, and the other half is boasting.
          </p>

          <p>So where?</p>

          <p>
            For too many sincere Christian couples, the answer ends up being the internet
            or porn. Then they carry guilt, unrealistic expectations, and a quiet feeling
            that something is off.
          </p>

          <p>If that is not the path you want, this letter is for you.</p>

          <p>
            My name is [Author Name]. [One or two lines of credibility: e.g. "I am a
            husband and Christian counsellor who has helped couples for X years..." Use
            only what is true.]
          </p>

          <p>Here is what I have seen.</p>

          <p>
            Most couples who struggle in the bedroom are not broken, unspiritual, or
            incompatible. They are <strong>uninformed.</strong>
          </p>

          <p>
            Nobody taught them how their bodies work. Nobody taught them how to
            communicate. Nobody taught them how to move from awkward to confident, or
            from routine to excitement.
          </p>

          <p>
            God created intimacy in marriage to be enjoyed. But enjoying it is also a{" "}
            <strong>skill</strong>, and skills can be learned.
          </p>

          <p>You do not need porn to learn it.</p>

          <p>That is why I wrote this book.</p>

        </div>
      </section>

      <hr className="di-rule" />

      {/* ══════════════════════════════════════════
          WHAT'S INSIDE
      ══════════════════════════════════════════ */}
      <section className="di-section">
        <div className="di-reading">

          <p className="di-eyebrow">What's Inside</p>
          <h2 className="di-h2">
            <em>Divine Intimacy</em> is a practical, honest, tasteful guide that shows
            you and your spouse how to build a satisfying intimate life, step by step,
            with your faith intact.
          </h2>

          <p className="di-body">
            No crude language. No shame. Just clear, helpful guidance that treats you
            like the grown-up married couple you are.
          </p>

          <p className="di-body" style={{ marginBottom: "24px" }}>
            Here are some of the things you will discover:
          </p>

          <ul className="di-bullets">
            {[
              {
                text: "Why you never need porn to learn how to please your spouse, and what to do instead",
                page: "Page [#]",
              },
              {
                text: "How to talk about what you like and don't like without hurt feelings or awkward silence",
                page: "Page [#]",
              },
              {
                text: "Why many couples have a mismatch in desire, and how to close the gap so nobody feels rejected or pressured",
                page: "Page [#]",
              },
              {
                text: "How to understand what your spouse's body and mind need to feel ready, relaxed, and fully engaged",
                page: "Page [#]",
              },
              {
                text: "How to move past the nervousness, the \"am I doing this right?\" thoughts, and the pressure to perform",
                page: "Page [#]",
              },
              {
                text: "Simple ways to keep things exciting after years of marriage, children, and routine",
                page: "Page [#]",
              },
              {
                text: "How to switch off the voice that says \"this is wrong\" when God has already said it is a gift",
                page: "Page [#]",
              },
              {
                text: "How to build the emotional closeness that makes physical intimacy better for both of you",
                page: "Page [#]",
              },
            ].map((item, i) => (
              <li key={i}>
                <span className="di-bullets__check" aria-hidden="true">✓</span>
                <span style={{ flex: 1 }}>{item.text}</span>
                <span className="di-bullets__page">({item.page})</span>
              </li>
            ))}
          </ul>

          {/* Iceberg teaser */}
          <p className="di-iceberg">★ This Is Just A Tip Of The Iceberg ★</p>

          {/* Mid-page CTA */}
          <div className="di-section-cta" style={{ paddingBottom: 0 }}>
            <Cta label="YES, I WANT THIS FOR MY MARRIAGE" />
          </div>

        </div>
      </section>

      <hr className="di-rule" />

      {/* ══════════════════════════════════════════
          WHO IS THIS BOOK FOR
      ══════════════════════════════════════════ */}
      <section className="di-section di-section--pale">
        <div className="di-reading">

          <p className="di-eyebrow">Who Is This Book For?</p>
          <h2 className="di-h2">This book is for you if…</h2>

          <div className="di-who">
            {[
              {
                bold: "Married Christian couples",
                rest: " who want a better, more satisfying sex life and want to learn it the right way",
              },
              {
                bold: "Couples who feel awkward or lost",
                rest: " and don't know where to start",
              },
              {
                bold: "Spouses who feel unsatisfied",
                rest: " and want to improve things without a fight",
              },
              {
                bold: "Engaged couples",
                rest: " who want to start marriage informed and confident",
              },
              {
                bold: "Anyone who wants to leave porn behind",
                rest: " and learn what really builds intimacy",
              },
            ].map((item, i) => (
              <div key={i} className="di-who__item">
                <span className="di-who__bullet" aria-hidden="true">→</span>
                <span>
                  <strong>{item.bold}</strong>{item.rest}
                </span>
              </div>
            ))}
          </div>

          <p className="di-body" style={{ marginTop: "28px" }}>
            If you believe sex in marriage should be both holy and enjoyable, this book
            is for you.
          </p>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════ */}
      <section className="di-section">
        <div className="di-reading">

          <p className="di-eyebrow">What Readers Are Saying</p>
          <h2 className="di-h2">Real couples. Real results.</h2>

          <div className="di-testimonials">
            {[
              {
                stars: "★★★★★",
                text: "[Insert real, anonymised testimonial. Best ones mention relief, confidence, or \"we finally talk about it\", so readers see the result without anything graphic.]",
                author: "— [First Name or Initials], married [X] years",
              },
              {
                stars: "★★★★★",
                text: "[Insert real, anonymised testimonial. First names or initials are fine.]",
                author: "— [First Name or Initials]",
              },
              {
                stars: "★★★★★",
                text: "[Insert real, anonymised testimonial.]",
                author: "— [First Name or Initials]",
              },
            ].map((t, i) => (
              <div key={i} className="di-testi">
                <p className="di-testi__stars">{t.stars}</p>
                <p className="di-testi__text">"{t.text}"</p>
                <p className="di-testi__author">{t.author}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <hr className="di-rule" />

      {/* ══════════════════════════════════════════
          GUARANTEE
      ══════════════════════════════════════════ */}
      <section className="di-section di-section--warm">
        <div className="di-reading">

          <p className="di-eyebrow">The Guarantee</p>
          <h2 className="di-h2">Now Let's Talk About The Guarantee</h2>

          <div className="di-guarantee">
            <div className="di-guarantee__badge" aria-hidden="true">🛡️</div>
            <h3 className="di-guarantee__h3">
              If You Buy This Book, Read It With Your Spouse Or On Your Own, And You
              Don't Believe It Can Help You Build A Better, More Satisfying Marriage
              Bed, I Will Refund Your Money. And You Can Keep The Book.
            </h3>
            <p className="di-guarantee__body">Yes, you read that correctly.</p>
            <ul className="di-guarantee__list">
              <li>No need to explain...</li>
              <li>No need to shalaye...</li>
              <li>I will not argue with you...</li>
              <li>I will just return your money.</li>
            </ul>
          </div>

          <p className="di-body" style={{ marginTop: "28px" }}>
            And no one needs to know you asked.
          </p>

          <p className="di-body">Why am I so confident?</p>

          <p className="di-body">
            Because I am not giving you theory. I am giving you practical guidance you
            can start using <strong>tonight</strong>.
          </p>

          <p className="di-body">
            The only way you lose is by doing nothing. And if you do nothing, you will
            keep guessing, keep avoiding the subject, and keep wondering if this is all
            there is.
          </p>

          <p className="di-body">
            It is not. And it does not have to stay this way.
          </p>

          <div className="di-section-cta">
            <Cta label="SEND ME MY COPY NOW!" />
            <p className="di-trust" style={{ marginTop: "12px" }}>
              Price: {PRICE_NOW} only. Discreet delivery. Limited stock!
            </p>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA BAND
      ══════════════════════════════════════════ */}
      <div className="di-cta-band">
        <div className="di-narrow">
          <h2 className="di-cta-band__h2">
            Your marriage deserves great intimacy.<br />
            And you deserve to learn it the right way.
          </h2>
          <p className="di-cta-band__sub">
            Practical. Faith-grounded. Private. Start tonight.
          </p>
          <Cta label="GET MY COPY NOW" />
          <p className="di-cta-band__price">
            <s>{PRICE_WAS}</s>
            <strong>{PRICE_NOW}</strong>
          </p>
          <p className="di-cta-band__trust">
            Instant Digital Access · Secure Checkout · Private &amp; Discreet
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          P.S.
      ══════════════════════════════════════════ */}
      <div className="di-ps">
        <div className="di-reading">
          <p>
            <strong>P.S.</strong> Think about what you spend on weddings, anniversaries,
            and gifts. This book costs less than [relatable comparison, e.g. "a dinner
            date"], and it could improve the most private part of your marriage for
            decades. Grab your copy now and discover what a great, God-honouring sex
            life can feel like.
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
            This is an educational digital product for married Christian couples. It is
            not a substitute for professional counselling, medical advice, or pastoral
            care.
            <br />
            <a href="/">afterido.com</a>
          </p>
        </div>
      </footer>

    </div>
  );
}
