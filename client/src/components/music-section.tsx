import { Music, ExternalLink } from "lucide-react";

export default function MusicSection() {
  const tracks = [
    {
      id: 1,
      title: "Latest Track",
      embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/seifjackson&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    },
    // We'll fetch actual tracks from SoundCloud API or add more manual embeds
  ];

  return (
    <section id="music" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-6xl font-black text-theme mb-4 font-geist tracking-tight transition-colors duration-500">
            My <span className="gradient-text">Music</span>
          </h2>
          <p className="text-theme-muted text-lg max-w-2xl mx-auto font-geist font-light transition-colors duration-500">
            Electronic soundscapes and sets from my SoundCloud
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Cornucopia in the Summer */}
          <div className="bg-dark-accent/30 backdrop-blur-xl rounded-2xl border border-dark-accent/40 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Music className="w-6 h-6 text-orange-accent" />
              <span className="font-mono text-orange-accent">cornucopia.mp3</span>
            </div>
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/seifjackson/cornucopia-in-the-summer&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true&show_artwork=true&theme=dark"
              className="rounded-xl"
            />
          </div>

          {/* Lost Community Mix 002 */}
          <div className="bg-dark-accent/30 backdrop-blur-xl rounded-2xl border border-dark-accent/40 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Music className="w-6 h-6 text-orange-accent" />
              <span className="font-mono text-orange-accent">lost_community.mp3</span>
            </div>
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/seifjackson/lost-community-mix-002&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true&show_artwork=true&theme=dark"
              className="rounded-xl"
            />
          </div>
        </div>

        {/* Visit SoundCloud Button */}
        <div className="text-center">
          <a
            href="https://soundcloud.com/seifjackson"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 border border-orange-accent text-orange-accent rounded-xl font-bold font-geist smooth-hover hover:bg-orange-accent hover:text-black button-click"
          >
            <Music className="mr-3 w-5 h-5" />
            Visit SoundCloud Profile
            <ExternalLink className="ml-3 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}