import React from 'react';
import { Badge } from '../ui/badge';

interface TechCategory {
  title: string;
  items: Array<{
    name: string;
    icon: string;
  }>;
}

const techCategories: TechCategory[] = [
  {
    title: "Languages",
    items: [
      { name: "Python", icon: "/icons/python.png" },
      { name: "JavaScript", icon: "/icons/js.png" },
      { name: "TypeScript", icon: "/icons/typescript.png" }
    ]
  },
  {
    title: "Backend",
    items: [
      { name: "FastAPI", icon: "/icons/fastapi.png" },
      { name: "Express.js", icon: "/icons/expressjs.png" },
      { name: "Node.js", icon: "/icons/nodejs.png" }
    ]
  },
  {
    title: "Databases",
    items: [
      { name: "PostgreSQL", icon: "/icons/postgresql.png" },
      { name: "Firebase", icon: "/icons/firebase.png" },
      { name: "Supabase", icon: "/icons/supabase.png" },
      { name: "Neon", icon: "/icons/neon.png" },
      { name: "BigQuery", icon: "/icons/bigquery.png" }
    ]
  },
  {
    title: "Frontend",
    items: [
      { name: "React", icon: "/icons/react.png" },
      { name: "Astro", icon: "/icons/astro.png" },
      { name: "Next.js", icon: "/icons/nextjs.png" }
    ]
  },
  {
    title: "Cloud & DevOps",
    items: [
      { name: "Railway", icon: "/icons/railway.png" },
      { name: "Google Cloud", icon: "/icons/gcloud.png" },
      { name: "Docker", icon: "/icons/docker.png" },
      { name: "Git", icon: "/icons/git.png" }
    ]
  },
  {
    title: "AI/ML Infrastructure",
    items: [
      { name: "FAL.ai", icon: "/icons/fal.png" },
      { name: "Replicate", icon: "/icons/replicate.png" },
      { name: "RunPod", icon: "/icons/runpod.png" },
      { name: "ComfyUI", icon: "/icons/comfyui.png" },
      { name: "OpenAI", icon: "/icons/openai.png" },
      { name: "Anthropic", icon: "/icons/anthropic.png" }
    ]
  }
];

export function TechStack() {
  return (
    <section className="py-16 bg-parchment/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-display font-bold text-ink-black mb-12 text-center">
          <span className="inline-block">Tech Stack</span>
          <div className="h-1 w-20 bg-beer-gold mx-auto mt-4"></div>
        </h2>
        
        <div className="space-y-8">
          {techCategories.map((category) => (
            <div key={category.title} className="bg-white/60 rounded-lg p-6 shadow-vintage">
              <h3 className="text-xl font-display font-semibold text-pretzel-brown mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-parchment rounded-full border border-beer-gold/20 hover:border-beer-gold/40 transition-colors"
                  >
                    <img 
                      src={tech.icon} 
                      alt={tech.name} 
                      className="w-5 h-5 object-contain"
                    />
                    <span className="text-sm font-medium text-ink-black">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}