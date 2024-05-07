import React, { useEffect } from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Browse = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.app.user);
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  });

  return (
    <div>
      <Header />
      <div></div>
    </div>
  );
};

export default Browse;
