import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

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
            <h2 className="text-extrabold text-3xl text-gray-500">Login</h2>
            <form className="registerForm" onSubmit={handleSubmit}>
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
                <button className="mt-5 mb-5 border-none bg-white rounded-10 cursor-pointer text-purple-600">Log In</button>
            </form>
            <button className="link-btn text-gray-500" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here</button>
        </div>
    )
}
