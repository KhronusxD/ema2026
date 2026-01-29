import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'pill';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center transition-all duration-300 font-bold uppercase tracking-wide";
  
  const variants = {
    // Primary is now the accent green
    primary: "bg-ministry-accent text-ministry-base hover:bg-ministry-highlight shadow-lg rounded-lg px-8 py-4 text-sm hover:-translate-y-0.5",
    // Outline uses accent color
    outline: "border-2 border-ministry-accent text-ministry-accent hover:bg-ministry-accent hover:text-ministry-base rounded-lg px-8 py-4 text-sm",
    // Pill variant standardized
    pill: "bg-ministry-accent text-ministry-base hover:bg-ministry-highlight rounded-full px-8 py-3 text-lg border-2 border-ministry-dark shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)] hover:translate-x-[2px] hover:translate-y-[2px]"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};