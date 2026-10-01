import { createFileRoute } from "@tanstack/react-router";
import becomeHerCss from "../styles-becomeher.css?url";

const checkoutUrl = "#"; // TODO: replace with actual checkout URL

export const Route = createFileRoute("/become-her")({
  head: () => ({
    meta: [
      { title: "Become The Woman He Can't Afford To Lose — Joshua Lawrence" },
      {
        name: "description",
        content:
          "He can leave any woman. He just can't leave THIS one. Discover the uncomfortable truths about men, value and love that nobody told you.",
      },
      { property: "og:title", content: "Become The Woman He Can't Afford To Lose" },
      { property: "og:description", content: "Stop being replaceable. Not by playing games. But by becoming a woman whose value is so clear, so steady and so real that losing her costs him too much." },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/become-her" },
      { rel: "stylesheet", href: becomeHerCss },
    ],
  }),
  component: BecomeHer,
});

function Cta({ label }: { label: string }) {
  return (
    <a className="bh-btn" href={checkoutUrl}>
      {label}
    </a>
  );
}

const discovers = [
  { text: 'The "Free Service" mistake that makes a man comfortable and unserious — and how most women make it in the first 3 months.' },
  { text: "What men notice about a woman in the first 5 minutes that has nothing to do with her looks." },
  { text: "How to say NO without a fight — and why he respects you more after you do." },
  { text: "The silent habit that makes a man start comparing you to other women — and how to stop it today." },
  { text: 'Why "I\'ll be patient and wait for him to change" is the most expensive decision you can make.' },
  { text: "How to know if he is worth keeping before you waste another year on a man who will never choose you." },
  { text: "What to do when he goes cold — without begging, chasing or embarrassing yourself." },
];

