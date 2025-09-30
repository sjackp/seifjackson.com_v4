import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import Threads from "./Threads";
import { ExternalLink } from "lucide-react";
import InteractiveDemo from "./interactive-demo";

const products = [
  {
    name: "Tasmim",
    url: "https://tasmim.nazamly.com",
    tagline: "AI-powered fashion tech packs.",
    description: "Create professional technical specifications for manufacturers. Arabic support and pattern analysis.",
    icon: "/tasmim_icon.png",
  },
  {
    name: "Rawaq",
    url: "https://rawaq.nazamly.com",
    tagline: "Subscription & transaction management.",
    description: "Find, track, and manage subscriptions and transactions. Google Auth integration. Clear the noise, keep what matters.",
    icon: "/rawaq_icon.png",
  },
  {
    name: "Flow",
    url: "https://flow.nazamly.com",
    tagline: "Smart production & inventory management.",
    description: "QR code scanning for everything. Mobile-friendly. For garment factories, warehouses, and fast-moving goods.",
    icon: "/flow11.png",
  },
];

export default function NazamlySection() {
  return (
    <section id="nazamly" className="relative pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-accent/10 to-blue-accent/10 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Threads color={[1, 0.5, 0]} amplitude={1} distance={0} enableMouseInteraction={true} />
      </div>
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-6xl font-black text-theme mb-4 font-geist tracking-tight transition-colors duration-500">
              Introducing <span className="gradient-text">Nazamly</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto font-geist font-light">
              Empowering businesses & consumers with smart software solutions across creative, industrial, and financial sectors.
            </p>
          </div>
          {/* TryFit Hero */}
          <div className="mb-16 grid grid-cols-1 gap-4 items-center justify-items-center text-center">
            <div>
              <h3 className="text-5xl sm:text-7xl font-black text-theme mb-4 font-geist tracking-tight transition-colors duration-500">
                TryFit
              </h3>
              <p className="text-gray-200 text-xl sm:text-2xl mb-4 font-geist">
                See any outfit on you — in seconds.
              </p>
              <p className="text-theme-muted text-base sm:text-lg max-w-2xl mx-auto mb-2 font-geist font-light">
                Upload your photo + any garment. Get photorealistic try-ons fast.
              </p>
              <p className="text-theme-muted text-sm max-w-2xl mx-auto mb-6 font-geist font-light">
                Make your first look in 30 seconds. No credit card required.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href="https://tryfit.nazamly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-orange-accent text-orange-accent font-bold font-geist smooth-hover hover:bg-orange-accent hover:text-black button-click"
                >
                  Learn more
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <InteractiveDemo />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {products.map((product) => (
              <Card key={product.name} className="bg-dark-accent/30 border-dark-accent/40 backdrop-blur-xl rounded-2xl overflow-hidden smooth-hover lift-hover glow-hover cursor-pointer">
                <a href={product.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                  {/* Banner Preview */}
                  <div className="h-40 overflow-hidden">
                    <img
                      src={
                        product.name === "Tasmim"
                          ? "/tasmimprev.png"
                          : product.name === "Rawaq"
                          ? "/rawaqprev.png"
                          : product.name === "Flow"
                          ? "/flowprev.png"
                          : undefined
                      }
                      alt={product.name + ' preview'}
                      className="w-full h-full object-cover smooth-hover scale-hover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <img src={product.icon} alt={product.name + ' icon'} className="w-8 h-8" />
                      <CardTitle>{product.name}</CardTitle>
                    </div>
                    <CardDescription>{product.tagline}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-theme-muted mb-4 leading-relaxed text-sm font-geist font-light min-h-[3rem] transition-colors duration-500">
                      {product.description}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <span className="text-orange-accent font-medium flex items-center gap-2">
                      Visit {product.name}
                      <ExternalLink className="w-4 h-4" />
                    </span>
                  </CardFooter>
                </a>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://nazamly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border border-orange-accent text-orange-accent rounded-xl font-bold font-geist smooth-hover hover:bg-orange-accent hover:text-black button-click"
            >
              Visit Nazamly
              <ExternalLink className="ml-3 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 