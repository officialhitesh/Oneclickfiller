import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const download = () => {
    fetch("/oneclickfiller.zip")
      .then((res) => {
        if (!res.ok) throw new Error(`Download failed: ${res.status}`);
        return res.blob();
      })
      .then((blob) => {
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "oneclickfiller.zip";
        a.click();
        URL.revokeObjectURL(a.href);
      })
      .catch((err) => alert(err.message));
  };

  const ink = "#0f0f14";

  return (
    <div
      className="min-h-screen relative"
      style={{
        background: "#dcd9ff",
        color: ink,
        fontFamily:
          "'Plus Jakarta Sans', 'Inter', system-ui, -apple-system, sans-serif",
      }}
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
      />
      <style>{`
        @keyframes ocfRise {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ocfPop {
          0%   { opacity: 0; transform: scale(0.92); }
          60%  { transform: scale(1.04); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes ocfFloat {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-6px); }
        }
        @keyframes ocfGridShift {
          from { background-position: 0 0, 0 0; }
          to   { background-position: 44px 44px, 44px 44px; }
        }
        .ocf-rise { opacity: 0; animation: ocfRise 0.7s cubic-bezier(.2,.7,.2,1) forwards; }
        .ocf-pop  { opacity: 0; animation: ocfPop 0.55s cubic-bezier(.2,.8,.2,1) forwards; }
        .ocf-float { animation: ocfFloat 4s ease-in-out infinite; }
        .ocf-grid { animation: ocfGridShift 14s linear infinite; }
        .ocf-card { transition: transform .25s cubic-bezier(.2,.7,.2,1), box-shadow .25s ease; }
        .ocf-card:hover { transform: translateY(-4px); box-shadow: 0 8px 0 #0f0f14; }
        .ocf-btn { transition: transform .2s cubic-bezier(.2,.7,.2,1), box-shadow .2s ease; }
        .ocf-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 0 #0f0f14; }
        .ocf-btn:active { transform: translateY(2px); box-shadow: 0 1px 0 #0f0f14; }
        @media (prefers-reduced-motion: reduce) {
          .ocf-rise, .ocf-pop, .ocf-float, .ocf-grid { animation: none !important; opacity: 1 !important; }
        }
      `}</style>
      {/* grid background */}
      <div
        className="absolute inset-0 pointer-events-none ocf-grid"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,15,20,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(15,15,20,0.08) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse at center, black 60%, transparent 100%)",
        }}
      />

      {/* Top nav */}
      <header className="relative z-10 mx-auto max-w-6xl px-6 pt-6 flex items-center justify-between">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center text-lg font-extrabold ocf-float"
          style={{
            background: "#fff",
            border: `1.5px solid ${ink}`,
            boxShadow: `0 2px 0 ${ink}`,
          }}
        >
          ⚡
        </div>
        <nav className="hidden sm:flex items-center gap-8 text-[15px] font-semibold">
          <a href="#install" className="hover:opacity-70 transition-opacity">Install</a>
          <a href="#about" className="hover:opacity-70 transition-opacity">About</a>
          <a href="#disclaimer" className="hover:opacity-70 transition-opacity">Notes</a>
        </nav>
        <button
          onClick={download}
          className="px-5 py-2.5 rounded-xl text-sm font-bold ocf-btn"
          style={{
            background: "#fff",
            border: `1.5px solid ${ink}`,
            boxShadow: `0 3px 0 ${ink}`,
          }}
        >
          Download
        </button>
      </header>

      {/* Hero */}
      <main className="relative z-10 mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="max-w-3xl">
          <div>
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold ocf-pop"
              style={{
                background: "#fff",
                border: `1.5px solid ${ink}`,
                animationDelay: "0.05s",
              }}
            >
              ✻ Hey, it's OneClickFiller
            </span>

            <h1
              className="mt-6 font-extrabold tracking-tight leading-[0.95] ocf-rise"
              style={{
                fontSize: "clamp(40px, 7vw, 88px)",
                letterSpacing: "-0.03em",
                animationDelay: "0.15s",
              }}
            >
              The
              <br />
              Feedback Form
              <br />
              Auto Filler <span className="opacity-70">:)</span>
            </h1>

            <p
              className="mt-6 text-lg max-w-lg opacity-80 leading-relaxed ocf-rise"
              style={{ animationDelay: "0.35s" }}
            >
              A tiny Chrome extension that fills your college feedback form in a
              single click. Pick a rating, drop a comment, hit fill. Done.
            </p>

            <div
              className="mt-8 flex flex-wrap gap-3 ocf-rise"
              style={{ animationDelay: "0.5s" }}
            >
              <button
                onClick={download}
                className="px-6 py-3.5 rounded-xl text-[15px] font-bold ocf-btn"
                style={{
                  background: "#fff",
                  border: `1.5px solid ${ink}`,
                  boxShadow: `0 4px 0 ${ink}`,
                }}
              >
                Download .zip
              </button>
              <a
                href="#install"
                className="px-6 py-3.5 rounded-xl text-[15px] font-bold ocf-btn"
                style={{
                  background: "transparent",
                  border: `1.5px solid ${ink}`,
                  boxShadow: `0 4px 0 ${ink}`,
                }}
              >
                See how it works
              </a>
            </div>
          </div>
        </div>

        {/* Install steps */}
        <section id="install" className="mt-28">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold"
            style={{ background: "#fff", border: `1.5px solid ${ink}` }}
          >
            ✻ Install in 60 seconds
          </span>
          <h2
            className="mt-5 font-extrabold tracking-tight"
            style={{ fontSize: "clamp(32px, 5vw, 56px)", letterSpacing: "-0.02em" }}
          >
            Add it to Chrome.
          </h2>
          <p className="mt-3 opacity-70 max-w-xl">
            Works on Chrome, Edge, Brave, Arc & Opera — Windows, macOS,
            Linux & ChromeOS.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              { t: "Download the .zip", d: <>Click <b>Download .zip</b>. The file <code className="px-1.5 py-0.5 rounded bg-black/5 text-[13px]">oneclickfiller.zip</code> lands in your Downloads.</> },
              { t: "Unzip the folder", d: <>Right-click → <b>Extract All</b> (Windows) or double-click (Mac). Keep the folder safe.</> },
              { t: "Open extensions page", d: <>Paste <code className="px-1.5 py-0.5 rounded bg-black/5 text-[13px]">chrome://extensions</code> in the address bar.</> },
              { t: "Enable Developer mode", d: <>Toggle <b>Developer mode</b> ON (top-right corner).</> },
              { t: "Load unpacked", d: <>Click <b>Load unpacked</b> and pick the unzipped folder. Done ✅</> },
              { t: "Pin & use", d: <>Pin via the 🧩 icon. Open your form → click → fill → submit.</> },
            ].map((s, i) => (
              <div
                key={i}
                className="rounded-2xl p-5 ocf-card ocf-rise"
                style={{
                  background: "#fff",
                  border: `1.5px solid ${ink}`,
                  boxShadow: `0 4px 0 ${ink}`,
                  animationDelay: `${0.1 + i * 0.07}s`,
                }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-extrabold"
                    style={{
                      background: "#dcd9ff",
                      border: `1.5px solid ${ink}`,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-bold text-[17px]">{s.t}</h3>
                </div>
                <p className="mt-3 text-[14px] opacity-80 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>

          <div
            className="mt-6 rounded-2xl p-5 text-sm leading-relaxed"
            style={{
              background: "#fff7d6",
              border: `1.5px solid ${ink}`,
              boxShadow: `0 4px 0 ${ink}`,
            }}
          >
            <b>Stuck?</b> If Chrome says "Manifest file is missing or unreadable",
            you picked the wrong folder — select the folder that <i>contains</i>{" "}
            <code className="px-1 rounded bg-black/5">manifest.json</code>, not its parent.
          </div>
        </section>

        {/* Disclaimer */}
        <section
          id="disclaimer"
          className="mt-20 rounded-3xl p-7 sm:p-9"
          style={{
            background: "#0f0f14",
            color: "#fff",
            border: `1.5px solid ${ink}`,
            boxShadow: `0 6px 0 ${ink}`,
          }}
        >
          <span
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold"
            style={{ background: "#dcd9ff", color: ink }}
          >
            ✻ A small note
          </span>
          <h3 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight">
            Use it honestly.
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed opacity-80 max-w-2xl">
            OneClickFiller is a student-built helper. Your feedback shapes your
            teachers and your college — please give responses that genuinely
            reflect your experience. The makers are not responsible for misuse
            or any consequences of automated form filling.
          </p>
        </section>

        {/* Footer */}
        <footer
          id="about"
          className="mt-16 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pb-10"
        >
          <div />
          <div className="text-sm opacity-60">© {new Date().getFullYear()} OneClickFiller</div>
        </footer>
      </main>
    </div>
  );
}
