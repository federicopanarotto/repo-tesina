import { type ReactNode } from "react";

interface SlideLayoutProps {
  icon: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export default function SlideLayout({ icon, title, children, className }: SlideLayoutProps) {
  return (
    <div className={`slide ${className ?? ""}`}>
      <div className="slide-inner">
        <div className="slide-header">
          <i className={`fas ${icon}`}></i>
          <h2>{title}</h2>
        </div>
        <div className="content-area">{children}</div>
      </div>
    </div>
  );
}
