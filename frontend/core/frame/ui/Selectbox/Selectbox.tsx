import Image from 'next/image';
import styles from './Selectbox.module.scss';
import dropdown from '../../../../shared/assets/icon/dropdown.png';

export interface ISelectbox {
  placeholder: string;
  options: {
    value: number;
    text: string;
  }[];
  change: any;
}

const Selectbox: React.FC<ISelectbox> = (props) => {
  const { options, change, placeholder } = props;

  return (
    <div className="inline-block relative w-full">
      <select
        className={styles.selectbox}
        onChange={(e) => change(e.target.value)}
      >
        <option disabled selected hidden>
          {placeholder}
        </option>
        {options.map((each) => (
          <option className={styles.selectbox_item} value={each.value}>
            {each.text}
          </option>
        ))}
      </select>
      <div
        className="
                pointer-events-none
                absolute
                inset-y-0
                right-3
                flex
                items-center
                px-2
                text-white
              "
      >
        <Image src={dropdown} />
      </div>
    </div>
  );
};

export default Selectbox;
