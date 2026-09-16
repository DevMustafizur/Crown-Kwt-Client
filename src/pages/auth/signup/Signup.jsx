import { Link } from "react-router"
import "./signup.css"

const Signup = () => {
  return (
    <section id="signup">
      <header className="signup-header">
        <h1>Welcome to <i>Crown Kwt</i> </h1>
        <p>Create your account to get started</p>
      </header>
      <div className="signup-controller">
        <form action="" className="signup-form">
          {/* name */}
          <div className="form-group">
            <label htmlFor="">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Enter Your Full Name" required />
          </div>

          {/* email */}
          <div className="form-group">
            <label htmlFor="">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Enter Your Email" required />
          </div>

          {/* phone */}
          <div className="form-group">
            <label htmlFor="">Phone Number</label>
            <input type="text" id="phone" name="phone" placeholder="Enter Your Phone Number" required />
          </div>

          {/* password */}
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter Your Password" required />
          </div>

          {/* Submit */}
          <button type="submit" className="signup-btn"> Create Account </button>
        </form>

        <div className="signup-login">
          <p> Already have an account? <Link to={'/auth/login'} className="action action-login-btn">Login</Link> </p>
        </div>
      </div>
    </section>
  )
}

export default Signup