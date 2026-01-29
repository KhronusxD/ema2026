import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight, Bell, Globe, Cross, Star, MoveUp } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col bg-ministry-base overflow-hidden pt-20">
      {/* Background Texture - Contours */}
      <div className="absolute inset-0 z-0 bg-contours opacity-30"></div>
      
      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center relative z-10 w-full max-w-7xl mx-auto px-4 pb-32">
        
        {/* 3D Bell Icon Simulation */}
        <div className="relative mb-8 transform hover:scale-110 transition-transform duration-500 cursor-pointer">
          <div className="absolute -top-2 -right-2 z-20 bg-red-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full border-2 border-ministry-base">1</div>
          <div className="absolute -top-4 -right-12 z-20 bg-white rounded-lg px-2 py-1 shadow-md">
             <div className="w-8 h-4 bg-green-500 rounded-full border border-gray-200 relative">
               <div className="absolute right-1 top-0.5 bg-white w-3 h-3 rounded-full shadow-sm"></div>
             </div>
          </div>
          <Bell className="w-20 h-20 text-yellow-400 fill-yellow-400 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]" />
        </div>

        {/* Headline - Print Style */}
        <div className="flex flex-col items-center text-center space-y-1">
          <h1 className="font-condensed text-6xl md:text-8xl lg:text-9xl leading-[0.85] text-white tracking-tighter flex flex-col items-center">
            
            <div className="flex flex-wrap justify-center gap-x-3 md:gap-x-6">
              <span>PREPARANDO</span>
              <span>A</span>
            </div>
            
            <div className="transform -skew-x-6 bg-ministry-accent px-4 md:px-6 my-1">
              <span className="block text-ministry-base transform skew-x-6 italic pr-2 font-black">IGREJA</span>
            </div>

            <span className="text-outline">EXPANDINDO</span>
            
            <div className="flex flex-wrap justify-center gap-x-3 text-ministry-highlight">
              <span>O</span>
              <span>REINO</span>
            </div>

            <span className="text-white text-5xl md:text-7xl mt-2">EM 2026</span>
          </h1>
        </div>

        {/* CTA Button with z-index to stay above elements but not fixed nav */}
        <div className="mt-12 relative z-30">
          <Button variant="pill" className="group">
            <span className="mr-2">arrasta e confira</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Bottom Pattern Strip (Infinite Scroll) */}
      <div className="w-full bg-emerald-900/40 backdrop-blur-sm border-t border-emerald-500/30 overflow-hidden py-3 absolute bottom-0 z-20">
        <div className="flex items-center space-x-12 animate-scroll w-[200%]">
          {/* Repeating pattern block 1 */}
          <div className="flex items-center space-x-12 opacity-80">
            <Globe className="w-10 h-10 text-ministry-accent" strokeWidth={1.5} />
            <Cross className="w-10 h-10 text-white" strokeWidth={1.5} />
            <Star className="w-10 h-10 text-ministry-accent" strokeWidth={1.5} />
            <MoveUp className="w-10 h-10 text-white" strokeWidth={1.5} />
            <Globe className="w-10 h-10 text-ministry-accent" strokeWidth={1.5} />
            <Cross className="w-10 h-10 text-white" strokeWidth={1.5} />
            <Star className="w-10 h-10 text-ministry-accent" strokeWidth={1.5} />
            <MoveUp className="w-10 h-10 text-white" strokeWidth={1.5} />
            <Globe className="w-10 h-10 text-ministry-accent" strokeWidth={1.5} />
            <Cross className="w-10 h-10 text-white" strokeWidth={1.5} />
          </div>
          {/* Repeating pattern block 2 for smoothness */}
          <div className="flex items-center space-x-12 opacity-80">
             <Globe className="w-10 h-10 text-ministry-accent" strokeWidth={1.5} />
            <Cross className="w-10 h-10 text-white" strokeWidth={1.5} />
            <Star className="w-10 h-10 text-ministry-accent" strokeWidth={1.5} />
            <MoveUp className="w-10 h-10 text-white" strokeWidth={1.5} />
            <Globe className="w-10 h-10 text-ministry-accent" strokeWidth={1.5} />
            <Cross className="w-10 h-10 text-white" strokeWidth={1.5} />
            <Star className="w-10 h-10 text-ministry-accent" strokeWidth={1.5} />
            <MoveUp className="w-10 h-10 text-white" strokeWidth={1.5} />
            <Globe className="w-10 h-10 text-ministry-accent" strokeWidth={1.5} />
            <Cross className="w-10 h-10 text-white" strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </section>
  );
};