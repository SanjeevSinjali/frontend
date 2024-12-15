import { useState, useContext } from "react";
import { assets } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("companywala@example.com");
  const [password, setPassword] = useState("123@pas#Word");
  const { updateTokens } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/auth/token/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        toast.error(errorData.detail || "Login failed!");
        return;
      }

      const data = await response.json();
      updateTokens(data);
      toast.success("Login successful!");
      navigate("/jobs");
    } catch (error) {
      toast.error(`An error occurred: ${error}`);
    }
  };

  return (
    <main
      style={{
        backgroundImage: `linear-gradient(rgba(0, 50, 39, 0.8), rgba(125, 134, 132, 0.8)), url(${assets.img3})`,
      }}
      className="h-screen w-full bg-cover flex items-center justify-center p-10 min-h-screen"
    >
      <div className="max-w-[430px] h-[400px] bg-white w-full rounded-lg px-6 py-7 flex flex-col gap-5">
        <h6 className="font-semibold text-[28px] text-center">Login</h6>
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-4 py-2 rounded-md outline-mainColor"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border px-4 py-2 rounded-md outline-mainColor"
            required
          />
          <button
            type="button"
            className="hover:underline text-sm cursor-pointer"
          >
            Forget Password?
          </button>
          <button
            type="submit"
            className="text-center bg-mainColor hover:bg-hoverColor cursor-pointer text-white rounded-md px-4 py-2"
          >
            Login
          </button>
        </form>
        <p className="text-center flex justify-between">
          Don&apos;t have an account?
          <Link to="/register">
            <span className="hover:underline hover:text-mainColor">
              Register Now
            </span>
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
