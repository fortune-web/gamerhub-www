import { useState } from 'react';
import { LoginData } from '../../../../pages/login';

interface Props {
  isDisabled?: boolean;
  handleLoginClick: (data: LoginData) => void;
}

export const Login = ({ isDisabled, handleLoginClick }: Props) => {
  const [email, setEmail] = useState('');

  return (
    <div className="register login-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-6 col-md-8">
            <div className="reg-body">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleLoginClick({ email });
                }}
              >
                <h4 className="sub-title">Please confirm you&apos;re human</h4>
                <input
                  required
                  type="email"
                  placeholder="Email*"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  disabled={isDisabled}
                  className="btn-form def-btn"
                >
                  Confirm
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
