"use client";
import Head from "next/head";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const handleSignUp = () => {
    console.log(name, email, password, "Sign Up");
  };

  const handleLogin = async () => {
    setLogin(true);
    const res = axios.post("/api/user/login", {
      email,
      password,
    });
    if (res) {
      console.log("res", res);
    }
  };

  const handleToggle = () => {
    setLogin(!login);
  };

  return (
    <div>
      <Head>
        <title>OYO - Login !</title>
      </Head>
      <div className="flex h-screen justify-center items-center relative bg-login-background bg-no-repeat bg-cover">
        <div className="w-full absolute top-10 px-20 flex items-center ">
          <h2 className="text-5xl font-bold mr-5 text-white">OYO</h2>
          <p className="text-white">
            Hotels and homes across 800 cites , 24+ countries
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="text-white">
            <p className="font-bold text-5xl text-justify">
              There's smarter way to OYO around
            </p>
            <p className="text-2xl mt-5 text-justify">
              Sign up your phone number and get exclusive access to discounts
              and savings on OYO stays and with our many travel partners .
            </p>
          </div>
          <div className="ml-20 pb-40 w-8/12 border-2 border-red-500 mr-10 bg-slate-50">
            <p className="h-10 px-10 flex items-center bg-gradient-to-r from-red-300 to bg-red-500 text-lg font-bold text-white">
              Sign up & $500 OYO Money
            </p>
            <div className="px-10">
              <h3 className="text-5xl font-bold my-5">Login / Signup</h3>
              <p className="font-bold text-lg mb-1">
                Please enter your Email to continue
              </p>
              {login ? (
                ""
              ) : (
                <input
                  className="outline-none border border-black my-3 px-3 py-1 w-96 h-10"
                  type="text"
                  placeholder="Enter your name..."
                  onChange={(e) => setName(e.target.value)}
                />
              )}
              <input
                className="outline-none border border-black my-3 px-3 py-1 w-96 h-10"
                type="email"
                placeholder="Enter your email..."
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="outline-none border border-black my-3 px-3 py-1 w-96 h-10"
                type="password"
                placeholder="Enter your password..."
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="w-96 h-14 text-lg font-bold bg-red-400 hover:cursor-pointer hover:bg-red-600 text-white my-5 rounded-lg"
                type="submit"
                onClick={login ? handleLogin : handleSignUp}
              >
                {login ? "Login" : "Sign Up"}
              </button>
              <p className="my-3 text-lg ">
                <span>
                  {login ? "Don't have an account" : "Already have a account ?"}
                </span>
                <span
                  className="ml-1 border-b-2 border-red-500 text-red-600 pb-1 hover:cursor-pointer"
                  onClick={handleToggle}
                >
                  {login ? "Sign Up" : "Login"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
