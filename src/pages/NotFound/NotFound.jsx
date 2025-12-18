import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="notfound">
      <div className="container">
        <div className="d-flex justify-center align-center">
        <div className="notfound-content">
          <h2 className="notfound-code">404</h2>
          <h2 className="notfound-title">Page Not Found</h2>
          <p className="notfound-text">
            Oops! The page you’re looking for doesn’t exist or was moved.
          </p>
          <Link to="/" className="notfound-btn">
            Go Home
          </Link>
        </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
