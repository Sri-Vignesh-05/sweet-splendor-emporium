import decorativeUnderline from "@/assets/decorative-underline.avif";

interface TraditionalUnderlineProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const TraditionalUnderline = ({ className = "", size = "md" }: TraditionalUnderlineProps) => {
  const sizeClasses = {
    sm: "w-40 h-6",
    md: "w-56 h-8",
    lg: "w-72 h-10",
  };

  return (
    <div className={`flex justify-center ${className}`}>
      <img
        src={decorativeUnderline}
        alt=""
        className={`${sizeClasses[size]} object-contain opacity-80`}
        style={{
          filter: "sepia(100%) saturate(300%) brightness(90%) hue-rotate(10deg)",
        }}
        aria-hidden="true"
      />
    </div>
  );
};

export default TraditionalUnderline;
