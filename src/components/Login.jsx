import { useState } from "react";
import { useNavigate } from "react-router-dom"


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate =useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ email, password });
    navigate("/")
    // TODO: call backend API
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <form
        
        className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex flex-col gap-4"
      >
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Login
        </h1>

        {/* Email */}
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700 dark:text-gray-300">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            required
          />
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700 dark:text-gray-300">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="py-3 mt-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300 font-semibold"
          onClick={handleLogin}
        >
          Login
        </button>

        {/* Optional: Signup Link */}
        <p className="text-center text-gray-600 dark:text-gray-300 mt-2">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
}