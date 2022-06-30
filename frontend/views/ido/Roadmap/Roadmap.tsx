import { NextPage } from 'next';
import Image from 'next/image';

export interface IRoadmap {}

const Roadmap: NextPage = () => {
  return (
    <div className="mt-12 flex flex-col" id="roadmap">
      <label className="header3 text-grey-m_4 mb-4">Project Roadmap</label>
      <div>
        <Image
          src="/static/img/roadmap.png"
          width="800"
          height="480"
          alt="roadmap"
        />
      </div>
    </div>
  );
};

export default Roadmap;
