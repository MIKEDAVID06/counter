import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  const linkStyles = {
    fontSize: "18px",
    color: "yellow",
    marginRight: "20px",
  };

  return (
    <div>
      <h1>404 Page</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" style={linkStyles}>
        Go back to Counter Page
      </Link>
    </div>
  );
}

export default NotFoundPage;
