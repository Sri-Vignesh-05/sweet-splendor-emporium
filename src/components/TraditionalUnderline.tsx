import DecorativeUnderlineSVG from "./DecorativeUnderlineSVG";

interface TraditionalUnderlineProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const TraditionalUnderline = ({ className = "", size = "md" }: TraditionalUnderlineProps) => {
  return <DecorativeUnderlineSVG className={className} size={size} />;
};

export default TraditionalUnderline;
