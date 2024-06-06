"use client";

import Link from "next/link";
import React, { useState } from "react";

const SignInPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formFilled, setFormFilled] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Check if both fields are filled
    if (formData.email.trim() !== "" && formData.password.trim() !== "") {
      setFormFilled(true);
    } else {
      setFormFilled(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-in logic here
    console.log("Form submitted:", formData);
    // Redirect only if the form is filled
    if (formFilled) {
      window.location.href = "/";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign In</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <Link href="/Sign-Up">
            <div className="mt-1 flex justify-end  hover:underline hover:text-blue-400">
              New User?
            </div>
          </Link>
          <button
            type="submit"
            className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              !formFilled && "opacity-50 cursor-not-allowed"
            }`}
            disabled={!formFilled}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
