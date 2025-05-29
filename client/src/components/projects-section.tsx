import { ExternalLink, Star, GitFork, Calendar } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics: string[];
}

async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  const response = await fetch('https://api.github.com/users/sjackp/repos?sort=updated&per_page=6');
  if (!response.ok) {
    throw new Error('Failed to fetch GitHub repositories');
  }
  return response.json();
}

export default function ProjectsSection() {
  const { data: repos, isLoading, error } = useQuery({
    queryKey: ['github-repos'],
    queryFn: fetchGitHubRepos,
  });

  const getLanguageColor = (language: string | null) => {
    const colors: Record<string, string> = {
      JavaScript: 'text-yellow-400',
      TypeScript: 'text-blue-400',
      Python: 'text-green-400',
      Java: 'text-orange-400',
      'C++': 'text-blue-300',
      Go: 'text-cyan-400',
      Rust: 'text-orange-300',
    };
    return colors[language || ''] || 'text-gray-400';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-primary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-6xl font-black text-theme mb-4 font-geist tracking-tight transition-colors duration-500">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-geist font-light">
            Latest repositories from my GitHub profile - real projects, real code.
          </p>
          <div className="text-orange-accent font-mono text-xs mt-4">
            $ git log --oneline --author="seifjackson"
          </div>
        </div>

        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-dark-accent/30 backdrop-blur-xl rounded-2xl border border-dark-accent/40 p-6">
                <Skeleton className="h-4 w-3/4 mb-3 bg-dark-accent" />
                <Skeleton className="h-3 w-full mb-2 bg-dark-accent" />
                <Skeleton className="h-3 w-2/3 mb-4 bg-dark-accent" />
                <div className="flex justify-between items-center">
                  <Skeleton className="h-3 w-20 bg-dark-accent" />
                  <Skeleton className="h-3 w-16 bg-dark-accent" />
                </div>
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <p className="text-red-400 font-geist">Failed to load repositories. Please check your connection.</p>
          </div>
        )}

        {repos && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <div
                key={repo.id}
                className="bg-dark-accent/30 backdrop-blur-xl rounded-2xl border border-dark-accent/40 overflow-hidden smooth-hover lift-hover glow-hover cursor-pointer"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-theme mb-2 font-mono transition-colors duration-500">
                      {repo.name}
                    </h3>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 smooth-hover hover:text-orange-accent scale-hover button-click"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  
                  <p className="text-theme-muted mb-4 leading-relaxed text-sm font-geist font-light min-h-[3rem] transition-colors duration-500">
                    {repo.description || "No description available"}
                  </p>

                  <div className="flex items-center justify-between text-xs text-theme-muted mb-3 transition-colors duration-500">
                    <span className="font-mono">$ cat README.md</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-theme-muted mb-3 transition-colors duration-500">
                    <div className="flex items-center gap-4">
                      {repo.language && (
                        <span className={`flex items-center gap-1 ${getLanguageColor(repo.language)} font-mono`}>
                          <span className="w-2 h-2 rounded-full bg-current"></span>
                          {repo.language}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="w-3 h-3" />
                        {repo.forks_count}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-theme-muted font-geist transition-colors duration-500">
                    <Calendar className="w-3 h-3" />
                    Updated {formatDate(repo.updated_at)}
                  </div>

                  {repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-3">
                      {repo.topics.slice(0, 3).map((topic) => (
                        <span
                          key={topic}
                          className="px-2 py-1 bg-orange-accent/10 text-orange-accent text-xs rounded-md font-mono"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
