import { Link, useMatch } from "react-router-dom";

const CustomLink = ({children, to, ...props}) => {

  const match = useMatch({
    path: to,
    end: to.length === 1
  });
  const isMatch = (match) => match ? 'active-link' : null;


  return (
    <Link 
      to={to}
      className={isMatch(match)}
      {...props}
      >
        {children}
    </Link>
  )
}

export { CustomLink }