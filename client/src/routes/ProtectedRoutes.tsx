import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import UserApi from "../utils/api/UserApi";
import { getAccessToken, clearTokens } from "../utils/helper/TokenHelper";

interface ProtectedRouteProps {
  element: React.ReactElement;
  allowedRoles: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  element,
  allowedRoles,
}) => {
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuthorization = async () => {
      const token = getAccessToken();
      if (!token) {
        clearTokens();
        setIsAuthorized(false);
        return;
      }
      try {
        const user = await UserApi.verifyToken(); // Fetch the user object
        setIsAuthorized(allowedRoles.includes(user.role)); // Check if the role is allowed
      } catch (error) {
        clearTokens();
        setIsAuthorized(false);
      }
    };
    checkAuthorization();
  }, [allowedRoles]);

  if (isAuthorized === null) return <div>Loading...</div>;

  return isAuthorized ? element : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
