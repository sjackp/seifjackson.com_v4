import React, { useEffect, useMemo, useRef, useState } from "react";

type InteractiveDemoProps = {
  inputSrc?: string;
  garmentSrc?: string;
  resultSrc?: string;
  className?: string;
};

const DEFAULTS = {
  inputSrc:
    "https://www.seifjackson.com/tryfit/int-demo/seifjackson_A_full-body_mirror_selfie_of_a_young_man_bedroom__3ab201c6-9333-497d-ba65-c0a58cd7c880_0(1).png",
  garmentSrc: "https://www.seifjackson.com/tryfit/int-demo/zarapants.png",
  resultSrc: "https://www.seifjackson.com/tryfit/int-demo/tryfit-preview_1758509274250.jpg",
};

export default function InteractiveDemo({
  inputSrc = DEFAULTS.inputSrc,
  garmentSrc = DEFAULTS.garmentSrc,
  resultSrc = DEFAULTS.resultSrc,
  className,
}: InteractiveDemoProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const statusRef = useRef<HTMLParagraphElement>(null);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = resultSrc;
  }, [resultSrc]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  const resultImgClass = useMemo(() => {
    const base = "demo-result-img";
    const state = revealed ? "is-revealed" : "is-blurred";
    const gen = isGenerating ? "is-generating" : "";
    return [base, state, gen].filter(Boolean).join(" ");
  }, [revealed, isGenerating]);

  const onGenerate = () => {
    if (isGenerating) return;
    // If already revealed, take user to TryFit app
    if (revealed) {
      window.location.href = "https://tryfit.nazamly.com";
      return;
    }
    setRevealed(false);
    setIsGenerating(true);
    if (statusRef.current) statusRef.current.textContent = "Generating preview…";

    const durationMs = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? 600
      : 1400;
    timerRef.current = window.setTimeout(() => {
      setIsGenerating(false);
      setRevealed(true);
      if (statusRef.current) statusRef.current.textContent = "Preview ready";
    }, durationMs);
  };

  return (
    <section
      className={["interactive-demo", className || ""].join(" ").trim()}
      aria-label="Interactive demo"
    >
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-2 rounded-full bg-orange-accent/10 px-3 py-1 text-xs font-semibold text-orange-accent font-mono">
          Interactive Demo
        </span>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="rounded-2xl p-0 sm:p-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
            {/* Your Photo */}
            <div className="rounded-2xl border-2 border-dashed border-dark-accent bg-dark-accent/20 p-3 text-center">
              <div className="text-xs font-medium text-theme-muted mb-2 font-geist">Your Photo</div>
              <div className="aspect-[3/4] rounded-lg overflow-hidden bg-dark-accent/30">
                <img src={inputSrc} alt="Input user photo" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>

            {/* Garment Photo */}
            <div className="rounded-2xl border-2 border-dashed border-dark-accent bg-dark-accent/20 p-3 text-center">
              <div className="text-xs font-medium text-theme-muted mb-2 font-geist">Garment Photo</div>
              <div className="aspect-[3/4] rounded-lg overflow-hidden bg-dark-accent/30">
                <img src={garmentSrc} alt="Garment photo" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>

            {/* Generated Result */}
            <div className="rounded-2xl border-2 border-orange-accent/60 bg-orange-accent/5 p-4 text-center">
              <div className="text-sm font-medium text-orange-accent mb-2 font-geist">Generated Result</div>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-dark-accent/30">
                <img src={resultSrc} alt="Generated result" className={resultImgClass} />
                <div className={isGenerating ? "spinner-overlay active" : "spinner-overlay"} aria-hidden="true">
                  <div className="spinner-wheel" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={onGenerate}
              disabled={isGenerating}
              aria-busy={isGenerating}
              className="inline-flex items-center justify-center rounded-xl bg-orange-accent text-black px-4 py-2 text-xs font-bold font-geist shadow hover:bg-orange-300 disabled:opacity-60 button-click"
            >
              {isGenerating ? (
                <>
                  <svg
                    className="mr-2 h-4 w-4 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                  </svg>
                  Generating…
                </>
              ) : revealed ? (
                "Take Me to TryFit"
              ) : (
                "Generate my first look"
              )}
            </button>
            <p ref={statusRef} className="sr-only" aria-live="polite"></p>
          </div>
        </div>
      </div>
      <style>
        {`
        .interactive-demo .demo-result-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: filter 700ms ease, transform 700ms ease, opacity 400ms ease;
        }
        .interactive-demo .demo-result-img.is-blurred {
          filter: blur(30px) saturate(0.8) brightness(1.05);
          transform: scale(1.03);
        }
        .interactive-demo .demo-result-img.is-revealed {
          filter: blur(0);
          transform: scale(1);
        }
        .interactive-demo .demo-result-img.is-generating {
          opacity: 0.06;
          filter: blur(45px) saturate(0.6) brightness(0.9);
          transform: scale(1.03);
        }
        .interactive-demo .spinner-overlay {
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
          background: radial-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.45));
          opacity: 0;
          transition: opacity 180ms ease;
          pointer-events: none;
        }
        .interactive-demo .spinner-overlay.active { opacity: 1; }
        .interactive-demo .spinner-wheel {
          width: 56px;
          height: 56px;
          border-radius: 9999px;
          border: 4px solid rgba(255,255,255,0.28);
          border-top-color: #fb923c;
          animation: spin 800ms linear infinite;
          box-shadow: 0 2px 10px rgba(0,0,0,0.15);
        }
        @media (prefers-reduced-motion: reduce) {
          .interactive-demo .spinner-wheel { animation-duration: 1200ms; }
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        `}
      </style>
    </section>
  );
}


