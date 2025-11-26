"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { signIn } from "next-auth/react";
import { AiFillGoogleCircle, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const RegisterPage = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Backend register API call
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000"}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        Swal.fire({ icon: "error", title: "Registration Failed", text: data.message || "Something went wrong!" });
        setLoading(false);
        return;
      }

      // auto login using NextAuth credentials
      const loginResult = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (loginResult?.error) {
        Swal.fire({ icon: "success", title: "Account created!", text: "Please login manually." });
        router.replace("/login");
      } else {
        Swal.fire({ icon: "success", title: "Account Created!", text: "Logging in...", timer: 1200, showConfirmButton: false });
        router.replace("/");
      }
    } catch (err) {
      Swal.fire({ icon: "error", title: "Error", text: "Server not responding!" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative px-4">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 animate-gradient-background -z-10"></div>

      <div className="max-w-md w-full bg-white/20 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/30 animate-fadeInUp">
        <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-white to-yellow-300">
          Create Account
        </h2>

        {/* Google Signup */}
        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="w-full mb-4 px-4 py-2 bg-gradient-to-r from-red-500 via-pink-500 to-red-600 text-white rounded flex items-center justify-center gap-2 hover:from-red-600 hover:via-pink-600 hover:to-red-700 transition"
        >
          <AiFillGoogleCircle size={20} /> Continue with Google
        </button>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-white/50" />
          <span className="px-2 text-white/70">or</span>
          <hr className="flex-grow border-white/50" />
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded bg-white/30 text-white placeholder-white/70 focus:ring-2 focus:ring-pink-400 outline-none transition"
          />

          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded bg-white/30 text-white placeholder-white/70 focus:ring-2 focus:ring-pink-400 outline-none transition"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded bg-white/30 text-white placeholder-white/70 focus:ring-2 focus:ring-pink-400 outline-none transition"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-white/70"
            >
              {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
            </span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full px-4 py-2 rounded-full font-bold text-white shadow-lg transition-all ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-indigo-500 hover:via-pink-500 hover:to-purple-500"
            }`}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="mt-4 text-sm text-white/80 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-yellow-300 hover:underline">
            Login
          </a>
        </p>
      </div>

      <style jsx>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-background {
          background-size: 600% 600%;
          animation: gradientMove 20s ease infinite;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp { animation: fadeInUp 1s ease forwards; }
      `}</style>
    </div>
  );
};

export default RegisterPage;
