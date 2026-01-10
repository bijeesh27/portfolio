import { cn } from '../../lib/cn';

const Button = ({ children, variant = 'primary', className, ...props }) => {
  return (
    <button className={cn("btn", `btn-${variant}`, className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
