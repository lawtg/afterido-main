import { createFileRoute } from "@tanstack/react-router";

const checkoutUrl = "https://selar.com/s381u81f31";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "After I Do — The Guide to Sex & Intimacy in Marriage" },
      {
        name: "description",
        content:
          "Nobody taught you how to talk about sex in marriage. This book does. A practical guide for engaged couples and newlyweds.",
      },
      { property: "og:title", content: "After I Do — The Guide to Sex & Intimacy in Marriage" },
      {
        property: "og:description",
        content:
          "You planned everything about your wedding. But did you prepare for what comes after? A practical guide to sex, intimacy and communication in marriage.",
      },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Book",
          name: "After I Do",
          description:
            "The Complete Guide to Sex, Intimacy & Building a Healthy Sexual Relationship in Marriage",
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
  component: SalesPage,
});

function Cta({ label, full }: { label: string; full?: boolean }) {
  return (
    <a
      className={`purchase-button${full ? " purchase-button--full" : ""}`}
      href={checkoutUrl}
    >
      {label} <span aria-hidden="true">→</span>
    </a>
  );
}

function Rule() {
  return (
    <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: "0" }} />
  );
}

function SalesPage() {
  return (
    <main>

      {/* ═══════════════════════════════════
          HERO — Hook. Problem. Stakes.
          ═══════════════════════════════════ */}
      <header className="ed-hero" style={{ textAlign: "left", padding: "72px 0 64px" }}>
        <div className="reading-col">
          <span className="label">For engaged couples &amp; newlyweds</span>

          <h1 style={{ marginBottom: "28px" }}>
            You got married.<br />
            But nobody taught you<br />
            how to talk about sex.
          </h1>

          <p style={{ fontSize: "1.15rem", lineHeight: 1.7, marginBottom: "16px" }}>
            Not your parents. Not your friends. Not the pastor or counsellor.
          </p>
          <p style={{ fontSize: "1.15rem", lineHeight: 1.7, marginBottom: "16px" }}>
            And now you're supposed to just… figure it out together.
          </p>
          <p style={{ fontSize: "1.15rem", lineHeight: 1.7, marginBottom: "40px" }}>
            <strong>Most couples do. But "figuring it out" takes longer than it should — and costs more than it needs to.</strong>
          </p>

          <Cta label="Get After I Do — ₦3,700" />
          <p style={{ marginTop: "12px", fontSize: "0.82rem", color: "var(--muted-foreground)" }}>
            Instant digital access · Secure checkout via Selar
          </p>
        </div>
      </header>

      <Rule />

      {/* ═══════════════════════════════════
          AGITATION — Make the problem real
          ═══════════════════════════════════ */}
      <section className="ed-section">
        <div className="reading-col">
          <span className="label">Here's what actually happens</span>
          <h2>You spend months planning the wedding. Nobody spends a day preparing for what comes after it.</h2>

          <p>You choose the venue. The clothes. The food. The music. The honeymoon. You have detailed conversations about the guest list and the budget.</p>

          <p>And then the wedding ends.</p>

          <p>The guests go home. The music stops. The dress comes off.</p>

          <p>And for the first time, it's just the two of you — alone, exhausted, excited, and nervous — trying to figure out one of the most intimate parts of your marriage with no preparation, no roadmap, and no one to ask.</p>

          <p><strong>That's the moment most couples are completely unprepared for.</strong></p>
        </div>
      </section>

      <Rule />

      {/* ═══════════════════════════════════
          TWIST — Pre-empt the objection
          ═══════════════════════════════════ */}
      <section className="ed-section ed-section--shaded">
        <div className="reading-col">
          <span className="label">The real issue</span>
          <h2>"We'll figure it out" is not a plan.</h2>

          <p>You probably will figure it out. Eventually.</p>

          <p>But here's what "figuring it out" actually looks like for most couples:</p>

          <div className="assumption-block">
            <p>Weeks of awkward silence because neither person knows how to start the conversation.</p>
            <p>Mismatched expectations that nobody mentioned before the wedding.</p>
            <p>One person wanting more. The other needing more time. Neither saying anything.</p>
            <p>Small frustrations that build quietly into bigger ones.</p>
          </div>

          <p>None of this means you have a bad marriage. It means you're a normal couple who was never given the right tools.</p>

          <p><strong>The question isn't whether you'll face these moments. You will. The question is how long they'll go unaddressed before one of you finally finds the words.</strong></p>
        </div>
      </section>

      {/* ═══════════════════════════════════
          REFLECTION — Let it land
          ═══════════════════════════════════ */}
      <div className="reflection">
        <div className="reading-col">
          <span className="reflection__pre">Think about this</span>
          <p className="reflection__question">
            You can love each other deeply and still have no idea how to talk about what you both actually need.
          </p>
        </div>
      </div>

      {/* ═══════════════════════════════════
          CREDIBILITY — Why this is hard
          ═══════════════════════════════════ */}
      <section className="ed-section">
        <div className="reading-col">
          <span className="label">Why this is hard for everyone</span>
          <h2>Most people enter marriage having never had an honest conversation about sex.</h2>

          <p>Not because they're broken. Because nobody ever modelled it for them.</p>

          <p>Your parents didn't talk about it. Your church probably didn't either — at least not practically. Your friends gave you advice shaped by their own unresolved assumptions.</p>

          <p>So you arrive at marriage carrying a set of expectations you've never examined, hoping your spouse somehow shares them.</p>

          <p>Sometimes they do. Often, they don't.</p>

          <p>One person thinks sex will be frequent and straightforward. The other needs more emotional connection first. One is nervous and doesn't know how to say so. The other interprets that silence as rejection.</p>

          <p><strong>Neither person is wrong. They just never had the conversation.</strong></p>
        </div>
      </section>

      <Rule />

      {/* ═══════════════════════════════════
          SOLUTION BRIDGE
          ═══════════════════════════════════ */}
      <div
        style={{
          padding: "72px 20px",
          textAlign: "center",
          background: "var(--secondary)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="reading-col" style={{ margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
              fontStyle: "italic",
              lineHeight: 1.4,
              color: "var(--foreground)",
              margin: "0 0 12px",
            }}
          >
            "The couples who navigate intimacy well aren't lucky. They learned how to talk about it."
          </p>
          <p style={{ color: "var(--muted-foreground)", fontSize: "0.9rem", margin: 0 }}>
            That's a learnable skill. And this book teaches it.
          </p>
        </div>
      </div>

      {/* ═══════════════════════════════════
          INTRODUCE THE BOOK
          ═══════════════════════════════════ */}
      <section className="book-intro">
        <div className="reading-col book-intro__transition">
          <span className="label">The solution</span>
          <h2>Introducing <em>After "I Do"</em></h2>
          <p>
            A practical guide to sex, intimacy and communication in marriage —
            written specifically for couples who want to get this right from the beginning.
          </p>
        </div>

        <div className="page-shell book-intro__grid">
          <figure className="book-intro__cover">
            <img
              src="/mockup cover.png"
              alt="After I Do — The Complete Guide to Sex, Intimacy and Building a Healthy Sexual Relationship in Marriage"
              width="600"
              height="800"
              loading="lazy"
            />
          </figure>

          <div className="book-intro__copy">
            <span className="label">After "I Do"</span>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", marginBottom: "16px" }}>
              The Complete Guide to Sex, Intimacy &amp; Building a Healthy Sexual Relationship in Marriage
            </h2>
            <p className="book-tagline">A warm, honest, practical guide for engaged couples and newlyweds.</p>

            <p>This isn't a book that tells you sex is important. <strong>You already know that.</strong></p>
            <p>This is the book that teaches you how to talk about it — before the awkward silences become a pattern, before unspoken expectations become resentment, and before small misunderstandings become bigger problems.</p>
            <p>Read it before your wedding. Read it together in your first months. Return to it whenever the conversation gets hard.</p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          WHAT YOU'LL LEARN
          ═══════════════════════════════════ */}
      <section className="ed-section">
        <div className="reading-col">
          <span className="label">What this book gives you</span>
          <h2>Everything the premarital counselling didn't cover.</h2>
          <p style={{ color: "var(--muted-foreground)", marginBottom: "0" }}>
            Practical, honest and written for real couples — not textbook case studies.
          </p>
        </div>

        <div className="page-shell" style={{ marginTop: "0" }}>
          <ol className="ed-list">
            <li className="ed-list__item">
              <span className="ed-list__num">01</span>
              <div>
                <p className="ed-list__title">How to start the conversation about sex</p>
                <p className="ed-list__body">Without embarrassment, without accusation, and without it turning into an argument. Most couples never learn this. You will.</p>
              </div>
            </li>
            <li className="ed-list__item">
              <span className="ed-list__num">02</span>
              <div>
                <p className="ed-list__title">How to understand each other's expectations</p>
                <p className="ed-list__body">Why two people who love each other can still enter marriage with completely different ideas about intimacy — and how to close that gap before it widens.</p>
              </div>
            </li>
            <li className="ed-list__item">
              <span className="ed-list__num">03</span>
              <div>
                <p className="ed-list__title">How to say what you need</p>
                <p className="ed-list__body">How to express what you want, what you're comfortable with, and what you're not — clearly and kindly — without your spouse having to guess.</p>
              </div>
            </li>
            <li className="ed-list__item">
              <span className="ed-list__num">04</span>
              <div>
                <p className="ed-list__title">How to handle mismatched desire</p>
                <p className="ed-list__body">What to do when one of you wants intimacy more than the other — without the rejection, the guilt, or the resentment that silence creates.</p>
              </div>
            </li>
            <li className="ed-list__item">
              <span className="ed-list__num">05</span>
              <div>
                <p className="ed-list__title">How to stay connected when life gets hard</p>
                <p className="ed-list__body">Work stress. Fatigue. Pregnancy. Children. Emotional distance. Marriage doesn't pause for any of it. This book helps you keep communicating through all of it.</p>
              </div>
            </li>
            <li className="ed-list__item">
              <span className="ed-list__num">06</span>
              <div>
                <p className="ed-list__title">How to have the conversations couples avoid</p>
                <p className="ed-list__body">The subjects most couples hope will resolve themselves. They don't. This book gives you the language to finally address them — with honesty and without drama.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <Rule />

      {/* ═══════════════════════════════════
          WHO IT'S FOR — Specific
          ═══════════════════════════════════ */}
      <section className="ed-section ed-section--shaded">
        <div className="reading-col">
          <span className="label">Is this book for you?</span>
          <h2>This book is for you if any of these sound familiar.</h2>
        </div>

        <div className="page-shell">
          <div className="for-grid">
            <div className="for-item">
              <h3>You're engaged and waiting until marriage</h3>
              <p>You want to walk into your wedding night prepared — not dependent on hope and assumptions. You want the conversations worth having before the wedding, not after.</p>
            </div>
            <div className="for-item">
              <h3>You're newly married and it's more complicated than you expected</h3>
              <p>You love each other. But navigating intimacy is harder than dating made it look. You want practical guidance, not vague encouragement.</p>
            </div>
            <div className="for-item">
              <h3>You find these conversations difficult to start</h3>
              <p>You know what you feel. But putting it into words without it becoming awkward or tense? That's harder. This book gives you the language.</p>
            </div>
            <div className="for-item">
              <h3>You want to get this right from the beginning</h3>
              <p>You're not waiting for a problem to develop before you address it. You want a strong foundation — and you understand that intimacy is part of that foundation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          SOFT CTA
          ═══════════════════════════════════ */}
      <section className="conversion-soft">
        <div className="reading-col">
          <span className="label">Start the right way</span>
          <h2>Don't leave one of the most important parts of your marriage to guesswork.</h2>
          <p className="sub">
            Every couple figures out intimacy eventually. The ones who read this book figure it out faster, with less friction, and with more honesty.
          </p>
          <Cta label="Get After I Do — ₦3,700" />
          <p className="checkout-note">Instant digital access · Secure checkout via Selar</p>
        </div>
      </section>

      {/* ═══════════════════════════════════
          OBJECTION HANDLING
          ═══════════════════════════════════ */}
      <section className="ed-section">
        <div className="reading-col">
          <span className="label">A honest word</span>
          <h2>You might be thinking: "We're good. We communicate well."</h2>

          <p>That's great. Genuinely.</p>

          <p>But communicating well about day-to-day things is different from communicating well about intimacy. Most couples who describe themselves as "good communicators" still go silent when the topic turns to sex.</p>

          <p>Because it's vulnerable. Because the stakes feel higher. Because one wrong word can feel like rejection.</p>

          <p>This book doesn't assume you're broken. It assumes you're a normal, loving couple who wants to do this well — and gives you the tools to actually do it.</p>

          <p><strong>Reading it before you need it is the whole point.</strong></p>
        </div>
      </section>

      <Rule />

      {/* ═══════════════════════════════════
          FINAL OFFER
          ═══════════════════════════════════ */}
      <section className="offer-band">
        <div className="page-shell offer-grid">
          <figure className="offer-book">
            <img
              src="/mockup cover.png"
              alt="After I Do book cover"
              width="600"
              height="800"
              loading="lazy"
            />
          </figure>

          <div className="offer-copy">
            <span className="label">After "I Do"</span>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.1rem)", marginBottom: "12px" }}>
              The Complete Guide to Sex, Intimacy &amp; Building a Healthy Sexual Relationship in Marriage
            </h2>
            <p className="book-desc">
              A practical guide for engaged couples and newlyweds who want to build intimacy the right way — from the very beginning.
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", borderTop: "1px solid var(--border)" }}>
              {[
                "How to start honest conversations about sex",
                "How to understand and align your expectations",
                "How to navigate mismatched desire",
                "How to communicate what you need — without the awkwardness",
                "How to stay connected through every season of marriage",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    padding: "12px 0",
                    borderBottom: "1px solid var(--border)",
                    fontSize: "0.96rem",
                    display: "flex",
                    gap: "10px",
                    alignItems: "baseline",
                  }}
                >
                  <span style={{ color: "var(--primary)", fontWeight: 700, flexShrink: 0 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="price">
              <span className="price__label">Get the complete guide for</span>
              <span className="price__amount">₦3,700</span>
            </div>

            <Cta label="Get After I Do Now" full />
            <p className="checkout-note">Instant digital access · Secure checkout via Selar · Read on any device</p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          CLOSING
          ═══════════════════════════════════ */}
      <section className="closing-band">
        <div className="reading-col text-center">
          <span className="label">One last thing</span>
          <h2>Your wedding day is one day. Your marriage is every day after it.</h2>
          <p>
            You'll spend thousands on the venue, the dress, the rings, the food. You'll spend months planning a single day.
          </p>
          <p>
            This book costs ₦3,700 and will help you build something that lasts the rest of your life.
          </p>
          <Cta label="Get After I Do — ₦3,700" />
          <p className="final-note" style={{ marginTop: "16px" }}>
            Don't go into your marriage guessing. Get the guide.
          </p>
        </div>
      </section>

    </main>
  );
}
