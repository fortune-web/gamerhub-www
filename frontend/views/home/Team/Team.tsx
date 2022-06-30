/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next';

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
          <div className="col-xl-3 col-lg-3 col-sm-6 mb-3 team-1">
            <div className="single-member">
              <div className="part-img">
                <img src="/static/img/team/victor.png" alt="victor" />
              </div>
              <div className="part-text">
                <span className="name">Victor Kaycee</span>
                <span className="position">Co-founder & CEO</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-sm-6 mb-3 team-2">
            <div className="single-member">
              <div className="part-img">
                <img src="/static/img/team/glory.png" alt="glory" />
              </div>
              <div className="part-text">
                <span className="name">Glory Lucas</span>
                <span className="position">Co-founder & CMO</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-sm-6 mb-3 team-3">
            <div className="single-member">
              <div className="part-img">
                <img src="/static/img/team/jeffery.png" alt="jeffery" />
              </div>
              <div className="part-text">
                <span className="name">Jeffery Pan (SoftBank)</span>
                <span className="position">Investment Advisor</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-sm-6 mb-3 team-3">
            <div className="single-member">
              <div className="part-img">
                <img src="/static/img/team/caleb-20220206002729.png" alt="" />
              </div>
              <div className="part-text">
                <span className="name">Caleb Lucas</span>
                <span className="position">Engineering Manager</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-sm-6 mb-3 team-4">
            <div className="single-member">
              <div className="part-img">
                <img src="/static/img/team/rex-20220206002749.png" alt="" />
              </div>
              <div className="part-text">
                <span className="name">Rex Matthews</span>
                <span className="position">Senior Community Manager</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-sm-6 mb-3 team-1">
            <div className="single-member">
              <div className="part-img">
                <img src="/static/img/team/haseeb.png" alt="haseeb" />
              </div>
              <div className="part-text">
                <span className="name">Haseeb Ur Rehman</span>
                <span className="position">Lead Engineer</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-sm-6 mb-3 team-2">
            <div className="single-member">
              <div className="part-img">
                <img src="/static/img/team/rehan.png" alt="rehan" />
              </div>
              <div className="part-text">
                <span className="name">Rehan Butt</span>
                <span className="position">Blockchain Developer</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-sm-6 mb-3 team-3">
            <div className="single-member">
              <div className="part-img">
                <img src="/static/img/team/zeeshan.png" alt="zeeshan" />
              </div>
              <div className="part-text">
                <span className="name">Zeeshan Yasin</span>
                <span className="position">Mobile developer</span>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="col-xl-3 col-lg-3 col-sm-6 mb-3 team-4">
            <div className="single-member">
              <div className="part-img">
                <img src="/static/img/team/femi.png" alt="femi" />
              </div>
              <div className="part-text">
                <span className="name">M. Anas</span>
                <span className="position">UI Designer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
