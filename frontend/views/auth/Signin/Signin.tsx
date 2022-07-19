import Image from 'next/image';
import { useState } from 'react';
import styles from './Signin.module.scss';
import eye from '../../../shared/assets/icon/eye.png';
import classNames from 'classnames';

const Signin: React.FC = () => {
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
        Sign In to Gamerhub<span>.</span>
      </h1>
      <div className="w-full px-1 max-w-md mx-auto">
        <div className="mt-9">
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
          <button className={classNames('body1', styles.signin_btn)}>
            Sign In
          </button>
        </div>
      </div>
      <h1 className={classNames('body1', styles.signin_check)}>
        Don't have an account?
        <a href="#" className={classNames('body1', styles.signin_check_a)}>
          Create an Account
        </a>
      </h1>
    </div>
  );
};

export default Signin;
