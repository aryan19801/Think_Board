import { useState } from "react";
import { Mail, Lock, User, UserCircle } from "lucide-react";
import { toast } from "react-hot-toast";
import api from "../lib/axios";
import { useNavigate } from "react-router";

export default function AuthPage({setUser}) {
  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const Navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const endpoint = isLogin ? "/auth/login" : "/auth/signup";

      const payload = isLogin
        ? {
            email: formData.email,
            password: formData.password,
          }
        : formData;

      const { data } = await api.post(endpoint, payload);

      toast.success(data.message);

      console.log("User:", data.user);
     
      if(!isLogin){
        setIsLogin(false);
        setFormData({
          firstName: "",
          lastName: "", password: "", email: "",
        });
      }
      else{
        setUser(data.user)
        Navigate("/")
      }
      

      // Navigate to dashboard here
      // navigate("/");

    } catch (error) {
      toast.error(
        error.response?.data?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h1>

          <p className="text-center text-base-content/70">
            {isLogin
              ? "Login to continue"
              : "Sign up to get started"}
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 mt-6"
          >
            {!isLogin && (
              <>
                <label className="input input-bordered flex items-center gap-2">
                  <User size={18} />
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="grow"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </label>

                <label className="input input-bordered flex items-center gap-2">
                  <UserCircle size={18} />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="grow"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </label>
              </>
            )}

            <label className="input input-bordered flex items-center gap-2">
              <Mail size={18} />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="grow"
                value={formData.email}
                onChange={handleChange}
              />
            </label>

            <label className="input input-bordered flex items-center gap-2">
              <Lock size={18} />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="grow"
                value={formData.password}
                onChange={handleChange}
              />
            </label>

            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={loading}
            >
              {loading
                ? "Please wait..."
                : isLogin
                ? "Login"
                : "Create Account"}
            </button>
          </form>

          <div className="divider">
            {isLogin
              ? "New Here?"
              : "Already Have An Account?"}
          </div>

          <button
            className="btn btn-outline w-full"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin
              ? "Create New Account"
              : "Login Instead"}
          </button>
        </div>
      </div>
    </div>
  );
}