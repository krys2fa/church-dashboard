"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";

interface FormValues {
  email: string;
  password: string;
}

export default function Login() {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    if (res.ok) {
      window.location.href = "/dashboard";
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
        <h2 className='text-2xl font-semibold mb-6'>Login</h2>
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
          Sign In
        </button>
        <p className='text-center mt-4'>
          No account?{" "}
          <Link href='/signup' className='text-primary'>
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}
