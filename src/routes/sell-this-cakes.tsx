import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import cakesCss from "../styles-cakes.css?url";

const checkoutUrl = "https://selar.com/2zmi40m090";

export const Route = createFileRoute("/sell-this-cakes")({
  head: () => ({
    meta: [
      { title: "Sell This: Cakes  -  How to Get More Cake Orders Without Begging People to Buy" },
      {
        name: "description",
        content:
          "A practical sales playbook for bakers. Learn how to turn attention, enquiries and conversations into actual cake orders.",
      },
      { property: "og:title", content: "Sell This: Cakes  -  How to Get More Cake Orders Without Begging People to Buy" },
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
            availability: "https://schema.org/InStock",
            url: checkoutUrl,
          },
        }),
      },
    ],
  }),
  component: SellThisCakes,
});

function Cta({ label, full, gold }: { label: string; full?: boolean; gold?: boolean }) {
  return (
    <a
      className={`stc-btn${full ? " stc-btn--full" : ""}${gold ? " stc-btn--gold" : ""}`}
      href={checkoutUrl}
    >
      {label} <span aria-hidden="true">→</span>
    </a>
  );
}

function Rule({ dark }: { dark?: boolean }) {
  return <hr className={`stc-rule${dark ? " stc-rule--dark" : ""}`} />;
}

const faqs = [
  {
    q: "Is this a baking book?",
    a: "No. It's a sales playbook for people who already know how to bake and want to get better at selling their cakes.",
  },
  {
    q: "Do I need a large following?",
    a: "No. The book focuses on identifying the right buyers and turning attention and conversations into enquiries and orders.",
  },
  {
    q: "Is this only for professional bakers?",
    a: "No. If you sell cakes and want to improve how you attract, communicate with and convert customers, the strategies can be useful to you.",
  },
  {
    q: "Does the book teach me how to price my cakes?",
    a: "It teaches you how to present your price, communicate value and respond to price objections. It is not a full cake-pricing or costing course.",
  },
  {
    q: "What if customers keep saying my cake is too expensive?",
    a: "The book shows you how to distinguish between different reasons behind the objection and how to respond without immediately discounting.",
  },
  {
    q: "Will this guarantee me more orders?",
    a: "No one can honestly guarantee a specific number of orders. The book gives you practical strategies, scripts and tools for improving how you market and sell your cakes. Your results will depend on your market, pricing, consistency, effort and execution.",
  },
];

function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="stc-faq__list" role="list">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className={`stc-faq__item${open === i ? " stc-faq__item--open" : ""}`}
          role="listitem"
        >
          <button
            className="stc-faq__q"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            {faq.q}
            <span className="stc-faq__icon" aria-hidden="true">+</span>
          </button>
          <div className="stc-faq__a" role="region">
            {faq.a}
          </div>
        </div>
      ))}
    </div>
  );
}

const tools = [
  {
    label: "Tool 01",
    title: "The Cake Buyer Map",
    desc: "Identify who your best customers are, when they buy, why they buy and what matters most to them.",
    tags: ["Targeting", "Strategy"],
  },
  {
    label: "Tool 02",
    title: "The 5-Photo Cake Content System",
    desc: "Learn the five types of photos that can help customers understand your cake, your quality and your credibility.",
    tags: ["Content", "Social Media"],
  },
  {
    label: "Tool 03",
    title: "The Cake Offer Builder",
    desc: "Create a clear offer that answers the questions customers usually ask: What do I get? Who is it for? How much? What is included? How do I order?",
    tags: ["Offer", "Clarity"],
  },
  {
    label: "Tool 04",
    title: "The Cake Sales Conversation Script",
    desc: "A simple framework for handling: Enquire, Discover, Recommend, Present, Close. So you know what to say when a customer asks about your price.",
    tags: ["Script", "WhatsApp"],
  },
  {
    label: "Tool 05",
    title: "The 10 Objection Response Sheet",
    desc: "Practical responses for common objections: too expensive, will think about it, found someone cheaper, can you reduce the price, and more.",
    tags: ["Objections", "Confidence"],
  },
  {
    label: "Tool 06",
    title: "The 3-Step Follow-Up Sequence",
    desc: "Know what to say when a customer stops responding  -  without sending endless follow-up messages that sound desperate.",
    tags: ["Follow-Up", "Conversion"],
  },
  {
    label: "Tool 07",
    title: "The 7-Day Cake Sales Challenge",
    desc: "A simple seven-day action plan to help you put what you have learned into practice immediately.",
    tags: ["Action Plan", "7 Days"],
  },
  {
    label: "Tool 08",
    title: "The Cake Seller's Scorecard",
    desc: "Stop judging your business only by likes. Start tracking the numbers that actually matter: Enquiries. Orders. Conversion. Average order value. Repeat customers. Referrals. Reviews. Revenue.",
    tags: ["Metrics", "Growth"],
  },
];

