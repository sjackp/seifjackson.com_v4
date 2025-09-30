import Navigation from "@/components/navigation";
import BrandsSection from "@/components/brands-section";
import ProjectsSection from "@/components/projects-section";
import AboutSection from "@/components/about-section";
import ChatSection from "@/components/chat-section";
import Footer from "@/components/footer";
import NazamlySection from "../components/nazamly-section";
import MusicSection from "@/components/music-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <NazamlySection />
      <ProjectsSection />
      <BrandsSection />
      <AboutSection />
      <MusicSection />
      <ChatSection />
      <Footer />
    </div>
  );
}
