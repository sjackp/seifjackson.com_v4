export default function AboutSection() {
  const skills = [
    "AI Engineering & Generative Art",
    "Music Production & DJ",
    "Visual Art & Graphic Design",
  ];

  const experience = [
    {
      title: "Generative Art & AI Expert",
      company: "Upwork Freelancer",
      period: "2019-Present",
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
      period: "2018-2019 & 2022-Present",
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
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-4 font-geist tracking-tight">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600"
                alt="Seif Jackson professional headshot"
                className="w-80 h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-accent/20 to-transparent"></div>
            </div>
          </div>

          {/* Bio and Details */}
          <div className="space-y-8">
            {/* Bio Section */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 font-geist">Bio</h3>
              <p className="text-gray-300 leading-relaxed text-lg font-geist font-light">
                Hey there! I'm Seif Jackson, a 24-year-old Egyptian-American
                with a passion for blending art and technology. I've dived into
                the world of AI, mastering everything from prompt engineering to
                training and fine-tuning. I'm also a music producer, DJ, and
                visual artist who loves to experiment and create unique
                experiences. Based in Cairo, my journey has taken me to various
                educational institutions, and I'm now pursuing my business
                studies at the EU Business School's Barcelona campus. Let's work
                together and explore the possibilities of what we can create!
              </p>
            </div>

            {/* Skills Section */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 font-geist">Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-neon-green to-electric-blue text-black rounded-full text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 font-geist font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience Section */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Experience
              </h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-blue-accent pl-6 relative">
                    <div className="absolute w-3 h-3 bg-blue-accent rounded-full -left-2 top-2"></div>
                    <h4 className="text-lg font-semibold text-white">
                      {exp.title}
                    </h4>
                    <p className="text-blue-accent font-medium">{exp.company}</p>
                    <p className="text-gray-400 text-sm">{exp.period}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-blue-accent pl-6 relative">
                    <div className="absolute w-3 h-3 bg-blue-accent rounded-full -left-2 top-2"></div>
                    <h4 className="text-lg font-semibold text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-blue-accent font-medium">
                      {edu.institution}
                    </p>
                    <p className="text-gray-400 text-sm">{edu.period}</p>
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
