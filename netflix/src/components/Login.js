import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isLogin, setIsLoggin] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const logginHandler = () => {
    setIsLoggin(!isLogin);
  };

  const getInputData = (e) => {
    e.preventDefault();
    console.log(fullName, email, password);
    setFullName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div className="w-full">
      <Header />
      <div className="w-full absolute">
        <img
          src="https://help.nflxext.com/0af6ce3e-b27a-4722-a5f0-e32af4df3045_what_is_netflix_5_en.png"
          alt="banner"
          className="w-[100vw] h-[100vh]"
        />
      </div>
      <form
        onSubmit={getInputData}
        className="absolute flex items-center justify-center text-white mx-auto flex-col w-3/12 my-36 left-0 right-0 bg-black p-12 rounded-md opacity-70"
      >
        <h1 className="text-2xl mb-5 font-bold ">
          {isLogin ? "Login" : "Sign up"}
        </h1>

        <div className="flex flex-col">
          {!isLogin && (
            <>
              {/* <label htmlFor="">FullName</label> */}
              <input
                type="text"
                value={fullName}
                placeholder="Full name"
                className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
              />
            </>
          )}

          {/* <label htmlFor="">Email</label> */}
          <input
            type="email"
            value={email}
            placeholder="Email"
            className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {/* <label htmlFor="">Password</label> */}
          <input
            type="password"
            value={password}
            placeholder="Password"
            className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="bg-red-600 mt-6 p-3 text-white rounded-sm font-bold">
            {isLogin ? "Login" : "Signup"}
          </button>
          <p className="text-white mt-2">
            {isLogin ? "New to Netflix ? " : "Already have an account ? "}

            <span
              onClick={logginHandler}
              className="ml-1 text-yellow-300 font-medium cursor-pointer"
            >
              {isLogin ? "Sign Up " : "Login"}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