function BecomeHer() {
  return (
    <div className="bh-page">

      {/* ── HERO ── */}
      <header className="bh-hero">
        <div className="bh-shell">
          <p className="bh-hero__eyebrow">
            For the woman who is tired of loving hard and still feeling replaceable
          </p>
          <h1 className="bh-hero__h1">
            He Can Leave Any Woman.<br />
            He Just Can't Leave <span>THIS</span> One.<br />
            Here's How To Become Her…
          </h1>
          <p className="bh-hero__sub">
            Joshua Lawrence Reveals The Uncomfortable Truths About Men, Value And Love That Nobody Told You — And Why Doing "More" For Him Is Exactly Why He Is Pulling Away
          </p>
          <div className="bh-hero__cta">
            <Cta label="Yes, I Want My Copy Now" />
            <p className="bh-urgency-note" style={{ marginTop: "12px" }}>
              Hurry! Limited copies left at this price
            </p>
          </div>
        </div>
      </header>

      {/* ── LETTER ── */}
      <section className="bh-section bh-section--white">
        <div className="bh-reading">
          <p style={{ fontWeight: 700, fontSize: "1.05rem", marginBottom: "6px", color: "#111", fontFamily: "var(--bh-sans)" }}>Dear Friend,</p>
          <p style={{ fontSize: "0.95rem", color: "#888", marginBottom: "28px", fontFamily: "var(--bh-sans)" }}>1st October 2026</p>

          <div className="bh-letter">
            <p>Let me ask you something, and be honest.</p>
            <p>Have you ever cooked, cleaned, listened, supported, forgiven and "understood"… and still watched him treat you like an option?</p>
            <p>Have you ever wondered why the woman who does the <strong>LEAST</strong> gets the ring, the car and the "my queen" posts, while you, the good girl, get "I'm just not ready"?</p>
            <p>It is not because you are not good enough.</p>
            <p><strong>It is because nobody ever taught you the one thing that makes a man unable to walk away.</strong></p>
          </div>
        </div>
      </section>

      {/* ── AUTHOR INTRO — Dark ── */}
      <section className="bh-section bh-section--dark">
        <div className="bh-reading">
          <span className="bh-eyebrow bh-eyebrow--light">About the author</span>
          <h2 className="bh-h2 bh-h2--white">My name is Joshua Lawrence.</h2>
          <p className="bh-body bh-body--light">
            Founder of Breakthrough Relationship — where I help singles and couples build healthy, fulfilling relationships and strong marriages.
          </p>
          <p className="bh-body bh-body--light">
            I wrote <em style={{ color: "#fff" }}>Become The Woman He Can't Afford To Lose</em> for one reason. Too many intelligent, beautiful, hardworking women are giving love their all and getting crumbs back.
          </p>
          <p className="bh-body bh-body--light">
            And the painful part? You are not being rejected for your flaws. You are being taken for granted because of your strengths — used the wrong way.
          </p>

          <div style={{
            background: "rgba(196,96,122,0.12)",
            border: "1px solid rgba(196,96,122,0.3)",
            borderLeft: "4px solid var(--bh-rose)",
            borderRadius: "0 6px 6px 0",
            padding: "22px 24px",
            marginTop: "28px",
          }}>
            <p style={{ margin: 0, color: "#fff", fontSize: "1.1rem", fontFamily: "var(--bh-serif)", fontStyle: "normal", lineHeight: 1.55, letterSpacing: "0.01em" }}>
              A man does not value what is easy to replace.
            </p>
            <p style={{ margin: "12px 0 0", color: "#C0A0A8", fontSize: "0.97rem", lineHeight: 1.72, fontFamily: "var(--bh-sans)" }}>
              This book shows you how to stop being replaceable. Not by playing games. Not by pretending. Not by losing yourself. But by becoming a woman whose value is so clear, so steady and so real that losing her costs him too much.
            </p>
          </div>
        </div>
      </section>

      {/* ── BOOK + DISCOVERS ── */}
      <section className="bh-section bh-section--white">
        <div className="bh-shell" style={{ display: "grid", gap: "56px", alignItems: "start" }}>

          {/* Book placeholder */}
          <div style={{ maxWidth: "320px", margin: "0 auto", width: "100%" }}>
            <div className="bh-book-placeholder">
              <p className="bh-book-placeholder__title">
                Become The Woman He Can't Afford To Lose
              </p>
              <p className="bh-book-placeholder__sub">Joshua Lawrence</p>
            </div>
          </div>

          {/* Discovers */}
          <div>
            <span className="bh-eyebrow">Inside, you will discover</span>
            <h2 className="bh-h2">What You Will Discover Inside</h2>
            <div className="bh-discovers">
              {discovers.map((d, i) => (
                <div key={i} className="bh-discover">
                  <p className="bh-discover__text">{d.text}</p>
                </div>
              ))}
            </div>

            <p style={{
              marginTop: "28px",
              fontFamily: "var(--bh-serif)",
              fontSize: "1.2rem",
              fontWeight: 400,
              letterSpacing: "0.02em",
              color: "var(--bh-burgundy)",
              borderTop: "1px solid var(--bh-border-lt)",
              paddingTop: "20px",
            }}>
              This Is Just A Tip Of The Iceberg
            </p>

            <div style={{ marginTop: "20px" }}>
              <Cta label="Rush Me My Copy" />
            </div>
          </div>

        </div>
      </section>

      {/* ── GUARANTEE — Blush ── */}
      <section className="bh-section bh-section--blush">
        <div className="bh-reading" style={{ textAlign: "center" }}>
          <span className="bh-eyebrow">100% risk-free</span>
          <h2 className="bh-h2">The Guarantee</h2>

          <div className="bh-guarantee">
            <p className="bh-guarantee__title">
              If You Read This Book And Are Not 100% Convinced It Will Change How You Love, How You Are Treated And How You See Yourself — I Will Refund Your Money And Ask You To Keep The Book.
            </p>
            <p className="bh-guarantee__body">Yes, you read that correctly.</p>
            <p className="bh-guarantee__body">No long explanation. No stories. No wahala.</p>
            <p className="bh-guarantee__body">Just send a message and I will return your money.</p>
            <p className="bh-guarantee__body">
              You risk nothing. But think about what you are already risking by doing nothing: another year of giving your best to someone who treats you like a backup plan.
            </p>
            <p className="bh-guarantee__body" style={{ fontWeight: 700, color: "var(--bh-burgundy)", marginBottom: 0 }}>
              I am so sure this book will open your eyes that I am willing to carry all the risk.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA BAND — Burgundy ── */}
      <div className="bh-cta-band">
        <div className="bh-cta-band__inner">
          <p className="bh-cta-band__text">
            Will you still be having this same conversation with yourself next year?
          </p>
          <a className="bh-cta-band__btn" href={checkoutUrl}>
            Send Me My Copy Now
          </a>
        </div>
      </div>

      {/* ── CLOSE — Black ── */}
      <div className="bh-close">
        <div className="bh-reading">
          <p className="bh-close__main">
            A man will always treat you according to the <span>value you show him.</span>
          </p>
          <p className="bh-close__sub">
            The earlier you learn this, the less heartbreak you will go through.
          </p>
          <div style={{ maxWidth: "420px", margin: "0 auto 28px" }}>
            <Cta label="Get Your Copy Now — Become Her Today" />
          </div>
          <p style={{
            fontFamily: "var(--bh-sans)",
            fontSize: "0.95rem",
            color: "#888",
            fontStyle: "italic",
            lineHeight: 1.7,
          }}>
            To the woman he can't afford to lose,<br />
            <strong style={{ color: "#C0C0C0", fontStyle: "normal" }}>Joshua Lawrence</strong>
          </p>
          <div style={{
            marginTop: "28px",
            padding: "20px 24px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "6px",
            maxWidth: "600px",
            margin: "28px auto 0",
          }}>
            <p style={{
              margin: 0,
              fontFamily: "var(--bh-sans)",
              fontSize: "0.93rem",
              color: "#888",
              lineHeight: 1.75,
            }}>
              <strong style={{ color: "#C0C0C0" }}>P.S.</strong> A man will always treat you according to the value you show him. The earlier you learn this, the less heartbreak you will go through. Get your copy now and start becoming her today.
            </p>
          </div>
        </div>
      </div>

      {/* ── DISCLAIMER ── */}
      <div className="bh-disclaimer">
        <p>
          This book is for educational purposes only. Results vary depending on individual circumstances, effort and application. No specific relationship outcome is guaranteed.
        </p>
      </div>

    </div>
  );
}
