// src/components/ui/button.jsx
export function Button({ children, className = '', variant = 'default', ...props }) {
  const base = 'rounded-xl px-4 py-2 font-medium shadow-sm';
  const styles = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-gray-400 text-gray-700 hover:bg-gray-100'
  };
  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
