"use client"
import { useState } from 'react';
import Link from 'next/link'
import Header from "../components/Header"

const page = () => {
  const [isLogin, setIsLogin] = useState(true);  // Toggle between login and sign-up
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userType, setUserType] = useState('buyer'); // State for user type
    const [error, setError] = useState('');

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Please fill in both fields');
        } else {
            setError('');
            // Handle login logic here
            console.log('Logging in with:', { email, password, userType });
        }
    };

    const handleSubmitSignUp = (e) => {
        e.preventDefault();
        if (!email || !password || !confirmPassword) {
            setError('Please fill in all fields');
        } else if (password !== confirmPassword) {
            setError('Passwords do not match');
        } else {
            setError('');
            // Handle sign-up logic here
            console.log('Signing up with:', { email, password, userType });
        }
    };

    return (
        <div>
        <Header></Header>
        <div className="flex justify-center items-center min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6">
                    {isLogin ? 'Login' : 'Sign Up'}
                </h2>
                <form onSubmit={isLogin ? handleSubmitLogin : handleSubmitSignUp}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    {!isLogin && (
                        <div className="mb-6">
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                    )}

                    <div className="flex items-center justify-center mb-2">
                    <div className="relative w-[70%] h-12 bg-green-500 rounded-full p-1 flex items-center">
        {/* Sliding Indicator */}
        <div
  className={`absolute w-[48.5%] h-10 rounded-full bg-blue-500 transition-transform duration-300 ease-in-out 
    ${userType === "buyer" ? "translate-x-0 bg-white" : "translate-x-full bg-white"}`}
></div>


        {/* Buyer Button */}
        <button
          onClick={() => setUserType("buyer")}
          className={`relative z-10 w-1/2 text-center text-lg font-semibold transition-all 
            ${userType === "buyer" ? "text-green-500" : "text-white"}`}
        >
          Buyer
        </button>

        {/* Investor Button */}
        <button
          onClick={() => setUserType("investor")}
          className={`relative z-10 w-1/2 text-center text-lg font-semibold transition-all 
            ${userType === "investor" ? "text-green-500" : "text-white"}`}
        >
          Investor
        </button>
      </div></div>

                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                    <button
                        type="submit"
                        className="w-full bg-clrbtn text-white py-3 rounded-lg hover:bg-blue-600 focus:outline-none"
                    >
                        {isLogin ? 'Login' : 'Sign Up'}
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">
                        {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
                        <button
                            onClick={() => setIsLogin(!isLogin)}
                            className="text-blue-500 hover:underline"
                        >
                            {isLogin ? 'Sign Up' : 'Login'}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default page