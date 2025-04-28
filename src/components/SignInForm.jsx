import { FaEnvelope, FaLock, FaGoogle} from 'react-icons/fa';

const SignInForm = () => {
  return (
    <div className="auth-form">
      <form>
        <div className="form-group">
          <label>Email</label>
          <div className="input-group">
            <span className="input-group-addon">
              <FaEnvelope />
            </span>
            <input 
              type="email" 
              className="form-control" 
              placeholder="Your Email" 
              required 
            />
          </div>
        </div>
        
        <div className="form-group">
          <label>Password</label>
          <div className="input-group">
            <span className="input-group-addon">
              <FaLock />
            </span>
            <input 
              type="password" 
              className="form-control" 
              placeholder="Your Password" 
              required 
            />
          </div>
        </div>
        
        <div className="form-group">
          <div className="checkbox">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="pull-right">Forgot Password?</a>
          </div>
        </div>
        
        <button type="submit" className="primary-btn auth-btn">
          Sign In
        </button>
        
        <div className="auth-divider">
          <span>OR</span>
        </div>
        
        <div className="social-auth">
          <button type="button" className="social-btn google">
            <FaGoogle /> Sign in with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;