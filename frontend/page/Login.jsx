import React, { useState } from "react";

import {logins} from '../api';

const Login = ({setUser,setIsLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you can perform further actions like validation, API calls, etc.
    console.log("Submitted:", { email, password });
     const newRes=await logins({ email, password });
     if(email === 'purushottam@gmail.com' && password === 'Admin'){
      setUser(true);
      setEmail('');
      setPassword('');
     }else{
      alert("Email or Password is incorrect")
     }
    
  };

  return (
    <div
    className="flex items-center justify-center h-screen bg-cover"
    style={{
      backgroundImage: 'url("https://images.pexels.com/photos/876467/pexels-photo-876467.jpeg?auto=compress&cs=tinysrgb&w=4500")',
    }}
  >
    <div className="login-container  bg-slate-700 text-white opacity-70 p-8 rounded-md shadow-md flex items-center space-x-4">
      <div>
        {/* Add your user icon/image here */}
        <img
          src="data:image/jpeg;base64,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"
          alt="User Icon"
          className="w-16 h-16 rounded-full"
        />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Login as Admin</h2>
        <p className="mb-2">Use the following login credentials:</p>
        <p className="p mb-2"><b>Email:</b> purushottam@gmail.com</p>
        <p className="p mb-4"><b>Password:</b> Admin</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="input-group text-blue-900">
            <input  
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              required
              className="w-full border p-2 rounded-md"
            />
          </div>
          <div className="input-group text-blue-600">
            <input 
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
              className="w-full border p-2 rounded-md"
            />
          </div>
          <div className="input-group">
            <input
              type="submit"
              value="Login"
              className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
            />
          </div>
        </form>
        <button
          className="buttons bg-gray-300 text-gray-700 p-2 rounded-md mt-4 cursor-pointer"
          onClick={() => setIsLogin(false)}
        >
          Survey-Page
        </button>
      </div>
    </div>
  </div>
  

  
  );
};

export default Login;
