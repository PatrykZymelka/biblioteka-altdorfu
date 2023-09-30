import { Component } from "react";
import "./page-buttons.styles.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

class PageButtons extends Component {
  render() {
    const { id, title, link } = this.props.PagesInfo;
    return (
      <div className={`pages`} key={id}>
        <CustomLink to={link} id={id}>
          {title}
        </CustomLink>
      </div>
    );
  }
}

function CustomLink({ to, children }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <h1 className={isActive ? "active" : ""}>
      <Link to={to} className="text">
        {children}
      </Link>
    </h1>
  );
}

export default PageButtons;
