import { Link } from "react-router"
import "./login.css"

const Login = () => {
  return (
    <section id="login">
      <header className="login-header">
        <h1>Welcome Back!</h1>
        <p>Login to your <i>Crown Kwt</i> account</p>
      </header>
      <div className="login-controller">
        <form className="login-form">

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email Address"
              required
            />
          </div>

          <div className="form-group">
            <div className="password-label">
              <label htmlFor="password">Password</label>
              <Link to="/auth/forgot-password" className="action forget-action-btn">
                Forgot Password?
              </Link>
            </div>

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Your Password"
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

        </form>

        <div className="login-signup">
          <p>
            Don't have an account?
            <Link to="/auth/signup" className="action action-signup-btn">Create Account</Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Login