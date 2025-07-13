import React from 'react';

export function Footer() {
  return (
    <footer className="py-12 mt-16 border-t-2 border-beer-gold/20">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px w-24 bg-beer-gold/30"></div>
          <span className="text-beer-gold text-2xl">🍺</span>
          <div className="h-px w-24 bg-beer-gold/30"></div>
        </div>
        
        <p className="text-pretzel-brown font-serif">
          © {new Date().getFullYear()} HellesGrind
        </p>
        <p className="text-sm text-pretzel-brown/60 mt-2">
          Crafted with care, like a good Bavarian beer
        </p>
      </div>
    </footer>
  );
}