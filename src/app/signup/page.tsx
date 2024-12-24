"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";

interface SignupValues {
  name: string;
  email: string;
  password: string;
}

export default function Signup() {
  const { register, handleSubmit } = useForm<SignupValues>();

  const onSubmit = async (data: SignupValues) => {
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    if (res.ok) {
      alert("Signup successful!");
      window.location.href = "/login";
    } else {
      alert(result.error);
    }
  };

  return (
    <div className='flex items-center justify-center h-screen'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-full max-w-md p-6 bg-white shadow-md rounded-lg'
      >
        <h2 className='text-2xl font-semibold mb-6'>Sign Up</h2>
        <input
          {...register("name")}
          type='text'
          placeholder='Full Name'
          className='w-full p-4 border rounded mb-4'
        />
        <input
          {...register("email")}
          type='email'
          placeholder='Email'
          className='w-full p-4 border rounded mb-4'
        />
        <input
          {...register("password")}
          type='password'
          placeholder='Password'
          className='w-full p-4 border rounded mb-4'
        />
        <button
          type='submit'
          className='w-full bg-primary p-4 text-white rounded'
        >
          Register
        </button>
        <p className='text-center mt-4'>
          Already have an account?{" "}
          <Link href='/login' className='text-primary'>
            Log In
          </Link>
        </p>
      </form>
    </div>
  );
}
