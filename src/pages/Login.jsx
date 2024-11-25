import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router";

const Login = () => {
    const { userLogIn, googleLogIn } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        userLogIn(email, password)
            .then(result => {
                console.log(result);
                e.target.reset();
                navigate('/')
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    const handleGoogleLogin = () => {
        googleLogIn()
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            <p>New here? <Link className="btn btn-link" to="/register">Register</Link></p>
                        </div>
                    </form>
                    <p><button onClick={handleGoogleLogin} className="btn btn-ghost">Google</button></p>
                </div>
            </div>
        </div>
    );
};

export default Login;