import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Particlebg } from '../components';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && email === storedUser.email && password === storedUser.password) {
      console.log('Login successful');
      navigate('/home');
    } else {
      console.log('Login failed');
      alert("User Not Found");
    }
  }


  return (
    <section>
      <Particlebg />
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
        <a href="#" className="flex items-center mb-6 text-5xl font-semibold  font-Hero text-[#CCE6F4]">
          CodeSkool
        </a>
        <div className="w-full  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 text-[#4BA3C3] bg-[#CCE6F4]">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 bg-[#CCE6F4] text-[#4BA3C3] rounded-xl">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl ">
              Welcome Back
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium ">Your email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#4BA3C3] border border-gray-300 text-[#CCE6F4] sm:text-sm rounded-lg block w-full p-2.5 placeholder-[#CCE6F4]"
                  placeholder="name@gmail.com"
                  required
                />



              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium ">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-[#4BA3C3] border border-gray-300 text-[#CCE6F4] sm:text-sm rounded-lg block w-full p-2.5 placeholder-[#CCE6F4]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#4BA3C3] text-[#CCE6F4] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Login
              </button>
              <p className="font-medium text-[#4BA3C3]">
                Don't have an account? <a className="font-semibold hover:underline" href="/Signup">
                  Register Now
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
