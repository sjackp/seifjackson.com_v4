import { Lock, ExternalLink } from "lucide-react";

export default function BrandsSection() {
  return (
    <section id="brands" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-6xl font-black text-theme mb-4 font-geist tracking-tight transition-colors duration-500">
            My <span className="gradient-text">Brands</span>
          </h2>
          <p className="text-theme-muted text-lg max-w-2xl mx-auto font-geist font-light transition-colors duration-500">
            Explore the different ventures and fashion projects I'm working on
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Hidden Brand 1 */}
          <div className="bg-dark-accent/20 backdrop-blur-xl rounded-2xl border border-dark-accent/30 p-8 relative overflow-hidden opacity-60">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-500/10 to-gray-600/10 backdrop-blur-sm"></div>
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 bg-gray-400/20 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Lock className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-400 mb-2 font-mono">Coming Soon</h3>
              <p className="text-gray-500 text-sm font-geist">Something exciting is brewing...</p>
            </div>
          </div>

          {/* Mirai - Active Brand */}
          <div className="bg-dark-accent/30 backdrop-blur-xl rounded-2xl border border-orange-accent/40 overflow-hidden smooth-hover lift-hover glow-hover cursor-pointer transform scale-105">
            <a
              href="https://iridescent-mirage-seifjackson.replit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-8 text-center h-full"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-accent to-orange-light rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-black text-black font-mono">M</span>
              </div>
              <h3 className="text-2xl font-black text-theme mb-2 font-mono transition-colors duration-500">Mirai</h3>
              <p className="text-theme-muted text-sm font-geist font-light mb-4 transition-colors duration-500">
                A modern linenwear brand blending minimalist design with desert-inspired tones, crafted for comfort, elegance, and timeless style—designed and manufactured in Egypt.
              </p>
              <div className="flex items-center justify-center gap-2 text-orange-accent">
                <span className="text-xs font-mono">explore.exe</span>
                <ExternalLink className="w-3 h-3" />
              </div>
            </a>
          </div>

          {/* Hidden Brand 2 */}
          <div className="bg-dark-accent/20 backdrop-blur-xl rounded-2xl border border-dark-accent/30 p-8 relative overflow-hidden opacity-60">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-500/10 to-gray-600/10 backdrop-blur-sm"></div>
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 bg-gray-400/20 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Lock className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-400 mb-2 font-mono">Coming Soon</h3>
              <p className="text-gray-500 text-sm font-geist">Another project in development...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}