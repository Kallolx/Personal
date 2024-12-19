// Create a new file for GitHub integration
export interface GitHubRepo {
  id: string;
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  created_at: string;
  language: string;
  stargazers_count: number;
}

export const fetchGitHubData = async (username: string) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos: GitHubRepo[] = await response.json();
    return repos;
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    return [];
  }
};

export interface GitHubStats {
  public_repos: number;
  followers: number;
  following: number;
  total_stars: number;
  total_commits: number;
  total_prs: number;
  languages: { [key: string]: number };
}

export const fetchGitHubStats = async (username: string): Promise<GitHubStats> => {
  try {
    // Fetch user data
    const userResponse = await fetch(`https://api.github.com/users/${username}`);
    const userData = await userResponse.json();

    // Fetch all repos to calculate stars and languages
    const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await reposResponse.json();

    // Calculate total stars and collect languages
    const languages: { [key: string]: number } = {};
    let total_stars = 0;

    repos.forEach((repo: any) => {
      total_stars += repo.stargazers_count;
      if (repo.language && !languages[repo.language]) {
        languages[repo.language] = 0;
      }
      if (repo.language) {
        languages[repo.language]++;
      }
    });

    return {
      public_repos: userData.public_repos,
      followers: userData.followers,
      following: userData.following,
      total_stars,
      total_commits: 0, // GitHub API doesn't provide this directly
      total_prs: 0, // GitHub API doesn't provide this directly
      languages
    };
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    return {
      public_repos: 0,
      followers: 0,
      following: 0,
      total_stars: 0,
      total_commits: 0,
      total_prs: 0,
      languages: {}
    };
  }
}; 