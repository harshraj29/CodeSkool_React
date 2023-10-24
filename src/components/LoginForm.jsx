import React, { useState } from "react";

function LoginForm(props) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log();
  }

  return (
    <div className="auth-form-container
                backdrop-blur-lg
               [ p-8 md:p-10 lg:p-10 ]
               [ bg-gradient-to-b from-white/60 to-white/30 ]
               [ border-[1px] border-solid border-white border-opacity-30 ]
               [ shadow-black/70 shadow-2xl ]
    ">
      <h2 className="text-extrabold text-3xl text-gray-500">Register</h2>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="name" className="text-lg text-gray-500">Full name</label>
        <input
          value={name}
          type="text"
          name="name"
          id="name"
          placeholder="Full name"
          className="p-2 w-full border border-gray-300 rounded focus:outline-none focus:border-purple-600"
        />
        <label htmlFor="email" className="text-lg text-gray-500">Email</label>
        <input
          value={email}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
          className="p-2 w-full border border-gray-300 rounded focus:outline-none focus:border-purple-600"
        />
        <label htmlFor="password" className="text-lg text-gray-500">Password</label>
        <input
          value={pass}
          type="password"
          placeholder="********"
          id="password"
          name="password"
          className="p-2 w-full border border-gray-300 rounded focus:outline-none focus:border-purple-600"
        />
        <button className="mt-5 mb-5 border-none bg-white rounded-10 cursor-pointer text-purple-600">Register Now</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Already have an account? Login here</button>
    </div>
  )
}

export default LoginForm;
