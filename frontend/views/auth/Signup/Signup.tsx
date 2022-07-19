import Image from 'next/image';
import { useState } from 'react';
import styles from './Signup.module.scss';
import eye from '../../../shared/assets/icon/eye.png';
import classNames from 'classnames';

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onChangeEmail = (e: any) => {
    const _val = e.target.value;
    setEmail(_val);
  };
  const onChangePwd = (e: any) => {
    const _val = e.target.value;
    setPassword(_val);
  };
  return (
    <div className={styles.bg}>
      <h1 className={classNames('header2', styles.sign_text)}>
        Create a Gamerhub account <span>.</span>
      </h1>
      <div className="w-full px-1 max-w-md mx-auto">
        <div className="mt-12">
          <input
            placeholder="Email"
            type="text"
            value={email}
            onChange={onChangeEmail}
            className={styles.input}
          />
        </div>
        <div className="mt-6 relative">
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={onChangePwd}
            className={styles.input}
          />
          <button className={styles.img}>
            <Image src={eye} />
          </button>
        </div>
        <div className="text-center">
          <button className={classNames('body1', styles.signup_btn)}>
            Create account
          </button>
        </div>
      </div>
      <div className="flex items-start px-1 justify-center ">
        <input
          type="checkbox"
          className={classNames('body2', styles.checkbox)}
        ></input>
        <h1 className={styles.signup_check}>
          I agree to Gamerhub's<span>Terms and Conditions</span>
          {`&`}
          <span>Privacy Policy</span>
        </h1>
      </div>
    </div>
  );
};

export default Signup;
