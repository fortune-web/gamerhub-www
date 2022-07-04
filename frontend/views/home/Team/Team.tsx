/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next';
import { TeamMembers } from '../../../shared/data/team';
const Team: NextPage = () => {
  return (
    <div className="team" id="team">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-sm-10">
            <div className="section-title style-2">
              <h2>Meet the team.</h2>
              <p>
                A group of blockchain enthusiast who all believe crypto games
                should be even more accessible to all.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {TeamMembers.map((member) => (
            <div className="col-xl-3 col-lg-3 col-sm-6 mb-3 team-1">
              <div className="single-member">
                <div className="part-img">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="part-text">
                  <span className="name">{member.name}</span>
                  <span className="position">{member.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
