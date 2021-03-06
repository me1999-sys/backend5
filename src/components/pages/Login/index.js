import React, { useState } from "react";
import Navbar from "../../molecules/NavBar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const data = {
      email: email,
      password: password,
    };
    console.log(data);
  };

  return (
    //JSX
    <div className="container mt-5">
      <Navbar />
      <h3 className="mt-3">Login</h3>
      <p className="form-label mt-3">Email</p>
      <input
        className="form-control"
        placeholder="Masukan email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p className="form-label mt-3">Password</p>
      <input
        className="form-control"
        placeholder="Masukan password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button className="btn btn-primary mb-3" onClick={handleSubmit} >Submit</button>
    </div>
  );
};

export default Login;