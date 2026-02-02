import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div>
      <Icon className="text-foreground/80 mb-4" size={24} />
      <h3 className="text-2xl font-normal mb-3 text-foreground">
        {title}
      </h3>
      <p className="text-lg text-foreground/60 leading-7">
        {description}
      </p>
    </div>
  );
}
