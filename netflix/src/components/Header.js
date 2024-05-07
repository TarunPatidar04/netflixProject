import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux/userSlice";
import { toast } from "react-hot-toast";

const Header = () => {
  const user = useSelector((store) => store.app.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/v1/user/logout");
      if (res.data.success) {
        toast(res.data.message);
      }
      dispatch(setUser(null));
      navigate("/");
    } catch (error) {
      console.log("Logout error : ", error);
    }
  };

  return (
    <div className="absolute z-10 flex w-[100vw] items-center justify-between bg-gradient-to-b from-black px-6">
      <img
        className="w-56"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="netflix-logo"
      />

      {user && (
        <div className="flex items-center">
          <IoIosArrowDropdown size="24px" className="text-white" />
          <h1 className="text-lg text-white font-medium">{user.fullName}</h1>
          <div className="ml-4">
            <button
              className="bg-red-800 text-white px-4 py-2"
              onClick={logoutHandler}
            >
              Logout
            </button>
            <button className="bg-red-800 text-white px-4 py-2 ml-2">
              Search Movie
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
