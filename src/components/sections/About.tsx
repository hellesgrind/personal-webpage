import React from 'react';
import { Card, CardContent } from '../ui/card';

export function About() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="relative overflow-hidden">
          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-24 h-24 text-beer-gold/10">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M0,0 Q50,20 100,0 L100,100 Q80,50 0,100 Z" />
            </svg>
          </div>
          <div className="absolute bottom-0 right-0 w-24 h-24 text-beer-gold/10 rotate-180">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M0,0 Q50,20 100,0 L100,100 Q80,50 0,100 Z" />
            </svg>
          </div>
          
          <CardContent className="relative z-10 p-8 md:p-12">
            <h2 className="text-4xl font-display font-bold text-ink-black mb-8 text-center">
              <span className="inline-block">About Me</span>
              <div className="h-1 w-20 bg-beer-gold mx-auto mt-4"></div>
            </h2>
            
            <div className="prose prose-lg max-w-none text-pretzel-brown/90">
              <p className="text-xl leading-relaxed mb-6">
                I'm a full-stack engineer and entrepreneur.
              </p>
              <p className="text-xl leading-relaxed mb-6">
                I build end-to-end AI-powered products — from backend and frontend to scalable infrastructure.
              </p>
              <p className="text-xl leading-relaxed mb-6">
                My current focus is generative AI.
              </p>
              <p className="text-xl leading-relaxed mb-6">
                I'm developing tools that help automate creative performance marketing — generating, testing, and improving ad content with the help of AI.
              </p>
              <p className="text-xl leading-relaxed">
                I like working close to the metal: fast iterations, clean systems, and shipping things that actually run.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}