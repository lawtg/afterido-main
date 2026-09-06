import { createFileRoute } from "@tanstack/react-router";

const checkoutUrl = "https://selar.com/s381u81f31";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "After I Do — A Guide to Intimacy in Marriage" },
      {
        name: "description",
        content:
          "The conversations most couples wait too long to have. A premium guide to sex, intimacy and communication in marriage.",
      },
      { property: "og:title", content: "After I Do — A Guide to Intimacy in Marriage" },
      {
        property: "og:description",
        content:
          "Some conversations are uncomfortable. Some feel unnecessary. And some seem easier to postpone. Until postponing them becomes the problem.",
      },
      { property: "og:type", content: "article" },
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

function PullQuote({ text }: { text: string }) {
  return (
    <div className="pull-quote reading-col">
      <span className="pull-quote__mark" aria-hidden="true">"</span>
      <p className="pull-quote__text">{text}</p>
    </div>
  );
}

function Rule() {
  return (
    <hr
      style={{
        border: "none",
        borderTop: "1px solid var(--border)",
        margin: "0",
      }}
    />
  );
}

function SalesPage() {
  return (
    <main>

      {/* ══════════════════════════════════════
          ① HERO — feels like a premium article
          ══════════════════════════════════════ */}
      <header className="ed-hero">
        <div className="reading-col">
          <span className="label">Marriage · Intimacy · Communication</span>

          <h1>The conversations most couples wait too long to have</h1>

          <p className="hero-intro">
            Some conversations are uncomfortable.
            Some feel unnecessary.
            And some seem easier to postpone.
            <br /><br />
            <em>Until postponing them becomes the problem.</em>
          </p>

          <div className="byline">
            <span>After "I Do"</span>
            <span className="byline-dot" aria-hidden="true" />
            <span>A guide for married couples</span>
            <span className="byline-dot" aria-hidden="true" />
            <span>2025</span>
          </div>
        </div>
      </header>


      {/* ══════════════════════════════════════
          ② THE UNCOMFORTABLE TRUTH
          ══════════════════════════════════════ */}
      <section className="ed-section">
        <div className="reading-col">
          <span className="label">The uncomfortable truth</span>
          <h2>You can spend months preparing for your wedding. But that's not the same as preparing for your marriage.</h2>

          <p>You plan the venue. The guest list. The clothes. The food. The honeymoon. Where you'll live. How you'll manage money together.</p>
          <p>You talk about almost everything.</p>
          <p>Except the one thing many couples suddenly have to figure out when the wedding is over — when the guests have gone home, the music has stopped and it's just the two of you.</p>
          <p>That's when the real question arrives. Quietly. Sometimes nervously. Often without warning.</p>
        </div>
      </section>

      <Rule />

      {/* ── Full-width statement ── */}
      <div
        style={{
          padding: "80px 20px",
          textAlign: "center",
          background: "var(--secondary)",
        }}
      >
        <p
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(1.9rem, 4.5vw, 3rem)",
            fontStyle: "italic",
            fontWeight: 400,
            lineHeight: 1.35,
            color: "var(--foreground)",
            maxWidth: "680px",
            margin: "0 auto",
          }}
        >
          "What happens when we're finally alone?"
        </p>
      </div>

      <Rule />


      {/* ══════════════════════════════════════
          ③ WHY COUPLES AVOID THESE CONVERSATIONS
          ══════════════════════════════════════ */}
      <section className="ed-section">
        <div className="reading-col">
          <span className="label">Why couples avoid these conversations</span>
          <h2>It's easy to assume you'll just figure it out.</h2>

          <p>Maybe you will. But think about what actually happens in those early days of marriage.</p>

          <p>You've just gotten married. You're exhausted. You're excited. You're nervous. Your spouse is nervous too.</p>

          <p>Neither of you is completely sure what the other person expects. Neither wants to say the wrong thing. So instead of talking — you both assume.</p>
        </div>

        <div className="reading-col" style={{ marginTop: "0" }}>
          <div className="assumption-block">
            <p>"They'll probably be comfortable with this."</p>
            <p>"They'll know what I want."</p>
            <p>"We'll just figure it out."</p>
          </div>

          <p>These assumptions feel harmless in the moment. They're not.</p>

          <p>Because your spouse cannot read your mind. And you cannot read theirs.</p>

          <p>You can love someone deeply and still misunderstand what they need. You can be attracted to each other and still have completely different expectations. You can have a strong marriage and still find certain conversations incredibly difficult to start.</p>

          <p><strong>Love doesn't automatically teach you how to communicate about intimacy. That's something you have to learn.</strong></p>
        </div>
      </section>

      <PullQuote text="The conversations you avoid don't disappear. They simply become harder to have." />


      {/* ══════════════════════════════════════
          ④ THE CONVERSATIONS WE DON'T HAVE
          ══════════════════════════════════════ */}
      <section className="ed-section ed-section--shaded">
        <div className="wide-shell">
          <div className="reading-col" style={{ width: "100%", maxWidth: "680px" }}>
            <span className="label">The conversations couples often avoid</span>
            <h2>There are subjects couples tend to leave unspoken.</h2>
            <p style={{ color: "var(--muted-foreground)", marginBottom: "0" }}>
              Not because they don't matter. But because they feel difficult,
              vulnerable or easier to postpone. Until they can't be postponed anymore.
            </p>
          </div>

          <ol className="ed-list" style={{ marginTop: "48px" }}>
            <li className="ed-list__item">
              <span className="ed-list__num">01</span>
              <div>
                <p className="ed-list__title">Sex</p>
                <p className="ed-list__body">What you expect. What you want. What you're comfortable with. What you're not. Most couples enter marriage having never had this conversation clearly and honestly.</p>
              </div>
            </li>
            <li className="ed-list__item">
              <span className="ed-list__num">02</span>
              <div>
                <p className="ed-list__title">Expectations</p>
                <p className="ed-list__body">Everyone enters marriage with a set of ideas about what intimacy should look like — shaped by family, faith, culture and things absorbed without ever examining them. Those unspoken expectations become the source of most friction.</p>
              </div>
            </li>
            <li className="ed-list__item">
              <span className="ed-list__num">03</span>
              <div>
                <p className="ed-list__title">Desire</p>
                <p className="ed-list__body">What happens when one person wants intimacy frequently and the other needs more time? This difference is normal. But without language for it, it can feel like rejection.</p>
              </div>
            </li>
            <li className="ed-list__item">
              <span className="ed-list__num">04</span>
              <div>
                <p className="ed-list__title">Communication</p>
                <p className="ed-list__body">Knowing how to say "I need this" or "I'm not comfortable with that" without it becoming an argument is a skill. One most people were never taught.</p>
              </div>
            </li>
            <li className="ed-list__item">
              <span className="ed-list__num">05</span>
              <div>
                <p className="ed-list__title">Emotional needs</p>
                <p className="ed-list__body">Intimacy isn't only physical. Emotional connection — feeling seen, valued and safe — shapes the quality of physical closeness more than most couples realise.</p>
              </div>
            </li>
            <li className="ed-list__item">
              <span className="ed-list__num">06</span>
              <div>
                <p className="ed-list__title">Resentment</p>
                <p className="ed-list__body">When differences go unaddressed for long enough, frustration becomes something heavier. Resentment doesn't arrive dramatically. It builds quietly, one avoided conversation at a time.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>


      {/* ══════════════════════════════════════
          ⑤ WHAT HAPPENS WHEN WE KEEP POSTPONING
          ══════════════════════════════════════ */}
      <section className="ed-section">
        <div className="reading-col">
          <span className="label">What happens when we keep postponing</span>
          <h2>Silence doesn't protect a marriage. It just delays the conversation.</h2>

          <p>When differences go unspoken, they don't disappear. They become assumptions. Then misunderstandings. Then frustration.</p>

          <p>One person is nervous but doesn't say anything. The other doesn't realise it. One person expects intimacy frequently. The other needs more time. One person thinks something is completely normal. The other has never even considered it.</p>

          <p>Neither person is necessarily wrong. They simply have different expectations. And those differences — when they stay unspoken — quietly shape how both people feel about their marriage.</p>

          <p>A conversation cannot guarantee that every difference will disappear. But it can stop a difference from becoming a private story you tell yourself about your spouse.</p>

          <p
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: "italic",
              fontSize: "1.12rem",
              borderLeft: "3px solid var(--primary)",
              paddingLeft: "22px",
              margin: "36px 0",
              color: "var(--foreground)",
            }}
          >
            <em>They don't want me. They don't care. I'm disappointing them. Something must be wrong with us.</em>
          </p>

          <p>Honest words give both people a chance to understand what is actually happening.</p>
        </div>
      </section>


      {/* ══════════════════════════════════════
          ⑥ MOMENT OF REFLECTION
          ══════════════════════════════════════ */}
      <div className="reflection">
        <div className="reading-col">
          <span className="reflection__pre">A question worth sitting with</span>
          <p className="reflection__question">
            What happens when two people love each other deeply —
            but never learn how to talk about the things that matter most?
          </p>
        </div>
      </div>


      {/* ══════════════════════════════════════
          ⑦ FIRST SIGNS SOMETHING NEEDS TO CHANGE
          ══════════════════════════════════════ */}
      <section className="ed-section ed-section--shaded">
        <div className="reading-col">
          <span className="label">The first signs</span>
          <h2>Your first night doesn't have to be perfect.</h2>

          <p>In fact, it probably won't look exactly like the version you imagined. It might be beautiful. It might be awkward. It might be completely different from what you expected. And none of those things automatically means something is wrong.</p>

          <p>You're not performing for an audience. You're not taking an exam. You're two people beginning to learn each other in one of the most vulnerable areas of your relationship.</p>

          <p>So the better question isn't <em>"Did we do it right?"</em></p>
        </div>

        <PullQuote text="Did we feel safe enough to communicate?" />

        <div className="reading-col" style={{ marginTop: "0" }}>
          <p>Because that question will matter far beyond your first night. It will matter in year two and year seven and year fourteen. It will matter after children, after loss, after the seasons that change both of you.</p>

          <p>The couples who navigate intimacy well over the long run aren't the ones who had a perfect first night. They're the ones who built a habit of honest, kind conversation — and kept returning to it.</p>
        </div>
      </section>


      {/* ══════════════════════════════════════
          ⑧ WHAT HEALTHY CONVERSATIONS LOOK LIKE
          ══════════════════════════════════════ */}
      <section className="ed-section">
        <div
          className="wide-shell split-layout split-layout--left-wide"
          style={{ alignItems: "start" }}
        >
          <div>
            <span className="label">What healthy conversations look like</span>
            <h2>Some of the most important words in a marriage sound very simple.</h2>
            <p style={{ color: "var(--muted-foreground)", marginTop: "16px" }}>
              They don't require perfect timing or a prepared speech.
              They just require two people willing to be honest.
            </p>
          </div>

          <div>
            <ul className="phrases" aria-label="Words that build intimacy">
              <li>"I'm nervous."</li>
              <li>"Can we slow down?"</li>
              <li>"I'm comfortable with this."</li>
              <li>"I'm not comfortable with that."</li>
              <li>"Can we talk about it?"</li>
              <li>"What do you need from me?"</li>
              <li>"How are you feeling?"</li>
            </ul>

            <p style={{ marginTop: "28px", fontSize: "0.96rem", color: "var(--muted-foreground)" }}>
              These aren't signs of a troubled marriage. They're signs that two people are actually learning each other. And that is exactly what marriage requires.
            </p>
          </div>
        </div>
      </section>

      <Rule />

      {/* ── Full-width dark statement ── */}
      <div className="ed-section ed-section--dark">
        <div className="reading-col text-center">
          <p
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
              fontWeight: 400,
              lineHeight: 1.4,
              margin: "0 0 20px",
            }}
          >
            Intimacy is trust. It's vulnerability. It's feeling safe enough to tell your spouse the truth — even when the conversation is uncomfortable.
          </p>
          <p style={{ fontSize: "0.96rem", color: "oklch(0.65 0.01 35)", margin: 0 }}>
            Especially when it's uncomfortable.
          </p>
        </div>
      </div>

      <Rule />


      {/* ══════════════════════════════════════
          ⑨ LIFE HAPPENS
          ══════════════════════════════════════ */}
      <section className="ed-section">
        <div className="reading-col">
          <span className="label">The long view</span>
          <h2>Your first night is only one night. Your marriage may last decades.</h2>

          <p>And eventually, life happens.</p>

          <p>There will be stressful seasons. Busy seasons. Pregnancy. Children. Fatigue. Work pressure. Changes in your body. Changes in desire. Health challenges. Times when one person wants intimacy and the other doesn't — and moments when you don't even know how to explain what's wrong.</p>

          <p>The question isn't whether these things will happen. They will.</p>
        </div>

        <PullQuote text="The question is whether you'll know how to talk about them when they do." />

        <div className="reading-col" style={{ marginTop: "0" }}>
          <p>A healthy intimate relationship isn't something you establish once on your wedding night. It's something you keep building — season after season, conversation after conversation.</p>

          <p>The couples who stay deeply connected aren't the ones who avoided difficulty. They're the ones who built the language to talk through it.</p>
        </div>
      </section>


      {/* ══════════════════════════════════════
          ⑩ BOOK INTRODUCTION
          (natural arrival — reader is ready)
          ══════════════════════════════════════ */}
      <section className="book-intro">
        <div className="reading-col book-intro__transition">
          <span className="label">A practical guide for couples</span>
          <h2>And that's exactly why this book exists.</h2>
          <p>
            Not to tell you that intimacy is important — you already know that.
            But to give you the conversations, the framework and the language
            to actually build it.
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
            <span className="label">Now available</span>
            <h2>After "I Do"</h2>
            <p className="book-tagline">
              The Complete Guide to Sex, Intimacy &amp; Building a Healthy
              Sexual Relationship in Marriage
            </p>
            <p>
              This is a practical guide designed to help you navigate the conversations, expectations and challenges that come with intimacy inside a real marriage.
            </p>
            <p>
              You can read it privately before marriage to understand what conversations are worth having. You can work through it together as newlyweds as you learn each other. And you can return to it years later when life has changed both of you.
            </p>
            <p>
              <strong>Because you shouldn't have to learn everything through guesswork.</strong>
            </p>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════
          ⑪ INSIDE THE BOOK — editorial TOC
          ══════════════════════════════════════ */}
      <section className="toc-section ed-section">
        <div className="reading-col">
          <span className="label">Inside the book</span>
          <h2>A framework for understanding, communicating and growing together.</h2>
          <p style={{ color: "var(--muted-foreground)", marginTop: "16px" }}>
            Each chapter is designed to open a conversation — not deliver a verdict.
          </p>

          <ol className="toc-list" aria-label="Book chapters">
            <li>
              <span className="toc-num">01</span>
              <span>
                <span className="toc-title">Understanding intimacy</span>
                <span className="toc-desc">What intimacy actually means inside a marriage — beyond the physical.</span>
              </span>
            </li>
            <li>
              <span className="toc-num">02</span>
              <span>
                <span className="toc-title">Talking about sex</span>
                <span className="toc-desc">How to open conversations about sex without embarrassment, accusation or unnecessary tension.</span>
              </span>
            </li>
            <li>
              <span className="toc-num">03</span>
              <span>
                <span className="toc-title">Expressing your needs</span>
                <span className="toc-desc">How to say what you want, what you need and what you're not comfortable with — clearly and kindly.</span>
              </span>
            </li>
            <li>
              <span className="toc-num">04</span>
              <span>
                <span className="toc-title">Navigating differences in desire</span>
                <span className="toc-desc">What to do when one spouse wants intimacy more frequently than the other — without turning it into rejection or resentment.</span>
              </span>
            </li>
            <li>
              <span className="toc-num">05</span>
              <span>
                <span className="toc-title">Having the difficult conversations</span>
                <span className="toc-desc">How to approach the subjects couples often avoid — with honesty, maturity and compassion.</span>
              </span>
            </li>
            <li>
              <span className="toc-num">06</span>
              <span>
                <span className="toc-title">Intimacy through the seasons of marriage</span>
                <span className="toc-desc">How to keep communicating through stress, fatigue, pregnancy, children, health changes and everything else life brings.</span>
              </span>
            </li>
            <li>
              <span className="toc-num">07</span>
              <span>
                <span className="toc-title">Building emotional connection</span>
                <span className="toc-desc">Why emotional closeness shapes physical intimacy — and how to strengthen both.</span>
              </span>
            </li>
            <li>
              <span className="toc-num">08</span>
              <span>
                <span className="toc-title">Keeping growing together</span>
                <span className="toc-desc">Because the goal isn't a perfect intimate relationship. It's one where you can keep learning, communicating and building — together.</span>
              </span>
            </li>
          </ol>
        </div>
      </section>


      {/* ══════════════════════════════════════
          ⑫ WHO IS IT FOR
          ══════════════════════════════════════ */}
      <section className="ed-section ed-section--shaded">
        <div className="reading-col">
          <span className="label">Who the book is written for</span>
          <h2>This book is for couples who want to keep learning each other.</h2>
        </div>

        <div className="page-shell">
          <div className="for-grid">
            <div className="for-item">
              <h3>Waiting until marriage</h3>
              <p>You don't want to walk into marriage completely dependent on assumptions and hope. You want to understand the conversations worth having before and after the wedding day.</p>
            </div>
            <div className="for-item">
              <h3>Newly married</h3>
              <p>You're discovering that marriage is different from dating and want practical guidance as you learn each other in this new, vulnerable season.</p>
            </div>
            <div className="for-item">
              <h3>Married for a while</h3>
              <p>Things have changed. Your schedules. Your bodies. Your emotional connection. Your level of desire. You want to strengthen the intimacy you already share.</p>
            </div>
            <div className="for-item">
              <h3>Finding these conversations difficult</h3>
              <p>You love your spouse deeply. But talking about sex and intimacy isn't easy. You want a better way to start those conversations — and actually finish them.</p>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════
          ⑬ SOFT CONVERSION
          ══════════════════════════════════════ */}
      <section className="conversion-soft">
        <div className="reading-col">
          <span className="label">Ready to begin</span>
          <h2>Ready to have the conversations that can change your marriage?</h2>
          <p className="sub">
            You don't need to have everything figured out. You just need to be willing to learn each other.
          </p>
          <Cta label="Get After I Do" />
          <p className="checkout-note">Secure checkout · Instant digital access · ₦3,700</p>
        </div>
      </section>


      {/* ══════════════════════════════════════
          ⑭ FINAL OFFER BAND
          ══════════════════════════════════════ */}
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
            <h2>The Complete Guide to Sex, Intimacy &amp; Building a Healthy Sexual Relationship in Marriage</h2>
            <p className="book-desc">
              A practical guide for the conversations that matter most. Read it before marriage. Return to it throughout.
            </p>

            <div className="price">
              <span className="price__label">Get the complete book for</span>
              <span className="price__amount">₦3,700</span>
            </div>

            <Cta label="Get the Book Now" full />
            <p className="checkout-note">Secure checkout provided by Selar. Instant digital access.</p>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════
          ⑮ CLOSING
          ══════════════════════════════════════ */}
      <section className="closing-band">
        <div className="reading-col text-center">
          <span className="label">For the life after the wedding</span>
          <h2>Your wedding day is one day. What you build after "I do" is the marriage.</h2>
          <p>
            Prepare for your wedding. But don't forget to prepare for everything that comes after it. The routines. The seasons. The difficult conversations. The moments of deep connection you haven't had yet.
          </p>
          <Cta label="Get After I Do Now" />
          <p className="final-note">
            Don't leave one of the most important parts of your marriage to guesswork.
          </p>
        </div>
      </section>

    </main>
  );
}
