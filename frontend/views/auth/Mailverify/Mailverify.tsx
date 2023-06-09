import Image from 'next/image';
import { useState } from 'react';
import styles from './Mailverify.module.scss';
import classNames from 'classnames';
import ReactInputVerificationCode from 'react-input-verification-code';

const Mailverify: React.FC = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);
  return (
    <div className={styles.bg}>
      <h1 className={classNames('header2', styles.mailverify_text)}>
        Email Verification <span>.</span>
      </h1>
      <div className="w-full px-1 max-w-lg mx-auto">
        <h1 className="body1 font-medium mt-6 text-grey-m_3 text-center">
          A verification code has been sent to your email. Kindly input the code
          to verify your email.
        </h1>
        <div className="mt-14 text-center ">
          <div className={styles.verifycode}>
            <ReactInputVerificationCode
              value={value}
              placeholder=""
              length={6}
              onChange={(newValue: any) => {
                setValue(newValue);
                if (newValue !== '') {
                  setError(null);
                }
              }}
            />
          </div>
        </div>
        <h1 className={classNames('body2', styles.mail_text)}>
          Didn't get the code?
          <a href="#" className={classNames('body2', styles.mail_text_a)}>
            Resend code
          </a>
        </h1>
        <div className="text-center">
          <button className={classNames('body1', styles.mail_btn)}>
            Verify email
          </button>
        </div>
        <div className="text-center">
          <button className={classNames('body2', styles.cancel_btn)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mailverify;
