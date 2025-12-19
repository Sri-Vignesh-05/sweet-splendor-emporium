const SectionDivider = () => {
  return (
    <div className="flex items-center justify-center gap-4 pt-6">
      <div className="h-px w-20 bg-gradient-to-r from-transparent to-gold" />
      <div className="w-3 h-3 rotate-45 bg-crimson" />
      <div className="w-4 h-4 rounded-full border-2 border-gold" />
      <div className="w-3 h-3 rotate-45 bg-crimson" />
      <div className="h-px w-20 bg-gradient-to-l from-transparent to-gold" />
    </div>
  );
};

export default SectionDivider;
