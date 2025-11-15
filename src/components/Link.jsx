import { Link as RouterLink } from "react-router-dom";

const Link = ({ to, children, className = "", ...rest }) => {
  return (
    <RouterLink to={to} className={className} {...rest}>
      {children}
    </RouterLink>
  );
};

export { Link };
