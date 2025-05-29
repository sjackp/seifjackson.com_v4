import { ExternalLink } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "J_Captioneer_v2.release",
      description:
        "Advanced AI-powered image captioning tool with enhanced natural language processing capabilities and batch processing features.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      githubUrl: "#",
    },
    {
      title: "J_Captioneer.lite",
      description:
        "Lightweight version of the captioning tool optimized for mobile devices and quick image analysis workflows.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      githubUrl: "#",
    },
    {
      title: "AI Art Generator",
      description:
        "Neural network-powered generative art tool that creates unique visual compositions from text prompts and style parameters.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      githubUrl: "#",
    },
    {
      title: "Audio Processing Suite",
      description:
        "Comprehensive audio processing tools for music production, including AI-enhanced mixing and mastering capabilities.",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-primary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore my latest work in AI engineering, generative art, and
            creative technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all duration-300 group hover:-translate-y-1"
            >
              <img
                src={project.image}
                alt={`${project.title} application interface`}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <a
                  href={project.githubUrl}
                  className="inline-flex items-center text-blue-accent hover:text-blue-hover font-medium transition-colors duration-300"
                >
                  View on GitHub
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
