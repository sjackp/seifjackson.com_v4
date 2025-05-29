import { Mail, Linkedin } from "lucide-react";

export default function ChatSection() {
  return (
    <section id="chat" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
          Let's Connect
        </h2>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          Ready to collaborate on exciting projects? Whether it's AI
          engineering, generative art, or music production, I'm always open to
          new opportunities and creative partnerships.
        </p>
        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8">
          <p className="text-gray-300 mb-6">
            Chat functionality coming soon! In the meantime, feel free to reach
            out through my other channels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@seifjackson.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-accent hover:bg-blue-hover text-white rounded-xl font-medium transition-colors duration-300"
            >
              <Mail className="mr-2 w-4 h-4" />
              Send Email
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 border border-blue-accent text-blue-accent hover:bg-blue-accent hover:text-white rounded-xl font-medium transition-all duration-300"
            >
              <Linkedin className="mr-2 w-4 h-4" />
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
