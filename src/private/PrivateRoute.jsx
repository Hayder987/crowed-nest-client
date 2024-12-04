import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate, useLocation } from "react-router";
import PropTypes from "prop-types";
import { CirclesWithBar } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const { pathname } = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center">
        <CirclesWithBar
          height="100"
          width="100"
          color="#4fa94d"
          outerCircleColor="#4fa94d"
          innerCircleColor="#4fa94d"
          barColor="#4fa94d"
          ariaLabel="circles-with-bar-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return (
    <div>
      <Navigate state={pathname} to="/login"></Navigate>
    </div>
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.object,
};

export default PrivateRoute;
