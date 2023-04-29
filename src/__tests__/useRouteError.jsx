import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useRouteError = () => {
  const location = useLocation();
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(location.state?.error);
  }, [location.state]);

  return error;
};

export default useRouteError;
