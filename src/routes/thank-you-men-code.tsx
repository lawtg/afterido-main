import { createFileRoute } from "@tanstack/react-router";
import menCodeCss from "../styles-mencode.css?url";

const downloadUrl = "https://drive.google.com/drive/folders/1Pm-wm-TAJgX8r_6XR77Abrm6VIzy7nk0?usp=sharing";

export const Route = createFileRoute("/thank-you-men-code")({
  head: () => ({
    meta: [
      { title: "Thank You — Download The Men Code" },
      { name: "description", content: "Your purchase was successful. Download The Men Code now." },
      { name: "robots", content: "noindex, nofollow" },
    ],
    links: [
      { rel: "stylesheet", href: menCodeCss },
    ],
    scripts: [
      {
        type: "text/javascript",
        children: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1409850721327061');fbq('track','Purchase');`,
      },
    ],
  }),
  component: ThankYouMenCode,
});

function ThankYouMenCode() {
  return (
    <div className="mc-page">

      {/* Meta Pixel noscript */}
      <noscript>
        <img height="1" width="1" style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1409850721327061&ev=Purchase&noscript=1"
          alt=""
        />
      </noscript>

      {/* ── TOP BAR ── */}
      <div style={{
        background: "var(--mc-red)",
        padding: "12px 16px",
        textAlign: "center",
        fontFamily: "'Poppins', Arial, sans-serif",
        fontSize: "0.9rem",
        fontWeight: 600,
        color: "#fff",
        letterSpacing: "0.04em",
      }}>
        PAYMENT CONFIRMED ✓
      </div>

      {/* ── HERO ── */}
      <div style={{
        background: "var(--mc-black)",
        padding: "80px 20px",
        textAlign: "center",
        borderBottom: "3px solid var(--mc-red)",
      }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <div style={{
            width: "72px", height: "72px",
            background: "var(--mc-red)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 28px",
            fontSize: "2rem",
          }}>
            ✓
          </div>

          <h1 style={{
            fontFamily: "'Anton', Georgia, serif",
            fontSize: "clamp(2.4rem, 6vw, 4rem)",
            fontWeight: 400,
            letterSpacing: "0.02em",
            color: "#fff",
            margin: "0 0 16px",
            lineHeight: 1.1,
          }}>
            Thank You. Your Copy Is Ready.
          </h1>

          <p style={{
            fontFamily: "'Poppins', Arial, sans-serif",
            fontSize: "1.15rem",
            color: "#C0C0C0",
            margin: "0 0 12px",
            lineHeight: 1.75,
          }}>
            Your payment was successful. Click the button below to download <strong style={{ color: "#fff" }}>The Men Code</strong> right now.
          </p>
          <p style={{
            fontFamily: "'Poppins', Arial, sans-serif",
            fontSize: "0.9rem",
            color: "#777",
            margin: "0 0 40px",
          }}>
            Save it to your phone or read it privately — no one will know.
          </p>

          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "18px 48px",
              background: "var(--mc-red)",
              color: "#fff",
              border: "2px solid var(--mc-red)",
              borderRadius: "4px",
              fontFamily: "'Poppins', Arial, sans-serif",
              fontSize: "1.05rem",
              fontWeight: 700,
              textDecoration: "none",
              letterSpacing: "0.04em",
              transition: "background 150ms ease",
            }}
          >
            ↓ Download The Men Code Now
          </a>

          <p style={{
            fontFamily: "'Poppins', Arial, sans-serif",
            fontSize: "0.82rem",
            color: "#555",
            marginTop: "16px",
          }}>
            Opens in Google Drive · Download as PDF · Works on any phone
          </p>
        </div>
      </div>

      {/* ── NEXT STEPS ── */}
      <div style={{
        background: "var(--mc-white)",
        padding: "64px 20px",
        borderBottom: "1px solid #E0E0E0",
      }}>
        <div style={{ maxWidth: "620px", margin: "0 auto", textAlign: "center" }}>
          <p style={{
            fontFamily: "'Poppins', Arial, sans-serif",
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--mc-red)",
            marginBottom: "16px",
          }}>
            What to do next
          </p>
          <h2 style={{
            fontFamily: "'Anton', Georgia, serif",
            fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)",
            fontWeight: 400,
            letterSpacing: "0.02em",
            color: "#111",
            margin: "0 0 32px",
          }}>
            Start reading today. Start the 30-day plan tonight.
          </h2>

          <div style={{ display: "grid", gap: "16px", textAlign: "left" }}>
            {[
              { num: "01", title: "Download the book", desc: "Click the download button above and save the PDF to your phone or device." },
              { num: "02", title: "Start with Chapter 1", desc: "Read at your own pace. The book is written in plain language — no grammar, no shame." },
              { num: "03", title: "Begin the 30-day plan", desc: "Chapter 9 contains your action plan. Start it tonight. Small steps, consistent results." },
              { num: "04", title: "Use the bonuses", desc: "Your 30-day tracker, doctor script and 7-day stamina routine are all included in the same download folder." },
            ].map((step) => (
              <div key={step.num} style={{
                display: "grid",
                gridTemplateColumns: "48px 1fr",
                gap: "0 16px",
                padding: "20px",
                background: "#F7F7F7",
                borderRadius: "4px",
                borderLeft: "3px solid var(--mc-red)",
                alignItems: "start",
              }}>
                <span style={{
                  fontFamily: "'Anton', Georgia, serif",
                  fontSize: "1.5rem",
                  color: "var(--mc-red)",
                  lineHeight: 1,
                  paddingTop: "2px",
                }}>
                  {step.num}
                </span>
                <div>
                  <p style={{ margin: "0 0 4px", fontWeight: 700, fontSize: "1rem", color: "#111", fontFamily: "'Poppins', Arial, sans-serif" }}>
                    {step.title}
                  </p>
                  <p style={{ margin: 0, fontSize: "0.93rem", color: "#555", lineHeight: 1.65, fontFamily: "'Poppins', Arial, sans-serif" }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── REMINDER + DOWNLOAD ── */}
      <div style={{
        background: "var(--mc-black)",
        padding: "56px 20px",
        textAlign: "center",
        borderTop: "3px solid var(--mc-red)",
      }}>
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <p style={{
            fontFamily: "'Poppins', Arial, sans-serif",
            fontSize: "1rem",
            color: "#AAA",
            marginBottom: "8px",
          }}>
            Need the download link again?
          </p>
          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "15px 36px",
              background: "transparent",
              color: "#fff",
              border: "2px solid #fff",
              borderRadius: "4px",
              fontFamily: "'Poppins', Arial, sans-serif",
              fontSize: "0.95rem",
              fontWeight: 700,
              textDecoration: "none",
              letterSpacing: "0.04em",
            }}
          >
            ↓ Download Again
          </a>
          <p style={{
            fontFamily: "'Poppins', Arial, sans-serif",
            fontSize: "0.8rem",
            color: "#555",
            marginTop: "20px",
          }}>
            Questions? Contact us at any time. We are happy to help.
          </p>
        </div>
      </div>

    </div>
  );
}
