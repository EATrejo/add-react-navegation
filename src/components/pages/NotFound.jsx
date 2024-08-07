import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <h2>Page not found!</h2>
      <br />
      <p>
        Go to the <Link to="/home">Homepage</Link>
      </p>
    </div>
  );
};
