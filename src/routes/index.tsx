import { createFileRoute } from "@tanstack/react-router";

const checkoutUrl = "https://selar.com/s381u81f31";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "After I Do — Everything You Wish Someone Had Told You About Sex Before Your Wedding Night" },
      {
        name: "description",
        content:
          "A practical guide for engaged couples and newlyweds. Learn how to talk about sex, expectations and intimacy before the awkward silences become a pattern.",
      },
      { property: "og:title", content: "After I Do — Everything You Wish Someone Had Told You About Sex Before Your Wedding Night" },
      {
        property: "og:description",
        content:
          "Don't walk into your wedding night without knowing this. A complete guide to sex, intimacy and communication in marriage.",
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
          description: "Everything You Wish Someone Had Told You About Sex Before Your Wedding Night",
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
  component: SalesPage,
});

function Cta({ label, full, large }: { label: string; full?: boolean; large?: boolean }) {
  return (
    <a
      className={`purchase-button${full ? " purchase-button--full" : ""}`}
      href={checkoutUrl}
      style={large ? { padding: "20px 44px", fontSize: "1rem", letterSpacing: "0.08em" } : undefined}
    >
      {label} <span aria-hidden="true">→</span>
    </a>
  );
}

function Rule() {
  return <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: "0" }} />;
}

function SectionLabel({ text }: { text: string }) {
  return <span className="label">{text}</span>;
}

function CheckItem({ text }: { text: string }) {
  return (
    <li style={{
      display: "flex", gap: "12px", alignItems: "baseline",
      padding: "13px 0", borderBottom: "1px solid var(--border)",
      fontSize: "0.97rem", lineHeight: 1.6,
    }}>
      <span style={{ color: "var(--primary)", fontWeight: 700, flexShrink: 0 }}>✓</span>
      {text}
    </li>
  );
}

function ValueRow({ title, value, main }: { title: string; value: string; main?: boolean }) {
  return (
    <li style={{
      display: "flex", justifyContent: "space-between", alignItems: "baseline",
      padding: "14px 0", borderBottom: "1px solid var(--border)",
      fontWeight: main ? 700 : 400, fontSize: main ? "1.05rem" : "0.97rem",
    }}>
      <span>{title}</span>
      <span style={{ color: "var(--primary)", fontWeight: 700, whiteSpace: "nowrap", marginLeft: "16px" }}>{value}</span>
    </li>
  );
}

