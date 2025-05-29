import { Mail, Github, Terminal } from "lucide-react";

export default function ChatSection() {
  return (
    <section id="chat" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-6xl font-black text-white mb-8 font-geist tracking-tight">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto font-geist font-light">
          Ready to collaborate on exciting projects? Whether it's AI
          engineering, generative art, or music production, I'm always open to
          new opportunities and creative partnerships.
        </p>
        <div className="bg-dark-accent/30 backdrop-blur-xl rounded-2xl border border-dark-accent/40 p-8 glow-neon-green">
          <div className="mb-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Terminal className="w-5 h-5 text-neon-green" />
              <span className="font-mono text-neon-green">contact.exe</span>
            </div>
            <p className="text-gray-300 font-geist">
              Ready to build something amazing together?
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@seifjackson.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-neon-green to-electric-blue text-black rounded-xl font-bold transition-all duration-300 hover:shadow-lg hover:scale-105 font-geist glow-neon-green"
            >
              <Mail className="mr-2 w-4 h-4" />
              Send Email
            </a>
            <a
              href="https://github.com/sjackp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-neon-green text-neon-green hover:bg-neon-green hover:text-black rounded-xl font-bold transition-all duration-300 font-geist"
            >
              <Github className="mr-2 w-4 h-4" />
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
