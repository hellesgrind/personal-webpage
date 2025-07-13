import React from 'react';
import { Button } from '../ui/button';
import { Mail, MessageSquare } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 text-beer-gold/20 text-8xl font-display">❦</div>
        <div className="absolute bottom-10 left-10 text-beer-gold/20 text-8xl font-display rotate-180">❦</div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Profile Image with decorative border */}
        <div className="relative inline-block mb-8">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-beer-gold shadow-xl">
            <img 
              src="/images/profile_2.png" 
              alt="HellesGrind" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-beer-gold rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
            🍺
          </div>
        </div>
        
        {/* Name and Title */}
        <h1 className="text-6xl md:text-7xl font-display font-black text-ink-black mb-4">
          HellesGrind
        </h1>
        
        <p className="text-2xl text-pretzel-brown mb-8 font-semibold">
          Building creative apps & tools with genAI and code
        </p>
        
        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-12">
          <Button variant="secondary" size="lg" asChild>
            <a 
              href="http://t.me/hellesgrind" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              Telegram
            </a>
          </Button>
          
          <Button variant="secondary" size="lg" asChild>
            <a 
              href="https://x.com/hellesgrind" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              X/Twitter
            </a>
          </Button>
          
          <Button variant="secondary" size="lg" asChild>
            <a 
              href="mailto:hellesgrind@gmail.com"
              className="flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email
            </a>
          </Button>
        </div>
        
        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-24 bg-beer-gold/30"></div>
          <span className="text-beer-gold text-2xl">⚜</span>
          <div className="h-px w-24 bg-beer-gold/30"></div>
        </div>
      </div>
    </section>
  );
}