const steps = [
  { num: "01", word: "TARGET", desc: "Learn how to identify the people and buying situations most likely to bring you orders. Stop trying to sell to everybody. Start speaking directly to the people most likely to buy from you." },
  { num: "02", word: "ATTRACT", desc: "Learn how to make your cake content harder to ignore. Your customer cannot taste or touch your cake through a phone. Your photos and videos have to communicate quality, trust and desire." },
  { num: "03", word: "DISCOVER", desc: "Learn how to turn a simple introduction into an offer people actually understand. Your customer should not have to ask 15 questions before knowing what you are selling." },
  { num: "04", word: "PRESENT", desc: "Learn what to say when someone asks about your price. Instead of sending a number and hoping they come back, learn how to turn that question into a real sales conversation." },
  { num: "05", word: "HANDLE", desc: "Learn how to respond when someone says your cake is too expensive. Without immediately cutting your price or discounting your way out of a living." },
  { num: "06", word: "CLOSE", desc: "Learn how to follow up without sounding desperate. Because many potential sales do not disappear after the first conversation. They disappear because nobody followed up properly." },
  { num: "07", word: "MULTIPLY", desc: "Learn how to make one happy customer worth more than one sale. Turn good customer experiences into: Repeat orders. Reviews. Referrals." },
];

