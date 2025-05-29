import Navigation from "@/components/navigation";
import BrandsSection from "@/components/brands-section";
import ProjectsSection from "@/components/projects-section";
import MusicSection from "@/components/music-section";
import AboutSection from "@/components/about-section";
import ChatSection from "@/components/chat-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <BrandsSection />
      <MusicSection />
      <ProjectsSection />
      <AboutSection />
      <ChatSection />
      <Footer />
    </div>
  );
}
