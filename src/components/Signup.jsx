import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate =useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, email, password });
navigate("/login")
};

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex flex-col gap-4"
      >
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Sign Up
        </h1>

        {/* Username */}
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700 dark:text-gray-300">Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
            required
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700 dark:text-gray-300">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
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
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="py-3 mt-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors duration-300 font-semibold"
        >
          Sign Up
        </button>

        {/* Optional: Login Link */}
        <p className="text-center text-gray-600 dark:text-gray-300 mt-2">
          Already have an account?{" "}
          <a href="/login" className="text-green-500 hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}