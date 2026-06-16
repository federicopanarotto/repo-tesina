interface BulletItem {
  icon: string;
  text: string;
  label?: string;
}

interface BulletListProps {
  items: BulletItem[];
  gap?: string;
}

export default function BulletList({ items, gap }: BulletListProps) {
  return (
    <ul className="bullet-list" style={gap ? { gap } : undefined}>
      {items.map((item, i) => (
        <li key={i}>
          <i className={`fas ${item.icon}`}></i>
          <span>
            {item.label && <span className="bullet-label">{item.label}</span>}
            {item.label ? " — " : ""}
            {item.text}
          </span>
        </li>
      ))}
    </ul>
  );
}
