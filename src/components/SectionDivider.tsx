interface SectionDividerProps {
  variant?: "default" | "grand" | "temple" | "minimal";
}

const SectionDivider = ({ variant = "default" }: SectionDividerProps) => {
  if (variant === "grand") {
    return (
      <div className="flex items-center justify-center gap-3 py-8">
        {/* Left ornate pattern */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-gold shadow-gold" />
          <div className="h-0.5 w-8 bg-gradient-to-r from-gold/20 to-gold" />
          <div className="w-3 h-3 rotate-45 border-2 border-gold bg-crimson/20" />
          <div className="h-0.5 w-16 bg-gradient-to-r from-gold to-gold-dark" />
        </div>
        
        {/* Center temple bell motif */}
        <div className="relative">
          <div className="w-8 h-8 rounded-full border-3 border-gold bg-gradient-to-br from-cream to-cream-dark flex items-center justify-center shadow-gold">
            <div className="w-3 h-3 rounded-full bg-crimson" />
          </div>
          {/* Glow effect */}
          <div className="absolute inset-0 w-8 h-8 rounded-full bg-gold/30 blur-md -z-10" />
        </div>
        
        {/* Right ornate pattern */}
        <div className="flex items-center gap-2">
          <div className="h-0.5 w-16 bg-gradient-to-l from-gold to-gold-dark" />
          <div className="w-3 h-3 rotate-45 border-2 border-gold bg-crimson/20" />
          <div className="h-0.5 w-8 bg-gradient-to-l from-gold/20 to-gold" />
          <div className="w-2 h-2 rounded-full bg-gold shadow-gold" />
        </div>
      </div>
    );
  }

  if (variant === "temple") {
    return (
      <div className="flex items-center justify-center py-10">
        <div className="relative flex items-center gap-4">
          {/* Left paisley-inspired curve */}
          <svg width="60" height="24" viewBox="0 0 60 24" className="text-gold">
            <path
              d="M0 12 C 15 12, 20 2, 30 2 C 40 2, 45 12, 60 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle cx="5" cy="12" r="3" fill="currentColor" />
          </svg>
          
          {/* Center ornate motif */}
          <div className="relative">
            <div className="w-12 h-12 rotate-45 border-3 border-gold bg-cream flex items-center justify-center shadow-gold">
              <div className="w-6 h-6 -rotate-45 rounded-full bg-gradient-to-br from-crimson to-crimson-dark flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-gold" />
              </div>
            </div>
            <div className="absolute -inset-2 rotate-45 border border-gold/30" />
          </div>
          
          {/* Right paisley-inspired curve */}
          <svg width="60" height="24" viewBox="0 0 60 24" className="text-gold">
            <path
              d="M0 12 C 15 12, 20 2, 30 2 C 40 2, 45 12, 60 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle cx="55" cy="12" r="3" fill="currentColor" />
          </svg>
        </div>
      </div>
    );
  }

  if (variant === "minimal") {
    return (
      <div className="flex items-center justify-center gap-3 py-4">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/50" />
        <div className="w-2 h-2 rounded-full bg-gold/60" />
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/50" />
      </div>
    );
  }

  // Default variant
  return (
    <div className="flex items-center justify-center gap-4 pt-6">
      <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-gold/50 to-gold rounded-full" />
      <div className="w-3 h-3 rotate-45 bg-crimson shadow-crimson" />
      <div className="w-5 h-5 rounded-full border-2 border-gold bg-cream-light flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-gold" />
      </div>
      <div className="w-3 h-3 rotate-45 bg-crimson shadow-crimson" />
      <div className="h-0.5 w-20 bg-gradient-to-l from-transparent via-gold/50 to-gold rounded-full" />
    </div>
  );
};

export default SectionDivider;
