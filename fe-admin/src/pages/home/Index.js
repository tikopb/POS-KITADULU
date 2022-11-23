import React from "react";
import { Link } from "react-router-dom";

export const Index = () => {
  return (
    <div>
      {" "}
      <p>
        <Link to="/userslist">Go to the Users List</Link>
      </p>
    </div>
  );
};
