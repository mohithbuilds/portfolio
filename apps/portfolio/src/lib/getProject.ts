import type { ComponentType } from 'svelte';
import { z } from 'zod';

const technologySchema = z.object({
  title: z.string(),
});

const imageSchema = z.object({
  url: z.string(),
  alt: z.string().optional(),
  metadata: z.object({
    blurHash: z.string().optional(),
  }).optional(),
});

const projectSchema = z.object({
  metadata: z.object({
    title: z.string().min(1),
    slug: z.string().min(1),
    description: z.string().optional(),
    href: z.string().optional(),
    linkTitle: z.string().optional(),
    gitHubLink: z.string().optional(),
    client: z.string().optional(),
    type: z.string().optional(),
    keyFeatures: z.array(z.string()).default([]),
    technologies: z.array(z.string()).default([]),
    images: z.array(imageSchema).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(999),
  }),
  default: z.any(),
});

export type Project = {
  title: string;
  slug: string;
  description?: string;
  href?: string;
  linkTitle?: string;
  gitHubLink?: string;
  client?: string;
  type?: string;
  keyFeatures: string[];
  technologies: { title: string }[];
  images: {
    asset?: {
      url: string;
      metadata?: {
        blurHash?: string;
      };
    };
  }[];
  featured: boolean;
  order: number;
  content: ComponentType | null;
};

export async function getProject(slug: string): Promise<Project | null> {
  try {
    const md = await import(`../projects/${slug}.md`);
    const project = projectSchema.safeParse(md);

    if (!project.success) {
      console.error('Project validation failed:', project.error);
      return null;
    }

    // Transform the data to match the expected structure
    const transformedProject: Project = {
      ...project.data.metadata,
      content: project.data.default,
      technologies: project.data.metadata.technologies.map(tech => ({ title: tech })),
      images: project.data.metadata.images.map(img => ({
        asset: {
          url: img.url,
          metadata: img.metadata,
        },
      })),
    };

    return transformedProject;
  } catch (e) {
    console.error('Error loading project:', e);
    return null;
  }
}

export async function getAllProjects(): Promise<Project[]> {
  try {
    const projectModules = import.meta.glob('../projects/*.md');
    const projects = await Promise.all(
      Object.entries(projectModules).map(async ([path, resolver]) => {
        const { metadata } = await resolver();
        const parsed = projectSchema.safeParse({ metadata }); // Only validate metadata here
        if (!parsed.success) {
          console.error(`Project validation failed for ${path}:`, parsed.error);
          return null;
        }
        return parsed.data;
      })
    );

    const validProjects = projects.filter((project): project is NonNullable<typeof project> => project !== null);

    // Transform and sort projects
    const transformedProjects: Project[] = validProjects.map(project => ({
      title: project.metadata.title,
      slug: project.metadata.slug,
      description: project.metadata.description,
      href: project.metadata.href,
      linkTitle: project.metadata.linkTitle,
      gitHubLink: project.metadata.gitHubLink,
      client: project.metadata.client,
      type: project.metadata.type,
      keyFeatures: project.metadata.keyFeatures,
      featured: project.metadata.featured,
      order: project.metadata.order,
      content: null as any, // Content is not available here, it will be fetched by getProject
      technologies: project.metadata.technologies.map(tech => ({ title: tech })),
      images: project.metadata.images.map(img => ({
        asset: {
          url: img.url,
          metadata: img.metadata,
        },
      })),
    }));

    // Sort by order, then by title
    return transformedProjects.sort((a, b) => {
      if (a.order !== b.order) {
        return a.order - b.order;
      }
      return a.title.localeCompare(b.title);
    });
  } catch (e) {
    console.error('Error loading projects:', e);
    return [];
  }
}

export async function getFeaturedProjects(): Promise<{ title: string; slug: string }[]> {
  const allProjects = await getAllProjects();
  return allProjects
    .filter(project => project.featured)
    .map(project => ({
      title: project.title,
      slug: project.slug,
    }));
}