function SellThisCakes() {
  return (
    <div className="stc-page">

      {/* ══════════════════════════════════
          ① HERO
          ══════════════════════════════════ */}
      <header className="stc-hero">
        <div className="stc-shell">
          <div className="stc-hero__grid">
            <div>
              <p className="stc-hero__kicker">The Sell This™ Series · A Sales Playbook for Bakers</p>

              <h1 className="stc-hero__headline">
                <span>Amazing<br />Cakes.</span>
                <em>Not Enough Orders?</em>
              </h1>

              <p className="stc-hero__sub">
                You don't need to learn how to bake another cake.<br />
                <strong>You need to learn how to sell the cakes you already know how to make.</strong>
              </p>
              <p className="stc-hero__sub" style={{ marginTop: "-8px" }}>
                A practical sales playbook for bakers who know how to make great cakes  -  but want to get better at turning attention, enquiries and conversations into actual orders.
              </p>

              <Cta label="Get Your Copy Today" />
            </div>

            <div className="stc-hero__book">
              <img
                src="/sell-this-cakes-cover.png"
                alt="Sell This: Cakes  -  How to Get More Cake Orders Without Begging People to Buy"
                width="680"
                height="960"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </header>

      <Rule />

      {/* ══════════════════════════════════
          ② YOUR CAKE MAY NOT BE THE PROBLEM
          ══════════════════════════════════ */}
      <section className="stc-section stc-section--shaded">
        <div className="stc-reading">
          <span className="stc-eyebrow">The real problem</span>
          <h2 className="stc-h2">Your cake may not be the problem.</h2>
          <p className="stc-body">A good cake does not automatically bring customers. Someone has to:</p>

          <ul className="stc-checklist" style={{ marginBottom: "32px" }}>
            {["Notice it", "Want it", "Understand what you're offering", "Trust you", "Feel that it's right for them", "And know exactly how to order"].map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <p className="stc-body">That's where selling comes in. Because when someone asks:</p>

          <div className="stc-chat">
            <div className="stc-chat__bubble stc-chat__bubble--them">
              😍 <strong>"Wow! Beautiful! How much?"</strong>
            </div>
            <div className="stc-chat__bubble stc-chat__bubble--you">
              ₦35,000
            </div>
            <div className="stc-chat__bubble stc-chat__bubble--silence">
              ... silence.
            </div>
          </div>

          <p className="stc-body">They may not be asking only about the price. They may also be wondering:</p>

          <div style={{ margin: "28px 0", display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              '"Is this cake right for my occasion?"',
              '"Can I trust this baker?"',
              '"Will it actually look this good in person?"',
              '"Is it worth what I\'m paying?"',
            ].map(q => (
              <p key={q} style={{ margin: 0, padding: "14px 20px", background: "#fff", border: "1px solid var(--stc-border)", borderRadius: "8px", fontSize: "0.97rem", fontStyle: "italic", color: "var(--stc-fg)" }}>
                {q}
              </p>
            ))}
          </div>

          <p className="stc-body">If all you do is send a price, you may be answering a question they weren't really asking.</p>
          <p className="stc-body"><strong className="stc-strong">SELL THIS: CAKES shows you what to do instead.</strong></p>
        </div>
      </section>

      {/* ══════════════════════════════════
          ③ STOP SELLING CAKE
          ══════════════════════════════════ */}
      <div className="stc-bigidea">
        <div className="stc-narrow">
          <span className="stc-eyebrow" style={{ color: "var(--stc-gold)" }}>The big shift</span>
          <p className="stc-bigidea__stop">
            Stop selling <span>cake.</span>
          </p>
          <p className="stc-bigidea__sub">
            Start selling what the cake helps your customer do.
          </p>

          <p style={{ color: "#9A8A7A", fontSize: "0.9rem", marginBottom: "20px", textTransform: "uppercase", letterSpacing: "0.14em", fontWeight: 600 }}>
            People don't buy cake. They buy:
          </p>

          <div className="stc-occasion-grid">
            {[
              '"I need a birthday cake."',
              '"I want to surprise my wife."',
              '"Something beautiful for our wedding."',
              '"A cake for my child\'s special day."',
              '"Something for an important event."',
              '"A celebration worth remembering."',
            ].map(o => (
              <div key={o} className="stc-occasion-grid__item">{o}</div>
            ))}
          </div>

          <p className="stc-bigidea__truth">
            Your customer is buying more than cake.{" "}
            <strong>They're buying the experience and meaning around the occasion.</strong>{" "}
            This book shows you how to communicate that clearly  -  so your marketing speaks to the person who is actually ready to buy.
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════
          ④ THE 7-STEP SYSTEM
          ══════════════════════════════════ */}
      <section className="stc-system stc-section">
        <div className="stc-reading">
          <span className="stc-eyebrow">The framework</span>
          <h2 className="stc-h2">The 7-Step System for Selling Your Cakes</h2>
          <p className="stc-body">Inside the book, you'll learn the <strong className="stc-strong">SELL THIS</strong> system  -  a complete sales process, not random tips.</p>

          <div className="stc-system__steps">
            {steps.map(s => (
              <div key={s.num} className="stc-system__step">
                <span className="stc-system__num">{s.num}</span>
                <div>
                  <p className="stc-system__word">{s.word}</p>
                  <p className="stc-system__desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          ⑤ NOT ANOTHER BAKING BOOK
          ══════════════════════════════════ */}
      <div className="stc-notbaking">
        <div className="stc-narrow">
          <p className="stc-notbaking__big">
            This is not another<br />baking book.
          </p>

          <div className="stc-contrast">
            <div className="stc-contrast__row">
              <div className="stc-contrast__left">How to bake a better cake</div>
              <div className="stc-contrast__vs">vs</div>
              <div className="stc-contrast__right">How to sell the cakes you already make</div>
            </div>
            <div className="stc-contrast__row">
              <div className="stc-contrast__left">Another baking technique</div>
              <div className="stc-contrast__vs">vs</div>
              <div className="stc-contrast__right">A sales conversation that converts</div>
            </div>
            <div className="stc-contrast__row">
              <div className="stc-contrast__left">More decorating skills</div>
              <div className="stc-contrast__vs">vs</div>
              <div className="stc-contrast__right">More orders from the skills you have</div>
            </div>
          </div>

          <p className="stc-notbaking__body">
            It's a practical sales playbook built around the way cakes are actually bought and sold:{" "}
            <strong>Instagram. WhatsApp. DMs. Comments. Referrals. Word of mouth.</strong>
          </p>
          <p className="stc-notbaking__body">
            No complicated business theory. No long lectures. Just practical strategies, scripts and tools you can start using in your cake business.
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════
          ⑥ WHAT YOU'LL ACTUALLY GET
          ══════════════════════════════════ */}
      <section className="stc-section">
        <div className="stc-shell">
          <div className="stc-reading" style={{ width: "100%", maxWidth: "680px" }}>
            <span className="stc-eyebrow">Inside the book</span>
            <h2 className="stc-h2">Here's what you'll actually get.</h2>
            <p className="stc-body">Practical tools you can use immediately  -  not theory you'll forget.</p>
          </div>

          <div className="stc-tools__grid" style={{ marginTop: "48px" }}>
            {tools.map((t, i) => (
              <div key={i} className="stc-tool">
                <div className="stc-tool__num">{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <p className="stc-tool__name">{t.label}</p>
                  <p className="stc-tool__title">{t.title}</p>
                  <p className="stc-tool__desc">{t.desc}</p>
                  <div className="stc-tool__tags">
                    {t.tags.map(tag => (
                      <span key={tag} className="stc-tool__tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Rule />

      {/* ══════════════════════════════════
          ⑦ HOW MUCH? MOMENT
          ══════════════════════════════════ */}
      <section className="stc-section stc-section--panel">
        <div className="stc-reading">
          <span className="stc-eyebrow">The transformation</span>
          <h2 className="stc-h2">Imagine what changes when you stop guessing what to say.</h2>
          <p className="stc-body">Here's the difference between what most bakers do  -  and what this book teaches you to do instead.</p>

          <div className="stc-convo-split">
            <div className="stc-convo-card">
              <div className="stc-convo-card__header stc-convo-card__header--old">
                Before  -  Old way
              </div>
              <div className="stc-convo-card__body">
                <div className="stc-convo-card__msg stc-convo-card__msg--q">How much?</div>
                <div className="stc-convo-card__msg stc-convo-card__msg--a">₦35,000.</div>
                <div className="stc-convo-card__msg stc-convo-card__msg--silence">... nothing.</div>
              </div>
            </div>

            <div className="stc-convo-card">
              <div className="stc-convo-card__header stc-convo-card__header--new">
                After  -  Better way
              </div>
              <div className="stc-convo-card__body">
                <div className="stc-convo-card__msg stc-convo-card__msg--q">How much?</div>
                <div className="stc-convo-card__msg stc-convo-card__msg--a" style={{ maxWidth: "100%", borderRadius: "14px 14px 4px 14px" }}>
                  It's ₦35,000. Is the cake for a birthday, anniversary, or another occasion? If you tell me the date and number of people you're serving, I can recommend the best option for you.
                </div>
              </div>
            </div>
          </div>

          <p className="stc-body" style={{ marginTop: "32px" }}>Now you have a conversation. You can understand what the customer needs. You can recommend the right option. You can explain the value. And you can make it easier for them to decide.</p>
          <p className="stc-body"><strong className="stc-strong">You're not forcing anyone to buy. You're simply helping the right customer make a decision.</strong></p>
        </div>
      </section>

      {/* ══════════════════════════════════
          ⑧ I DON'T LIKE SELLING
          ══════════════════════════════════ */}
      <section className="stc-section">
        <div className="stc-reading">
          <span className="stc-eyebrow">A common concern</span>
          <h2 className="stc-h2">"But I don't like selling."</h2>
          <p className="stc-body">You don't have to become pushy. You don't have to beg people to buy. You don't have to chase everyone. And you don't have to give discounts every time someone says your price is high.</p>

          <div className="stc-selling-eq">
            <div className="stc-selling-eq__row">
              <div className="stc-selling-eq__left">Forcing people</div>
              <div className="stc-selling-eq__op">≠</div>
              <div className="stc-selling-eq__right">Good selling</div>
            </div>
            <div className="stc-selling-eq__row">
              <div className="stc-selling-eq__left">Begging to buy</div>
              <div className="stc-selling-eq__op">≠</div>
              <div className="stc-selling-eq__right">Good selling</div>
            </div>
            <div className="stc-selling-eq__row">
              <div className="stc-selling-eq__left">Pressure tactics</div>
              <div className="stc-selling-eq__op">≠</div>
              <div className="stc-selling-eq__right">Good selling</div>
            </div>
          </div>

          <p className="stc-body">Good selling is about making it easier for the right person to:</p>
          <ul className="stc-checklist">
            {["Notice your cake.", "Understand your offer.", "Trust you.", "See the value.", "And say yes."].map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <Rule />

      {/* ══════════════════════════════════
          ⑨ WHO THIS IS FOR
          ══════════════════════════════════ */}
      <section className="stc-section stc-section--shaded">
        <div className="stc-reading">
          <span className="stc-eyebrow">Is this book for you?</span>
          <h2 className="stc-h2">This book is for you if...</h2>
          <p className="stc-body">You are a baker who:</p>

          <ul className="stc-checklist">
            {[
              "Makes good cakes but struggles to get enough orders",
              "Gets likes and comments but not enough customers",
              "Often hears 'How much?' and then gets ghosted",
              "Finds it difficult to explain your prices confidently",
              "Struggles when customers say your cake is too expensive",
              "Relies heavily on friends, family and referrals",
              "Doesn't know exactly who your best customers are",
              "Wants a clearer way to sell through WhatsApp and social media",
              "Wants to turn more enquiries into actual orders",
              "Wants more repeat customers and referrals",
            ].map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <p style={{ marginTop: "32px", fontSize: "1.05rem", fontWeight: 600, color: "var(--stc-fg)", fontStyle: "italic", borderLeft: "3px solid var(--stc-caramel)", paddingLeft: "20px", lineHeight: 1.6 }}>
            "If you can bake the cake, but selling the cake is where things get difficult  -  this book was written for you."
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════
          ⑩ FOLLOWERS VS CUSTOMERS
          ══════════════════════════════════ */}
      <div className="stc-followers">
        <div className="stc-narrow">
          <span className="stc-eyebrow" style={{ color: "var(--stc-gold)" }}>The real metric</span>
          <p className="stc-followers__no">You don't need more followers.</p>
          <p className="stc-followers__yes">
            You need to know what to do with the attention you already get.
          </p>

          <div className="stc-metric-split">
            <div className="stc-metric-split__side stc-metric-split__side--left">
              <div className="stc-metric-split__num">❤️</div>
              <div className="stc-metric-split__label">Likes</div>
            </div>
            <div className="stc-metric-split__arr">→</div>
            <div className="stc-metric-split__side stc-metric-split__side--right">
              <div className="stc-metric-split__num">₦</div>
              <div className="stc-metric-split__label">Enquiries → Orders → Revenue</div>
            </div>
          </div>

          <p className="stc-followers__body">
            More followers can be nice. More likes can feel good. But your business doesn't run on likes.{" "}
            <strong>Likes don't pay your ingredient supplier.</strong>
          </p>
          <p className="stc-followers__body" style={{ marginTop: "16px" }}>
            The real question is: <strong>"How do I turn attention into enquiries, orders and returning customers?"</strong>{" "}
            That's what SELL THIS: CAKES helps you work on.
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════
          ⑪ YOUR NEXT ORDER
          ══════════════════════════════════ */}
      <section className="stc-section">
        <div className="stc-reading" style={{ textAlign: "center" }}>
          <span className="stc-eyebrow">The insight</span>
          <h2 className="stc-h2">Your next order may not require a better cake.</h2>
          <p className="stc-body">It may require a better:</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "12px", margin: "32px 0" }}>
            {["Message.", "Offer.", "Conversation.", "Follow-up.", "Customer experience."].map(item => (
              <div key={item} style={{
                padding: "20px 16px",
                background: "var(--stc-bg-panel)",
                border: "1px solid var(--stc-border)",
                borderRadius: "6px",
                fontFamily: "var(--stc-serif)",
                fontSize: "1.05rem",
                fontWeight: 600,
                color: "var(--stc-fg)",
                textAlign: "center",
              }}>
                {item}
              </div>
            ))}
          </div>

          <p className="stc-body">You already have the baking skill. Now learn the selling skill that helps people see the value in what you make.</p>
          <div style={{ marginTop: "36px" }}>
            <Cta label="Get Your Copy Today" />
          </div>
        </div>
      </section>

      <Rule />

      {/* ══════════════════════════════════
          ⑫ FINAL OFFER
          ══════════════════════════════════ */}
      <section className="stc-offer">
        <div className="stc-shell">
          <div className="stc-offer__grid">
            <div className="stc-offer__book">
              <img
                src="/sell-this-cakes-cover.png"
                alt="Sell This: Cakes book"
                width="680"
                height="960"
                loading="lazy"
              />
            </div>

            <div>
              <span className="stc-eyebrow">Get the book</span>
              <h2 className="stc-h2">Get Sell This: Cakes Today</h2>
              <p style={{ fontFamily: "var(--stc-serif)", fontSize: "1.1rem", fontStyle: "italic", color: "var(--stc-caramel)", marginBottom: "24px" }}>
                Amazing cakes deserve to be sold.
              </p>

              <ul className="stc-offer__outcomes">
                {[
                  "Find the right buyers.",
                  "Create content that attracts attention.",
                  "Build offers people understand.",
                  "Turn 'How much?' into a conversation.",
                  "Handle price objections.",
                  "Follow up without begging.",
                  "Turn happy customers into repeat buyers and referrals.",
                ].map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <Cta label="Get Your Copy Today" full />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          ⑬ FAQ
          ══════════════════════════════════ */}
      <section className="stc-faq stc-section">
        <div className="stc-reading">
          <span className="stc-eyebrow">Questions</span>
          <h2 className="stc-h2">Frequently asked questions</h2>
          <FaqAccordion />
        </div>
      </section>

      <Rule />

      {/* ══════════════════════════════════
          ⑭ FINAL CLOSE
          ══════════════════════════════════ */}
      <div className="stc-close">
        <div className="stc-narrow">
          <p className="stc-close__pre">
            You already know how to make the cake.
          </p>
          <p className="stc-close__main">
            Now learn how to <span>sell it.</span>
          </p>

          <p style={{ color: "#BFB09A", marginBottom: "8px", fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>
            Sell This: Cakes
          </p>
          <p style={{ color: "#7A6A5A", marginBottom: "40px", fontSize: "0.95rem", fontStyle: "italic" }}>
            How to Get More Cake Orders Without Begging People to Buy
          </p>

          <Cta label="Get Your Copy Today" gold />
        </div>
      </div>

    </div>
  );
}
