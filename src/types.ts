export interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  longDescription: string;
  image: string;
  githubUrl: string;
  codeSnippet?: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  summary: string;
  technologies: string[];
  iconName: string;
}

export interface StatItem {
  number: string;
  label: string;
  subtext?: string;
}
