import React, { useState } from 'react';
import { Particlebg } from '../components';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        const user = { name, email, password };

        localStorage.setItem('user', JSON.stringify(user));

        localStorage.setItem('isRegistered', 'true');

        setName(''); 
        setEmail('');
        setPassword('');

    };

    return (
        <section>
            <Particlebg />
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-5xl font-semibold font-Hero text-[#CCE6F4]">
                    CodeSkool
                </a>
                <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8 text-[#4BA3C3] bg-[#CCE6F4]">
                        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl ">
                            Create an Account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleRegister}>
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium ">Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Your Name"
                                    className="bg-[#4BA3C3] border border-gray-300 text-[#CCE6F4] sm:text-sm rounded-lg block w-full p-2.5 placeholder-[#CCE6F4]"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium ">Your email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-[#4BA3C3] border border-gray-300 text-[#CCE6F4] sm:text-sm rounded-lg block w-full p-2.5 placeholder-[#CCE6F4]"
                                    placeholder="name@company.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="bg-[#4BA3C3] border border-gray-300 text-[#CCE6F4] sm:text-sm rounded-lg block w-full p-2.5 placeholder-[#CCE6F4]"
                                    required
                                />
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id="terms"
                                        aria-describedby="terms"
                                        type="checkbox"
                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                        required
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className='font-medium'>
                                        I accept the <a className="font-semibold text-primary-600 hover:underline" href="#">
                                            Terms and Conditions
                                        </a>
                                    </label>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#4BA3C3] text-[#CCE6F4]  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Create an Account
                            </button>
                            <p className="text-sm font-medium">
                                Already have an account? <a className="font-semibold text-primary-600 hover:underline " href="/">
                                    Login here
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register;
