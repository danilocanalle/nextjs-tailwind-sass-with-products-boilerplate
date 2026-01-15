import "./FeatureCard.scss";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  badge?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  badge,
}: FeatureCardProps) {
  return (
    <article className="feature-card">
      {badge && <span className="feature-card__badge">{badge}</span>}
      <div className="feature-card__content">
        <div className="feature-card__icon">{icon}</div>
        <h3 className="feature-card__title">{title}</h3>
        <p className="feature-card__description">{description}</p>
      </div>
    </article>
  );
}

interface FeatureCardGridProps {
  children: React.ReactNode;
}

export function FeatureCardGrid({ children }: FeatureCardGridProps) {
  return <div className="feature-card-grid">{children}</div>;
}
