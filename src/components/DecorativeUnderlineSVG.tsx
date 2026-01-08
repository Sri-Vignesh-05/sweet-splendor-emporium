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
        viewBox="0 0 320 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ background: 'transparent' }}
      >
        <defs>
          <linearGradient id="goldLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C9A227" stopOpacity="0" />
            <stop offset="15%" stopColor="#C9A227" />
            <stop offset="50%" stopColor="#F4D03F" />
            <stop offset="85%" stopColor="#C9A227" />
            <stop offset="100%" stopColor="#C9A227" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="goldCenter" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F4D03F" />
            <stop offset="100%" stopColor="#B8860B" />
          </linearGradient>
        </defs>
        
        {/* Left line */}
        <path
          d="M20 12 L130 12"
          stroke="url(#goldLine)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        
        {/* Left flourish curve */}
        <path
          d="M125 12 Q135 6, 145 12"
          stroke="#C9A227"
          strokeWidth="1.2"
          fill="none"
        />
        
        {/* Center diamond left */}
        <path
          d="M145 12 L152 7 L160 12 L152 17 Z"
          fill="url(#goldCenter)"
        />
        
        {/* Center diamond right */}
        <path
          d="M160 12 L168 7 L175 12 L168 17 Z"
          fill="url(#goldCenter)"
        />
        
        {/* Center dot as path */}
        <path
          d="M160 12 m-2.5,0 a2.5,2.5 0 1,0 5,0 a2.5,2.5 0 1,0 -5,0"
          fill="#F4D03F"
        />
        
        {/* Right flourish curve */}
        <path
          d="M175 12 Q185 18, 195 12"
          stroke="#C9A227"
          strokeWidth="1.2"
          fill="none"
        />
        
        {/* Right line */}
        <path
          d="M190 12 L300 12"
          stroke="url(#goldLine)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        
        {/* Small accent dots as paths */}
        <path
          d="M140 12 m-1.5,0 a1.5,1.5 0 1,0 3,0 a1.5,1.5 0 1,0 -3,0"
          fill="#C9A227"
        />
        <path
          d="M180 12 m-1.5,0 a1.5,1.5 0 1,0 3,0 a1.5,1.5 0 1,0 -3,0"
          fill="#C9A227"
        />
      </svg>
    </div>
  );
};

export default DecorativeUnderlineSVG;
