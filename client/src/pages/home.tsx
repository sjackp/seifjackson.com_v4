import Navigation from "@/components/navigation";
import AboutSection from "@/components/about-section";
import ProjectsSection from "@/components/projects-section";
import ChatSection from "@/components/chat-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <AboutSection />
      <ProjectsSection />
      <ChatSection />
      <Footer />
    </div>
  );
}
