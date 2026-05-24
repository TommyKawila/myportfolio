export type Profile = {
  id: string;
  name: string;
  title: string;
  bio: string;
  email: string;
  github_url: string | null;
  linkedin_url: string | null;
  avatar_url: string | null;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  image_url: string | null;
  tech_stack: string[];
  live_url: string | null;
  repo_url: string | null;
  featured: boolean;
  sort_order: number;
  created_at: string;
};

export type ContactMessage = {
  name: string;
  email: string;
  message: string;
};
