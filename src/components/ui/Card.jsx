import { cn } from '../../lib/cn';
import './Card.css'; // Optional: if specific styles are needed, but we'll use inline or utility classes strategy mostly

const Card = ({ children, className, ...props }) => {
  return (
    <div className={cn("card", className)} {...props}>
      {children}
    </div>
  );
};

export default Card;