function SalesPage() {
  return (
    <main>

      {/* ═══════════════════════════════════════════
          OPEN LETTER HERO
          ═══════════════════════════════════════════ */}
      <header className="ed-hero" style={{ textAlign: "left", padding: "72px 0 64px" }}>
        <div className="reading-col">
          <SectionLabel text="An open letter to every couple about to get married" />

          <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.7rem)", lineHeight: 1.18, marginBottom: "32px" }}>
            Don't Walk Into Your Wedding Night Without Knowing This
          </h1>

          <p style={{ fontSize: "1.1rem", lineHeight: 1.78 }}>
            You've spent months preparing for your wedding. But have you prepared for what happens when the wedding is over?
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.78 }}>
            Because when the guests leave, the music stops, the dress comes off and the two of you are finally alone — you may suddenly realise that nobody ever taught you what to do next.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.78 }}>
            You may have questions you're too embarrassed to ask. Expectations your partner knows nothing about. Fears you've never shared. And ideas about what your first night "should" be like that came from movies, friends, social media — or absolutely nowhere.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.78 }}>
            And if you get this part wrong, it can create awkwardness, disappointment and misunderstandings that follow you far beyond your honeymoon.
          </p>
          <p style={{ fontSize: "1.15rem", lineHeight: 1.78, fontWeight: 600, marginBottom: "8px" }}>
            If you are getting married soon, newly married, or simply want to build a better intimate life with your spouse…
          </p>
          <p style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
            fontStyle: "italic",
            color: "var(--primary)",
            marginBottom: "0",
          }}>
            You need to read this.
          </p>
        </div>
      </header>

      <Rule />

      {/* ═══════════════════════════════════════════
          BOOK INTRODUCTION
          ═══════════════════════════════════════════ */}
      <section className="book-intro">
        <div className="reading-col book-intro__transition">
          <SectionLabel text="Introducing" />
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}>After "I Do"</h2>
          <p style={{ fontSize: "1.1rem", fontWeight: 600 }}>
            Everything You Wish Someone Had Told You About Sex Before Your Wedding Night
          </p>
        </div>

        <div className="page-shell book-intro__grid">
          <figure className="book-intro__cover">
            <img
              src="/mockup cover.png"
              alt="After I Do — Everything You Wish Someone Had Told You About Sex Before Your Wedding Night"
              width="600"
              height="800"
              fetchPriority="high"
            />
          </figure>

          <div className="book-intro__copy">
            <p>This is not a book telling you to "just relax" and hope everything works out.</p>
            <p>It is a practical guide designed to help couples understand what comes after the wedding.</p>
            <p>Because getting married does not automatically mean you know how to communicate about intimacy.</p>
            <p>It does not automatically remove nervousness.</p>
            <p>It does not automatically make two people comfortable with each other.</p>
            <p>And it certainly does not mean your first night will look like what you saw in movies, heard from friends, or imagined in your head.</p>
            <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.2rem", fontStyle: "italic", margin: "32px 0 0" }}>
              You learn each other. And this book shows you how to begin.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PRE-WEDDING CONVERSATIONS
          ═══════════════════════════════════════════ */}
      <section className="ed-section">
        <div className="reading-col">
          <SectionLabel text="Before your wedding night" />
          <h2>There are conversations you need to have. But most couples don't have them.</h2>

          <p>They are too shy. They don't know how to start. They assume everything will "work itself out."</p>
          <p>Then marriage begins. And suddenly, two people who love each other deeply discover that they have very different expectations about intimacy.</p>
          <p><strong>After "I Do" helps you have those conversations before they become problems.</strong></p>
          <p>You will learn how to talk about:</p>

          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", borderTop: "1px solid var(--border)" }}>
            {["Intimacy", "Expectations", "Boundaries", "Fears", "Desires", "Comfort", "Communication", "Different levels of desire"].map((item) => (
              <CheckItem key={item} text={item} />
            ))}
          </ul>

          <p>Without turning the conversation into an argument.</p>
        </div>
      </section>

      <Rule />

      {/* ═══════════════════════════════════════════
          WEDDING NIGHT SCENARIO
          ═══════════════════════════════════════════ */}
      <section className="ed-section ed-section--shaded">
        <div className="reading-col">
          <SectionLabel text="And then comes the wedding night" />
          <h2>You've spent months planning for the wedding. The day finally comes.</h2>

          <p>You say your vows. You celebrate. You take pictures. You leave the reception.</p>
          <p>And eventually… it's just the two of you.</p>

          <div className="assumption-block" style={{ margin: "32px 0" }}>
            <p>Now what?</p>
            <p>What should you do first?</p>
            <p>What if you're nervous?</p>
            <p>What if your spouse is nervous?</p>
            <p>What if one of you isn't ready?</p>
            <p>What if the night doesn't go according to plan?</p>
            <p>What if the experience feels awkward?</p>
            <p>What happens afterwards?</p>
          </div>

          <p>These are real questions. <strong>And After "I Do" addresses every one of them.</strong></p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          REFLECTION
          ═══════════════════════════════════════════ */}
      <div className="reflection">
        <div className="reading-col">
          <span className="reflection__pre">The goal isn't one perfect night</span>
          <p className="reflection__question">
            The goal is to build an intimate marriage you both enjoy coming back to.
          </p>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          WHAT'S INSIDE — CHAPTERS
          ═══════════════════════════════════════════ */}
      <section className="ed-section">
        <div className="reading-col">
          <SectionLabel text="Here's what you'll discover inside the book" />
          <h2>Everything the premarital counselling didn't cover.</h2>
        </div>

        <div className="page-shell">
          <ol className="ed-list">
            <li className="ed-list__item">
              <span className="ed-list__num">01</span>
              <div>
                <p className="ed-list__title">What Actually Happens After "I Do"?</p>
                <p className="ed-list__body">Get a realistic picture of what to expect when you finally become husband and wife — without the myths, the pressure and the unrealistic expectations.</p>
              </div>
            </li>
            <li className="ed-list__item">
              <span className="ed-list__num">02</span>
              <div>
                <p className="ed-list__title">The Conversations You Need to Have Before the Wedding</p>
                <p className="ed-list__body">Know exactly what to discuss about intimacy, expectations, boundaries, fears and desires — so nothing comes as a surprise.</p>
              </div>
            </li>
            <li className="ed-list__item">
              <span className="ed-list__num">03</span>
              <div>
                <p className="ed-list__title">What Are You Expecting From Your First Night?</p>
                <p className="ed-list__body">Separate reality from movies, social media, stories from friends, and the unrealistic expectations that silently set couples up for disappointment.</p>
              </div>
            </li>
            <li className="ed-list__item">
              <span className="ed-list__num">04</span>
              <div>
                <p className="ed-list__title">The First-Night Anxiety Nobody Talks About</p>
                <p className="ed-list__body">Know what to do when you're nervous, awkward or simply unsure of what to expect — and how to help your spouse feel the same.</p>
              </div>
            </li>
            <li className="ed-list__item">
              <span className="ed-list__num">05</span>
              <div>
                <p className="ed-list__title">How to Prepare Physically, Emotionally and Mentally</p>
                <p className="ed-list__body">Prepare yourself properly — without turning your wedding night into an examination you have to pass.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <Rule />

      {/* ═══════════════════════════════════════════
          WEDDING NIGHT PLAYBOOK
          ═══════════════════════════════════════════ */}
      <section className="ed-section ed-section--shaded">
        <div className="reading-col">
          <SectionLabel text="The wedding night playbook" />
          <h2>Inside the book, you'll also discover:</h2>
        </div>

        <div className="page-shell">
          <ol className="ed-list">
            <li className="ed-list__item">
              <span className="ed-list__num">→</span>
              <div>
                <p className="ed-list__title">The 7 Rules for Your Wedding Night</p>
                <p className="ed-list__body">Simple principles every newlywed should know before they close that hotel-room door.</p>
              </div>
            </li>
            <li className="ed-list__item">
              <span className="ed-list__num">→</span>
              <div>
                <p className="ed-list__title">Don't Rush It</p>
                <p className="ed-list__body">Learn how to move from celebrating your wedding to becoming truly comfortable with each other — at a pace that works for both of you.</p>
              </div>
            </li>
            <li className="ed-list__item">
              <span className="ed-list__num">→</span>
              <div>
                <p className="ed-list__title">How to Know If Your Spouse Is Comfortable</p>
                <p className="ed-list__body">Learn to communicate and pay attention instead of making assumptions. The difference between the two can define how your first night feels.</p>
              </div>
            </li>
            <li className="ed-list__item">
              <span className="ed-list__num">→</span>
              <div>
                <p className="ed-list__title">What If One of You Isn't Ready?</p>
                <p className="ed-list__body">Understand what to do when nerves, fear, exhaustion or emotions make one person want to slow down — and how to respond without making it worse.</p>
              </div>
            </li>
            <li className="ed-list__item">
              <span className="ed-list__num">→</span>
              <div>
                <p className="ed-list__title">What If Things Don't Go According to Plan?</p>
                <p className="ed-list__body">Sometimes they won't. And that's okay. Learn how to handle awkward moments, disappointment and unexpected reactions — without allowing one night to define your marriage.</p>
              </div>
            </li>
            <li className="ed-list__item">
              <span className="ed-list__num">→</span>
              <div>
                <p className="ed-list__title">After Your First Time: What Happens Next?</p>
                <p className="ed-list__body">Learn how to reconnect, talk about the experience and make your first night the beginning of something — not a test you passed or failed.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FIRST 30 DAYS
          ═══════════════════════════════════════════ */}
      <section className="ed-section">
        <div className="reading-col">
          <SectionLabel text="But the book doesn't stop at the first night" />
          <h2>Because your marriage doesn't stop after the first night. It is only beginning.</h2>

          <p>That's why After "I Do" takes you into your first experiences together and beyond — through the first 30 days, where many couples begin discovering what married life is really like.</p>

          <p>The book helps you navigate questions such as:</p>
        </div>

        <div className="page-shell">
          <ol className="ed-list">
            <li className="ed-list__item">
              <span className="ed-list__num">→</span>
              <div>
                <p className="ed-list__title">How often should married couples have sex?</p>
                <p className="ed-list__body">There is no magic number. But there is a right way to talk about it.</p>
              </div>
            </li>
            <li className="ed-list__item">
              <span className="ed-list__num">→</span>
              <div>
                <p className="ed-list__title">What if one person wants it more?</p>
                <p className="ed-list__body">Learn how to handle different levels of desire without pressure, guilt, rejection or resentment.</p>
              </div>
            </li>
            <li className="ed-list__item">
              <span className="ed-list__num">→</span>
              <div>
                <p className="ed-list__title">How do I initiate without feeling rejected?</p>
                <p className="ed-list__body">How do I tell my spouse what I like? How do I say "no" without hurting them? How do we talk when something isn't working?</p>
              </div>
            </li>
            <li className="ed-list__item">
              <span className="ed-list__num">→</span>
              <div>
                <p className="ed-list__title">"Am I Normal?"</p>
                <p className="ed-list__body">The questions many newlyweds are too embarrassed to ask anyone — answered honestly and practically.</p>
              </div>
            </li>
            <li className="ed-list__item">
              <span className="ed-list__num">→</span>
              <div>
                <p className="ed-list__title">Learning Each Other</p>
                <p className="ed-list__body">Understand why great intimacy isn't something you magically know how to do. It's something you learn together — and this book shows you how.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <Rule />

      {/* ═══════════════════════════════════════════
          EMOTIONAL INTIMACY
          ═══════════════════════════════════════════ */}
      <section className="ed-section ed-section--shaded">
        <div className="reading-col">
          <SectionLabel text="Because sex doesn't start in the bedroom" />
          <h2>It starts long before that.</h2>

          <p>That's why After "I Do" also teaches you about the connection between emotional intimacy and sexual intimacy.</p>
          <p>You'll discover how affection, friendship, everyday treatment and emotional connection affect intimacy. You'll learn what can slowly kill it — and how to navigate intimacy when:</p>

          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", borderTop: "1px solid var(--border)" }}>
            {[
              "Work becomes stressful",
              "You are tired",
              "Responsibilities increase",
              "Life gets busy",
              "Pregnancy changes things",
              "Children arrive",
              "Your marriage enters a new season",
            ].map((item) => (
              <CheckItem key={item} text={item} />
            ))}
          </ul>

          <p><strong>Because your intimate life will change. And knowing how to adapt together matters.</strong></p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          MARRIAGE SEX PLAYBOOK
          ═══════════════════════════════════════════ */}
      <section className="ed-section">
        <div className="reading-col">
          <SectionLabel text="You also get the Marriage Sex Playbook" />
          <h2>A simple framework you can return to throughout your marriage.</h2>
        </div>

        <div className="page-shell">
          <ol className="ed-list">
            <li className="ed-list__item">
              <span className="ed-list__num">→</span>
              <div>
                <p className="ed-list__title">The 10 Golden Rules of Healthy Sexual Intimacy</p>
                <p className="ed-list__body">A simple, practical framework for building and maintaining healthy intimacy across every season of your marriage.</p>
              </div>
            </li>
            <li className="ed-list__item">
              <span className="ed-list__num">→</span>
              <div>
                <p className="ed-list__title">The Weekly Marriage Check-In</p>
                <p className="ed-list__body">A simple conversation that can help you stay connected before small issues become big ones.</p>
              </div>
            </li>
            <li className="ed-list__item">
              <span className="ed-list__num">→</span>
              <div>
                <p className="ed-list__title">Questions Every Couple Should Ask Each Other</p>
                <p className="ed-list__body">Questions designed to make honest conversations about intimacy easier to start and more productive to have.</p>
              </div>
            </li>
            <li className="ed-list__item">
              <span className="ed-list__num">→</span>
              <div>
                <p className="ed-list__title">The "Something Isn't Working" Conversation</p>
                <p className="ed-list__body">How to raise a difficult issue without turning it into an attack — and how to hear one without becoming defensive.</p>
              </div>
            </li>
            <li className="ed-list__item">
              <span className="ed-list__num">→</span>
              <div>
                <p className="ed-list__title">When You Need More Help</p>
                <p className="ed-list__body">Know when it may be appropriate to speak with a doctor, therapist, counsellor or another qualified professional.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <Rule />

      {/* ═══════════════════════════════════════════
          ACTION PLAN
          ═══════════════════════════════════════════ */}
      <section className="ed-section ed-section--shaded">
        <div className="reading-col">
          <SectionLabel text="And then you get the After 'I Do' Action Plan" />
          <h2>No more reading and forgetting. Practical tools you can actually use.</h2>
        </div>

        <div className="page-shell">
          <ol className="ed-list">
            <li className="ed-list__item">
              <span className="ed-list__num">→</span>
              <div>
                <p className="ed-list__title">Your Pre-Wedding Intimacy Checklist</p>
                <p className="ed-list__body">Know the exact conversations to have before the wedding — so nothing important is left to chance.</p>
              </div>
            </li>
            <li className="ed-list__item">
              <span className="ed-list__num">→</span>
              <div>
                <p className="ed-list__title">Your Wedding-Night Checklist</p>
                <p className="ed-list__body">Know what to remember before your first night together — so you approach it with confidence, not anxiety.</p>
              </div>
            </li>
            <li className="ed-list__item">
              <span className="ed-list__num">→</span>
              <div>
                <p className="ed-list__title">Your First-30-Days Challenge</p>
                <p className="ed-list__body">Simple conversations and habits to help you build intimacy during your first month of marriage.</p>
              </div>
            </li>
            <li className="ed-list__item">
              <span className="ed-list__num">→</span>
              <div>
                <p className="ed-list__title">Your Marriage Intimacy Agreement</p>
                <p className="ed-list__body">A practical framework for agreeing on how you'll communicate, respect each other's boundaries and keep growing together.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BONUSES
          ═══════════════════════════════════════════ */}
      <section className="ed-section">
        <div className="reading-col">
          <SectionLabel text="And there's more" />
          <h2>When you get After "I Do", you also receive these bonuses:</h2>
        </div>

        <div className="page-shell">
          <ol className="ed-list">
            <li className="ed-list__item">
              <span className="ed-list__num" style={{ color: "var(--primary)", fontSize: "1rem", fontFamily: "'Inter', Arial, sans-serif", fontWeight: 700, paddingTop: 0 }}>BONUS 1</span>
              <div>
                <p className="ed-list__title">21 Questions to Discuss Before Your Wedding Night</p>
                <p className="ed-list__body">The important questions many couples don't know how to ask — laid out clearly so you and your partner can work through them together.</p>
              </div>
            </li>
            <li className="ed-list__item">
              <span className="ed-list__num" style={{ color: "var(--primary)", fontSize: "1rem", fontFamily: "'Inter', Arial, sans-serif", fontWeight: 700, paddingTop: 0 }}>BONUS 2</span>
              <div>
                <p className="ed-list__title">First-Night Do's &amp; Don'ts</p>
                <p className="ed-list__body">A simple guide to help you approach your first night with less pressure and more understanding.</p>
              </div>
            </li>
            <li className="ed-list__item">
              <span className="ed-list__num" style={{ color: "var(--primary)", fontSize: "1rem", fontFamily: "'Inter', Arial, sans-serif", fontWeight: 700, paddingTop: 0 }}>BONUS 3</span>
              <div>
                <p className="ed-list__title">Newlywed Intimacy Conversation Cards</p>
                <p className="ed-list__body">Simple prompts to help you and your spouse have conversations that might otherwise feel difficult to start.</p>
              </div>
            </li>
            <li className="ed-list__item">
              <span className="ed-list__num" style={{ color: "var(--primary)", fontSize: "1rem", fontFamily: "'Inter', Arial, sans-serif", fontWeight: 700, paddingTop: 0 }}>BONUS 4</span>
              <div>
                <p className="ed-list__title">30-Day Marriage Intimacy Challenge</p>
                <p className="ed-list__body">A practical challenge designed to help you build communication, connection and intimacy during your first month together.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <Rule />

      {/* ═══════════════════════════════════════════
          VALUE STACK + OFFER
          ═══════════════════════════════════════════ */}
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
            <SectionLabel text="Here's what you get today" />
            <h2 style={{ fontSize: "clamp(1.5rem, 2.8vw, 2rem)", marginBottom: "24px" }}>
              The Complete After "I Do" System
            </h2>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", borderTop: "1px solid var(--border)" }}>
              <ValueRow title='After "I Do" — Main Book' value="₦20,000" main />
              <ValueRow title="21 Questions to Discuss Before Your Wedding Night" value="₦7,500" />
              <ValueRow title="First-Night Do's & Don'ts" value="₦5,000" />
              <ValueRow title="Newlywed Intimacy Conversation Cards" value="₦7,500" />
              <ValueRow title="30-Day Marriage Intimacy Challenge" value="₦5,000" />
            </ul>

            <p style={{ fontSize: "0.88rem", color: "var(--muted-foreground)", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>
              Total value
            </p>
            <p style={{ fontSize: "1.6rem", fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, textDecoration: "line-through", color: "var(--muted-foreground)", margin: "0 0 4px" }}>
              ₦45,000
            </p>

            <p style={{ fontSize: "0.88rem", color: "var(--primary)", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>
              Today only
            </p>
            <div className="price">
              <span className="price__amount" style={{ fontSize: "3rem" }}>₦5,000</span>
            </div>
            <p style={{ fontSize: "0.95rem", color: "var(--primary)", fontWeight: 600, marginBottom: "24px" }}>
              You save ₦40,000
            </p>

            <Cta label="Get After I Do for ₦5,000" full large />
            <p className="checkout-note">Instant digital access · Secure checkout via Selar · Read on any device</p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          DON'T BUY BECAUSE IT'S CHEAP
          ═══════════════════════════════════════════ */}
      <section className="ed-section">
        <div className="reading-col">
          <SectionLabel text="A word before you decide" />
          <h2>Don't buy this because it's cheap.</h2>

          <p>Buy it because your marriage is worth preparing for.</p>
          <p>A wedding can cost hundreds of thousands — or millions of naira. You can spend months planning one day.</p>
          <p>But your intimate life with your spouse could last for decades.</p>
          <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.2rem", fontStyle: "italic", borderLeft: "3px solid var(--primary)", paddingLeft: "20px", margin: "32px 0" }}>
            Don't prepare for the wedding and forget to prepare for the marriage.
          </p>
        </div>
      </section>

      <Rule />

      {/* ═══════════════════════════════════════════
          GUARANTEE
          ═══════════════════════════════════════════ */}
      <section className="ed-section ed-section--shaded">
        <div className="reading-col">
          <SectionLabel text="And here's what makes this even easier" />
          <h2>You have nothing to lose.</h2>

          <p>Read the entire book. Go through the ideas. Have the conversations. Use what you learn.</p>
          <p>And if, after reading it, you genuinely don't believe the ideas can help you build a more intimate, enjoyable and connected marriage — contact us for a full refund.</p>
          <p>And yes… <strong>you can keep the book.</strong></p>
          <p>That's how confident we want you to feel about giving this a chance.</p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SOFT CLOSE
          ═══════════════════════════════════════════ */}
      <section className="conversion-soft">
        <div className="reading-col">
          <SectionLabel text="Your wedding night doesn't have to be perfect" />
          <h2>You don't have to know everything. You don't have to perform.</h2>
          <p className="sub">
            You don't have to compare yourself to anybody. You don't have to become the couple you see on social media. You simply need to start learning each other.
          </p>
          <p className="sub" style={{ marginBottom: "36px" }}>
            Because the goal isn't one unforgettable night. <strong>The goal is to build an intimate marriage you both enjoy coming back to.</strong>
          </p>
          <Cta label="Get After I Do for ₦5,000" large />
          <p className="checkout-note">Instant digital access · Secure checkout via Selar</p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          URGENCY CLOSE
          ═══════════════════════════════════════════ */}
      <section className="ed-section">
        <div className="reading-col">
          <SectionLabel text="Don't wait" />
          <h2>Don't wait until after the wedding to start having the conversations you should have had before it.</h2>

          <p>Don't wait until something becomes a problem before you learn how to talk about it.</p>
          <p>Don't wait until the first night to discover that love alone doesn't automatically teach two people how to become intimate.</p>

          <p style={{ marginTop: "32px" }}><strong>Prepare now. Read the book. Talk to your spouse. Learn each other. And give your marriage a better beginning.</strong></p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FINAL OFFER
          ═══════════════════════════════════════════ */}
      <section className="closing-band">
        <div className="reading-col text-center">
          <SectionLabel text="After &#8220;I Do&#8221;" />
          <h2 style={{ color: "var(--background)", fontSize: "clamp(1.5rem, 3.5vw, 2.4rem)" }}>
            Your wedding night is one night.<br />Your intimate life is a lifetime.
          </h2>
          <p>Get the complete system today for ₦5,000.</p>

          <div style={{ margin: "8px 0 28px" }}>
            <p style={{ color: "oklch(0.72 0.01 35)", fontSize: "0.9rem", margin: "0 0 4px" }}>Complete system value: ₦45,000</p>
            <p style={{ color: "oklch(0.72 0.01 35)", fontSize: "0.9rem", margin: "0" }}>You save: ₦40,000</p>
          </div>

          <Cta label="Get After I Do for ₦5,000" large />
          <p className="final-note">Instant digital access · Secure checkout via Selar · Read on any device</p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          P.S.
          ═══════════════════════════════════════════ */}
      <section className="ed-section" style={{ background: "var(--secondary)", borderTop: "1px solid var(--border)" }}>
        <div className="reading-col">
          <p style={{ fontWeight: 700, marginBottom: "8px", fontSize: "1rem" }}>P.S.</p>
          <p>You can spend weeks planning the wedding. The venue. The clothes. The food. The decorations. The pictures.</p>
          <p>But the wedding is one day.</p>
          <p>Your marriage is the rest of your life.</p>
          <p style={{ marginBottom: "32px" }}>Make sure you prepare for that part too.</p>
          <Cta label="Get After I Do for ₦5,000" />
        </div>
      </section>

    </main>
  );
}
