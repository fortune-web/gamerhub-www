import { useState } from 'react';
import Image from 'next/image';
import styles from './Profile.module.scss';
import classNames from 'classnames';
import Selectbox from '../../../core/frame/ui/Selectbox/Selectbox';
import { AgeValues, SexValues } from '../../../shared/data/profileInfo';
import ReactFlagsSelect from 'react-flags-select';

const Profile: React.FC = () => {
  const [username, setUsername] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [age, setAge] = useState(null);
  const [sex, setSex] = useState(null);
  const [selected, setSelected] = useState('');
  const onChangeUsername = (e: any) => {
    const _val = e.target.value;
    setUsername(_val);
  };
  const onChangeFirstname = (e: any) => {
    const _val = e.target.value;
    setFirstname(_val);
  };
  const onChangeLastname = (e: any) => {
    const _val = e.target.value;
    setLastname(_val);
  };

  return (
    <div className={styles.bg}>
      <h1 className={classNames('body2', styles.profile_text)}>
        Almost there!
      </h1>
      <h1 className={classNames('header2', styles.profile_text_header)}>
        Create your Gamerhub Profile<span>.</span>
      </h1>
      <div className="w-full px-1 max-w-md mx-auto">
        <div className="mt-12">
          <input
            placeholder="Username"
            type="text"
            value={username}
            onChange={onChangeUsername}
            className={styles.input}
          />
        </div>
        <div className="mt-6 relative">
          <input
            placeholder="First name"
            type="text"
            value={firstname}
            onChange={onChangeFirstname}
            className={styles.input}
          />
        </div>
        <div className="mt-6 relative">
          <input
            placeholder="Last name"
            type="text"
            value={lastname}
            onChange={onChangeLastname}
            className={styles.input}
          />
        </div>
        <div className="mt-6 relative flex justify-between gap-2.5">
          <div className="w-1/2">
            <Selectbox options={AgeValues} placeholder="Age" change={setAge} />
          </div>
          <div className="w-1/2">
            <Selectbox options={SexValues} placeholder="Sex" change={setSex} />
          </div>
        </div>

        <ReactFlagsSelect
          className={styles.flags}
          placeholder="Country of residence"
          searchable
          selected={selected}
          onSelect={(code) => setSelected(code)}
        />
        <div className="text-center">
          <button className={classNames('body1', styles.start_btn)}>
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
