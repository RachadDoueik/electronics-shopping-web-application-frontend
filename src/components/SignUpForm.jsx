import { FaUser, FaEnvelope, FaLock, FaPhone, FaMapMarker } from 'react-icons/fa';

const SignUpForm = ({ formData, setFormData, handleSubmit }) => {
  return (
    <div className="auth-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <div className="input-group">
            <span className="input-group-addon"><FaUser /></span>
            <input 
              type="text"
              className="form-control"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Email</label>
          <div className="input-group">
            <span className="input-group-addon"><FaEnvelope /></span>
            <input 
              type="email"
              className="form-control"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Password</label>
          <div className="input-group">
            <span className="input-group-addon"><FaLock /></span>
            <input 
              type="password"
              className="form-control"
              placeholder="Your Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>
        </div>

        {/* Confirm Password skipped unless you're checking it in the backend */}

        <div className="form-group">
          <label>Phone</label>
          <div className="input-group">
            <span className="input-group-addon"><FaPhone /></span>
            <input 
              type="tel"
              className="form-control"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Address</label>
          <div className="input-group">
            <span className="input-group-addon"><FaMapMarker /></span>
            <input 
              type="text"
              className="form-control"
              placeholder="Your Address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
          </div>
        </div>

        <div className="form-group">
          <div className="checkbox">
            <label>
              <input type="checkbox" required /> I agree to the <a href="#">Terms & Conditions</a>
            </label>
          </div>
        </div>

        <button type="submit" className="primary-btn auth-btn">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
