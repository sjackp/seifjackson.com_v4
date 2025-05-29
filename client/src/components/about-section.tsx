import profileImage from "@assets/87212987_10206284744353820_265047718940901376_n.jpg";

export default function AboutSection() {
  const skills = [
    "AI Engineering & Generative Art",
    "Music Production & DJ",
    "Visual Art & Graphic Design",
    "Pattern Drafting",
    "Cutting & Sewing",
    "Quality Control",
    "Logistics",
  ];

  const experience = [
    {
      title: "Ready-Made Garment Manufacturing",
      company: "Independent",
      period: "2022-Present",
    },
    {
      title: "Generative Art & AI Expert",
      company: "Upwork Freelancer",
      period: "2021-Present",
    },
    {
      title: "Music Producer & DJ",
      company: "Independent",
      period: "2016-Present",
    },
  ];

  const education = [
    {
      degree: "BBA in Business Administration",
      institution: "EU Business School",
      period: "2018-2019 & 2022-2024",
    },
    {
      degree: "High School Diploma",
      institution: "Victory American College",
      period: "2015-2018",
    },
    {
      degree: "High School Diploma",
      institution: "Misr American College",
      period: "2004-2015",
    },
  ];

  return (
    <section id="about" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-6xl font-black text-theme mb-4 font-geist tracking-tight transition-colors duration-500">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Profile Image and Bio */}
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <img
                  src={profileImage}
                  alt="Seif Jackson professional headshot"
                  className="w-80 h-80 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-accent/20 to-transparent"></div>
              </div>
            </div>

            {/* Bio Section */}
            <div>
              <h3 className="text-2xl font-bold text-theme mb-4 font-geist transition-colors duration-500">Bio</h3>
              <p className="text-theme-muted leading-relaxed text-lg font-geist font-light transition-colors duration-500">
                26-year-old Egyptian-American creative and entrepreneur based in Cairo. With a unique blend of technical expertise and artistic vision, bridging the worlds of artificial intelligence, fashion, music, and design. He has deep experience in AI development and brings that same innovative mindset to the ready-made garment manufacturing industry, building modern, purpose-driven clothing brands.
                <br /><br />
                A graduate of EU Business School in Barcelona, also a music producer, DJ, and visual artist who thrives on crafting immersive and experimental experiences.
                <br /><br />
                Constantly exploring new ways to merge technology, art, and community. 
                Driven by curiosity, self-expression, and the desire to build something meaningful.
              </p>
            </div>
          </div>

          {/* Right Side - Skills, Experience, and Education */}
          <div className="space-y-8">
            {/* Skills Section */}
            <div>
              <h3 className="text-2xl font-bold text-theme mb-4 font-geist transition-colors duration-500">Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-orange-accent to-orange-light text-black dark:text-white rounded-full text-sm font-medium font-geist font-semibold smooth-hover scale-hover glow-hover cursor-pointer button-click"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience Section */}
            <div>
              <h3 className="text-2xl font-bold text-theme mb-6 font-geist transition-colors duration-500">
                Experience
              </h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-orange-accent pl-6 relative">
                    <div className="absolute w-3 h-3 bg-orange-accent rounded-full -left-2 top-2"></div>
                    <h4 className="text-lg font-semibold text-theme transition-colors duration-500">
                      {exp.title}
                    </h4>
                    <p className="text-orange-accent font-medium">{exp.company}</p>
                    <p className="text-theme-muted text-sm transition-colors duration-500">{exp.period}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div>
              <h3 className="text-2xl font-bold text-theme mb-6 font-geist transition-colors duration-500">
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-orange-accent pl-6 relative">
                    <div className="absolute w-3 h-3 bg-orange-accent rounded-full -left-2 top-2"></div>
                    <h4 className="text-lg font-semibold text-theme transition-colors duration-500">
                      {edu.degree}
                    </h4>
                    <p className="text-orange-accent font-medium">
                      {edu.institution}
                    </p>
                    <p className="text-theme-muted text-sm transition-colors duration-500">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
