import React from "react";
import { Link } from "react-router-dom";

function ErrorBoundaryPage() {
  const linkStyles = {
    fontSize: "18px",
    color: "yellow",
    marginRight: "20px",
  };

  return (
    <div>
      <h1>Error Occurred</h1>
      <p>There was an error in the application.</p>
      <Link to="/" style={linkStyles}>
        Go back to Counter Page
      </Link>
    </div>
  );
}

export default ErrorBoundaryPage;
