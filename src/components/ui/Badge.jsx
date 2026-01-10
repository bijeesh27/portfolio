import { cn } from '../../lib/cn';

const Badge = ({ children, variant = "default", className, ...props }) => {
  const variants = {
    default: "bg-primary text-primary-foreground", // Mapping to global vars conceptually
    outline: "border border-input bg-background",
  };
  
  // Since we aren't using tailwind, we'll rely on global classes or style objects. 
  // For now I'll use a style object or utility classes defined in globals.
  
  const style = {
    display: 'inline-flex',
    padding: '0.25rem 0.5rem',
    borderRadius: '1rem', // Pill shape
    fontSize: '0.75rem',
    fontWeight: '600',
    backgroundColor: 'var(--secondary)',
    color: '#fff',
    ...props.style
  };

  return (
    <span className={cn("badge", className)} style={style} {...props}>
      {children}
    </span>
  );
};

export default Badge;
