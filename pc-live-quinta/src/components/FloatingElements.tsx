import { Globe, Compass, Plane, BookOpen } from 'lucide-react';

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute top-[10%] left-[5%] text-white/5 animate-float-slow">
        <Globe size={120} strokeWidth={1} />
      </div>
      <div className="absolute top-[40%] right-[10%] text-white/5 animate-float-medium">
        <Compass size={150} strokeWidth={1} />
      </div>
      <div className="absolute bottom-[20%] left-[15%] text-brand-accent/5 animate-float-fast">
        <Plane size={100} strokeWidth={1} />
      </div>
      <div className="absolute top-[70%] right-[25%] text-white/5 animate-float-slow">
        <BookOpen size={90} strokeWidth={1} />
      </div>
      <div className="absolute top-[20%] right-[30%] text-brand-accent/5 animate-float-fast">
        <Plane size={60} strokeWidth={1} />
      </div>
    </div>
  );
}
