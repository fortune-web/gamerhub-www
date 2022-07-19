import Image from 'next/image';
import { useState } from 'react';
import styles from './Mailverify.module.scss';
import classNames from 'classnames';

const Mailverify: React.FC = () => {
  return (
    <div className={styles.bg}>
      <h1 className={classNames('header2', styles.mailverify_text)}>
        Email Verification <span>.</span>
      </h1>
      <div className="w-full px-1 max-w-md mx-auto">
        <h1 className="body1 font-medium mt-6 text-grey-m_3 text-center">
          A verification code has been sent to your email. Kindly input the code
          to verify your email.
        </h1>
        <div className="mt-14 text-center ">
          <div className="grid grid-cols-6 gap-2.5">
            <input type="text" className={styles.input} />
            <input type="text" className={styles.input} />
            <input type="text" className={styles.input} />
            <input type="text" className={styles.input} />
            <input type="text" className={styles.input} />
            <input type="text" className={styles.input} />
          </div>
        </div>
        <h1 className={styles.mail_text}>
          Didn't get the code?<span>Resend code</span>
        </h1>
        <div className="text-center">
          <button className={classNames('body1', styles.mail_btn)}>
            Verify email
          </button>
        </div>
        <button className={classNames('body2', styles.cancel_btn)}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Mailverify;
