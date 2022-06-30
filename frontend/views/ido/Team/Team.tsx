import Image from 'next/image';
import { TeamMembers } from '../../../shared/data/team';
import styles from './Team.module.scss';

export interface ITeam {}

const Team: React.FC<ITeam> = () => {
  return (
    <div className={styles.content} id="team">
      <div className="space-y-4">
        <label className="header3 text-grey-m_4">Team</label>
        <p className="body2 text-grey-m_4 uppercase">
          The development and strategic direction of GamerHub are being led by a
          deeply experienced team. The executive and development team experience
          spans the gaming, blockchain, IT, and finance industries. Each team
          member is highly accomplished in their respective fields and holds a
          role that leverages their skillset. The remainder of this section will
          present a profile of each of the key team members.
        </p>
      </div>
      {TeamMembers.map((member, idx) => (
        <div className="space-y-4 mt-8" key={idx}>
          <label className="body2 text-grey-m_4 uppercase">{member.name}</label>
          <div>
            <Image src={member.image} width="188" height="188" alt="team" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
