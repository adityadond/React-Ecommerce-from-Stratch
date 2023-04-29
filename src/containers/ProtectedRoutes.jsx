import React from "react";
import {  Route,Navigate, Routes } from "react-router-dom";

function ProtectedRoutes({ auth, component: Component }) {
  return (
    <Routes>
    <Route
   
      render={(props) => {
        if (auth) return <Component {...props} />;
        if (!auth)
          return (
            <Navigate to="/" replace />
          );
      }}
    />
    </Routes>
  );
}

export default ProtectedRoutes;
