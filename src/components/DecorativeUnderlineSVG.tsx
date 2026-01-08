interface DecorativeUnderlineSVGProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const DecorativeUnderlineSVG = ({ className = "", size = "md" }: DecorativeUnderlineSVGProps) => {
  const sizeClasses = {
    sm: "w-48 h-4",
    md: "w-80 h-6",
    lg: "w-96 h-8",
  };

  return (
    <div className={`flex justify-center ${className}`}>
      <svg
        className={sizeClasses[size]}
        viewBox="0 0 400 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D4A853" stopOpacity="0.3" />
            <stop offset="25%" stopColor="#C9A227" />
            <stop offset="50%" stopColor="#F4D03F" />
            <stop offset="75%" stopColor="#C9A227" />
            <stop offset="100%" stopColor="#D4A853" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="goldGradientCenter" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F4D03F" />
            <stop offset="50%" stopColor="#C9A227" />
            <stop offset="100%" stopColor="#8B6914" />
          </linearGradient>
        </defs>
        
        {/* Left decorative line */}
        <path
          d="M10 15 Q50 15, 80 15"
          stroke="url(#goldGradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M80 15 Q100 10, 120 15"
          stroke="url(#goldGradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M120 15 Q140 20, 160 15"
          stroke="url(#goldGradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        
        {/* Center ornament - diamond shape */}
        <path
          d="M175 15 L185 8 L200 15 L185 22 Z"
          fill="url(#goldGradientCenter)"
        />
        <path
          d="M200 15 L215 8 L225 15 L215 22 Z"
          fill="url(#goldGradientCenter)"
        />
        
        {/* Center circle */}
        <circle cx="200" cy="15" r="4" fill="url(#goldGradientCenter)" />
        <circle cx="200" cy="15" r="2" fill="#F4D03F" />
        
        {/* Small decorative dots */}
        <circle cx="165" cy="15" r="2" fill="#C9A227" />
        <circle cx="235" cy="15" r="2" fill="#C9A227" />
        
        {/* Right decorative line (mirror of left) */}
        <path
          d="M240 15 Q260 20, 280 15"
          stroke="url(#goldGradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M280 15 Q300 10, 320 15"
          stroke="url(#goldGradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M320 15 Q350 15, 390 15"
          stroke="url(#goldGradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        
        {/* Additional flourishes */}
        <path
          d="M150 12 Q160 8, 165 12"
          stroke="#C9A227"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M150 18 Q160 22, 165 18"
          stroke="#C9A227"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M235 12 Q240 8, 250 12"
          stroke="#C9A227"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M235 18 Q240 22, 250 18"
          stroke="#C9A227"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default DecorativeUnderlineSVG;
