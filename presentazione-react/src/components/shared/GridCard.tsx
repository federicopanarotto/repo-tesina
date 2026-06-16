interface GridCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function GridCard({ icon, title, description }: GridCardProps) {
  return (
    <div className="grid-card" style={{ textAlign: "center" }}>
      <div className="card-icon">
        <i className={`fas ${icon}`}></i>
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}
