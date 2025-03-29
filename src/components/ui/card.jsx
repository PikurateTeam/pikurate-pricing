// src/components/ui/card.jsx
export function Card({ children }) {
  return (
    <div className="rounded-2xl border border-gray-200 shadow p-2 bg-white">
      {children}
    </div>
  );
}

export function CardContent({ children, className = '' }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}
