import decorativeUnderline from "@/assets/decorative-underline-transparent.png";

interface TraditionalUnderlineProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const TraditionalUnderline = ({ className = "", size = "md" }: TraditionalUnderlineProps) => {
  const sizeClasses = {
    sm: "w-72 h-8",
    md: "w-[400px] h-12",
    lg: "w-[500px] h-14",
  };

  return (
    <div className={`flex justify-center ${className}`}>
      <img
        src={decorativeUnderline}
        alt=""
        className={`${sizeClasses[size]} object-contain`}
        aria-hidden="true"
      />
    </div>
  );
};

export default TraditionalUnderline;
