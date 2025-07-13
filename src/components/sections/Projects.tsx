import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  achievements: string[];
  media?: {
    type: 'video' | 'image';
    src: string;
    poster?: string;
  };
  link?: {
    text: string;
    url: string;
  };
  tags: string[];
  color: 'slate' | 'orange' | 'emerald' | 'purple';
}

const projects: Project[] = [
  {
    id: 'unreal-labs',
    title: 'Unreal Labs',
    role: 'Co-founder, Engineering',
    description: 'Building an AI agent that automates entire performance marketing workflows. Our system generates, tests, and optimizes ad campaigns using advanced generative AI.',
    achievements: [
      'Pre-seed: Sequoia Capital, First Round Capital',
      'Managing 40% of ad budgets for pilot clients in closed beta',
      'AI campaigns consistently outperform human-created campaigns'
    ],
    tags: ['AI/ML', 'Performance Marketing', 'Automation', 'Generative AI'],
    color: 'slate'
  },
  {
    id: 'unrealme-app',
    title: 'Unrealme App',
    role: 'Co-founder • Engineering • Backend',
    description: 'AI-powered video generation app for iPhone. Users can create personalized videos by uploading photos and selecting scenarios. This B2C product provided key insights that led to our successful B2B pivot.',
    achievements: [
      'First iteration of Unreal Labs as a team that led to successful B2B pivot',
      'Built complete backend infrastructure for video generation and processing',
      'Market insights led to successful pivot to B2B AI marketing',
      'We actually launched the app in the App Store'
    ],
    media: {
      type: 'video',
      src: '/videos/unrealme_comp.mp4'
    },
    link: {
      text: 'Download on the App Store',
      url: 'https://apps.apple.com/en/app/unrealme-ai-videos-with-you/id6737052058'
    },
    tags: ['Swift', 'JavaScript', 'Express', 'FAL.ai', 'RunPod', 'Firebase'],
    color: 'orange'
  },
  {
    id: 'literallyme-bot',
    title: 'LiterallyMe Sticker Bot',
    role: 'Solo Project, Founder • Super fun viral sensation',
    description: 'AI-powered Telegram bot for personalized sticker generation. What started as a fun side project evolved into a viral sensation with users worldwide creating millions of custom stickers.',
    achievements: [
      '170K+ Monthly Active Users - absolute viral growth',
      '700K+ total users across 100+ countries',
      '2M+ stickers generated - super fun for users',
      '$0 marketing spend - pure viral organic growth',
      'Scalable infrastructure'
    ],
    link: {
      text: 'Try it in Telegram!',
      url: 'https://t.me/literalmebot'
    },
    tags: ['JavaScript', 'Python', 'FastAPI', 'Telegram Bot API', 'RunPod', 'Docker'],
    color: 'emerald'
  },
  {
    id: 'literallyme-photo',
    title: 'Literally Me Photo',
    role: 'Solo Project, Founder • My first full-stack application',
    description: 'AI-powered photo generation web app built as a Telegram Mini App. My first end-to-end project where I architected and implemented the complete stack from infrastructure to user interface.',
    achievements: [
      'Built entire application from zero - frontend, backend, infrastructure',
      'Implemented custom AI training pipeline for personalized photos',
      'Designed complete user experience from onboarding to generation',
      'Telegram Mini Apps integration',
      'Solo architecture to deployment'
    ],
    media: {
      type: 'video',
      src: '/videos/literallyme_app_comp.mp4'
    },
    tags: ['React', 'TypeScript', 'JavaScript', 'Express', 'FAL.ai', 'Firebase'],
    color: 'purple'
  }
];

const colorVariants = {
  slate: 'from-slate-400 via-slate-500 to-slate-600',
  orange: 'from-orange-400 via-rose-400 to-pink-400',
  emerald: 'from-emerald-400 via-teal-400 to-blue-400',
  purple: 'from-purple-400 via-violet-400 to-indigo-400'
};

export function Projects() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-display font-bold text-ink-black mb-12 text-center">
          <span className="inline-block">Projects</span>
          <div className="h-1 w-20 bg-beer-gold mx-auto mt-4"></div>
        </h2>
        
        <div className="space-y-12">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${colorVariants[project.color]}`} />
              
              <CardHeader className="pb-4">
                <CardTitle className="text-3xl font-display">{project.title}</CardTitle>
                <p className="text-lg font-semibold text-pretzel-brown">{project.role}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-lg text-ink-black/80 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Achievements */}
                <div className="space-y-2">
                  {project.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-beer-gold mt-1">•</span>
                      <span className="text-ink-black/80">{achievement}</span>
                    </div>
                  ))}
                </div>
                
                {/* Media and Link */}
                <div className="flex flex-col md:flex-row gap-6">
                  {project.media && (
                    <div className="flex-shrink-0">
                      {project.media.type === 'video' ? (
                        <video 
                          className="w-56 rounded-lg shadow-lg" 
                          autoPlay 
                          muted 
                          loop 
                          playsInline
                        >
                          <source src={project.media.src} type="video/mp4" />
                        </video>
                      ) : (
                        <img 
                          src={project.media.src} 
                          alt={project.title}
                          className="w-56 rounded-lg shadow-lg"
                        />
                      )}
                    </div>
                  )}
                  
                  <div className="flex-1 space-y-4">
                    {project.link && (
                      <Button variant="secondary" size="lg" asChild>
                        <a 
                          href={project.link.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2"
                        >
                          {project.link.text}
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}