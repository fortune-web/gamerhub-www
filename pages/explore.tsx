import { NextPage } from 'next';
import { Frame } from '../frontend/core/frame/Frame';

const Explore: NextPage = () => {
  return (
    <Frame>
      <div className="games game-page">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-4">
              <div className="game-menu">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link active" href="#0">
                      <span className="icon icon-1">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fal"
                          data-icon="th-large"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="svg-inline--fa fa-th-large fa-w-16 fa-fw fa-2x"
                        >
                          <path
                            fill="currentColor"
                            d="M0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48H48C21.49 32 0 53.49 0 80zm240-16v176H32V80c0-8.837 7.163-16 16-16h192zM32 432V272h208v176H48c-8.837 0-16-7.163-16-16zm240 16V272h208v160c0 8.837-7.163 16-16 16H272zm208-208H272V64h192c8.837 0 16 7.163 16 16v160z"
                          ></path>
                        </svg>
                      </span>
                      <span className="text">All Genres</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#0">
                      <span className="icon icon-2">
                        <img src="assets/img/svg/casino.svg" alt="" />
                      </span>
                      <span className="text">Slots</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#0">
                      <span className="icon icon-3"></span>
                      <span className="text">Mega Matrix</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#0">
                      <span className="icon icon-4"></span>
                      <span className="text">Casino & Poker</span>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="#0">
                      <span className="icon icon-5">
                        <img src="assets/img/svg/power-ball.svg" alt="" />
                      </span>
                      <span className="text">Lottery</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#0">
                      <span className="icon icon-6">
                        <img src="assets/img/svg/jackpot.svg" alt="" />
                      </span>
                      <span className="text">Jackpot Slots</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#0">
                      <span className="icon icon-7"></span>
                      <span className="text">Trending Now</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#0">
                      <span className="icon icon-8"></span>
                      <span className="text">New Release</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#0">
                      <span className="icon icon-9"></span>
                      <span className="text">Most Popular</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="games-filter-area">
                <div className="blog-search">
                  <form>
                    <input type="text" placeholder="seach the blog..." />
                    <button>
                      <i className="fas fa-search"></i>
                    </button>
                  </form>
                </div>
                <div className="filtering">
                  <div className="dropdown">
                    <button
                      className="dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Filter By Category
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a className="dropdown-item" href="#">
                        Action Games
                      </a>
                      <a className="dropdown-item" href="#">
                        Intellectual
                      </a>
                      <a className="dropdown-item" href="#">
                        Online Casino
                      </a>
                      <a className="dropdown-item" href="#">
                        Lottery Draw
                      </a>
                      <a className="dropdown-item" href="#">
                        Chess Master
                      </a>
                    </div>
                  </div>
                </div>
                <div className="filtering">
                  <div className="dropdown">
                    <button
                      className="dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton2"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Filter By Tags
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton2"
                    >
                      <a className="dropdown-item" href="#">
                        blog
                      </a>
                      <a className="dropdown-item" href="#">
                        games
                      </a>
                      <a className="dropdown-item" href="#">
                        casino
                      </a>
                      <a className="dropdown-item" href="#">
                        racing
                      </a>
                      <a className="dropdown-item" href="#">
                        fighting
                      </a>
                      <a className="dropdown-item" href="#">
                        action
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-8">
              <div className="all-games anim-change">
                <div className="title-cover">
                  <h4 className="games-title">
                    <span className="icon icon-1"></span> All Games
                  </h4>
                </div>
                <div className="row miscoo-row">
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="single-game">
                      <div className="part-img">
                        <img src="assets/img/games/assets-1.jpg" alt="" />
                        <img
                          className="icon-img"
                          src="assets/img/games/icon-1.png"
                          alt=""
                        />
                      </div>
                      <div className="part-text">
                        <h4 className="game-title">IceBall 71</h4>
                        <a href="#0" className="def-btn def-small">
                          Play Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="single-game">
                      <div className="part-img">
                        <img src="assets/img/games/assets-2.jpg" alt="" />
                        <img
                          className="icon-img"
                          src="assets/img/games/icon-2.png"
                          alt=""
                        />
                      </div>
                      <div className="part-text">
                        <h4 className="game-title">IceBall 71</h4>
                        <a href="#0" className="def-btn def-small">
                          Play Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="single-game">
                      <div className="part-img">
                        <img src="assets/img/games/assets-3.jpg" alt="" />
                        <img
                          className="icon-img"
                          src="assets/img/games/icon-5.png"
                          alt=""
                        />
                      </div>
                      <div className="part-text">
                        <h4 className="game-title">IceBall 71</h4>
                        <a href="#0" className="def-btn def-small">
                          Play Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="single-game">
                      <div className="part-img">
                        <img src="assets/img/games/assets-4.jpg" alt="" />
                        <img
                          className="icon-img"
                          src="assets/img/games/icon-3.png"
                          alt=""
                        />
                      </div>
                      <div className="part-text">
                        <h4 className="game-title">IceBall 71</h4>
                        <a href="#0" className="def-btn def-small">
                          Play Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="single-game">
                      <div className="part-img">
                        <img src="assets/img/games/assets-5.jpg" alt="" />
                        <img
                          className="icon-img"
                          src="assets/img/games/icon-4.png"
                          alt=""
                        />
                      </div>
                      <div className="part-text">
                        <h4 className="game-title">IceBall 71</h4>
                        <a href="#0" className="def-btn def-small">
                          Play Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="single-game">
                      <div className="part-img">
                        <img src="assets/img/games/assets-6.jpg" alt="" />
                        <img
                          className="icon-img"
                          src="assets/img/games/icon-6.png"
                          alt=""
                        />
                      </div>
                      <div className="part-text">
                        <h4 className="game-title">IceBall 71</h4>
                        <a href="#0" className="def-btn def-small">
                          Play Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="single-game">
                      <div className="part-img">
                        <img src="assets/img/games/assets-9.jpg" alt="" />
                        <img
                          className="icon-img"
                          src="assets/img/games/icon-2.png"
                          alt=""
                        />
                      </div>
                      <div className="part-text">
                        <h4 className="game-title">IceBall 71</h4>
                        <a href="#0" className="def-btn def-small">
                          Play Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="single-game">
                      <div className="part-img">
                        <img src="assets/img/games/assets-8.jpg" alt="" />
                        <img
                          className="icon-img"
                          src="assets/img/games/icon-5.png"
                          alt=""
                        />
                      </div>
                      <div className="part-text">
                        <h4 className="game-title">IceBall 71</h4>
                        <a href="#0" className="def-btn def-small">
                          Play Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="all-games anim-change">
                <div className="title-cover">
                  <h4 className="games-title">
                    <span className="icon icon-8"></span> New Release
                  </h4>
                </div>
                <div className="row miscoo-row">
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="single-game">
                      <div className="part-img">
                        <img src="assets/img/games/assets-9.jpg" alt="" />
                        <img
                          className="icon-img"
                          src="assets/img/games/icon-2.png"
                          alt=""
                        />
                      </div>
                      <div className="part-text">
                        <h4 className="game-title">IceBall 71</h4>
                        <a href="#0" className="def-btn def-small">
                          Play Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="single-game">
                      <div className="part-img">
                        <img src="assets/img/games/assets-8.jpg" alt="" />
                        <img
                          className="icon-img"
                          src="assets/img/games/icon-5.png"
                          alt=""
                        />
                      </div>
                      <div className="part-text">
                        <h4 className="game-title">IceBall 71</h4>
                        <a href="#0" className="def-btn def-small">
                          Play Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="single-game">
                      <div className="part-img">
                        <img src="assets/img/games/assets-7.jpg" alt="" />
                        <img
                          className="icon-img"
                          src="assets/img/games/icon-1.png"
                          alt=""
                        />
                      </div>
                      <div className="part-text">
                        <h4 className="game-title">IceBall 71</h4>
                        <a href="#0" className="def-btn def-small">
                          Play Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="single-game">
                      <div className="part-img">
                        <img src="assets/img/games/assets-1.jpg" alt="" />
                        <img
                          className="icon-img"
                          src="assets/img/games/icon-1.png"
                          alt=""
                        />
                      </div>
                      <div className="part-text">
                        <h4 className="game-title">IceBall 71</h4>
                        <a href="#0" className="def-btn def-small">
                          Play Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="single-game">
                      <div className="part-img">
                        <img src="assets/img/games/assets-2.jpg" alt="" />
                        <img
                          className="icon-img"
                          src="assets/img/games/icon-2.png"
                          alt=""
                        />
                      </div>
                      <div className="part-text">
                        <h4 className="game-title">IceBall 71</h4>
                        <a href="#0" className="def-btn def-small">
                          Play Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="single-game">
                      <div className="part-img">
                        <img src="assets/img/games/assets-3.jpg" alt="" />
                        <img
                          className="icon-img"
                          src="assets/img/games/icon-5.png"
                          alt=""
                        />
                      </div>
                      <div className="part-text">
                        <h4 className="game-title">IceBall 71</h4>
                        <a href="#0" className="def-btn def-small">
                          Play Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="single-game">
                      <div className="part-img">
                        <img src="assets/img/games/assets-8.jpg" alt="" />
                        <img
                          className="icon-img"
                          src="assets/img/games/icon-5.png"
                          alt=""
                        />
                      </div>
                      <div className="part-text">
                        <h4 className="game-title">IceBall 71</h4>
                        <a href="#0" className="def-btn def-small">
                          Play Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="single-game">
                      <div className="part-img">
                        <img src="assets/img/games/assets-7.jpg" alt="" />
                        <img
                          className="icon-img"
                          src="assets/img/games/icon-1.png"
                          alt=""
                        />
                      </div>
                      <div className="part-text">
                        <h4 className="game-title">IceBall 71</h4>
                        <a href="#0" className="def-btn def-small">
                          Play Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="all-games anim-change">
                <div className="title-cover">
                  <h4 className="games-title">
                    <span className="icon icon-9"></span> Most Popular
                  </h4>
                </div>
                <div className="row miscoo-row">
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="single-game">
                      <div className="part-img">
                        <img src="assets/img/games/assets-4.jpg" alt="" />
                        <img
                          className="icon-img"
                          src="assets/img/games/icon-3.png"
                          alt=""
                        />
                      </div>
                      <div className="part-text">
                        <h4 className="game-title">IceBall 71</h4>
                        <a href="#0" className="def-btn def-small">
                          Play Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="single-game">
                      <div className="part-img">
                        <img src="assets/img/games/assets-5.jpg" alt="" />
                        <img
                          className="icon-img"
                          src="assets/img/games/icon-4.png"
                          alt=""
                        />
                      </div>
                      <div className="part-text">
                        <h4 className="game-title">IceBall 71</h4>
                        <a href="#0" className="def-btn def-small">
                          Play Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="single-game">
                      <div className="part-img">
                        <img src="assets/img/games/assets-6.jpg" alt="" />
                        <img
                          className="icon-img"
                          src="assets/img/games/icon-6.png"
                          alt=""
                        />
                      </div>
                      <div className="part-text">
                        <h4 className="game-title">IceBall 71</h4>
                        <a href="#0" className="def-btn def-small">
                          Play Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="single-game">
                      <div className="part-img">
                        <img src="assets/img/games/assets-9.jpg" alt="" />
                        <img
                          className="icon-img"
                          src="assets/img/games/icon-2.png"
                          alt=""
                        />
                      </div>
                      <div className="part-text">
                        <h4 className="game-title">IceBall 71</h4>
                        <a href="#0" className="def-btn def-small">
                          Play Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="single-game">
                      <div className="part-img">
                        <img src="assets/img/games/assets-8.jpg" alt="" />
                        <img
                          className="icon-img"
                          src="assets/img/games/icon-5.png"
                          alt=""
                        />
                      </div>
                      <div className="part-text">
                        <h4 className="game-title">IceBall 71</h4>
                        <a href="#0" className="def-btn def-small">
                          Play Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="single-game">
                      <div className="part-img">
                        <img src="assets/img/games/assets-7.jpg" alt="" />
                        <img
                          className="icon-img"
                          src="assets/img/games/icon-1.png"
                          alt=""
                        />
                      </div>
                      <div className="part-text">
                        <h4 className="game-title">IceBall 71</h4>
                        <a href="#0" className="def-btn def-small">
                          Play Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="single-game">
                      <div className="part-img">
                        <img src="assets/img/games/assets-2.jpg" alt="" />
                        <img
                          className="icon-img"
                          src="assets/img/games/icon-2.png"
                          alt=""
                        />
                      </div>
                      <div className="part-text">
                        <h4 className="game-title">IceBall 71</h4>
                        <a href="#0" className="def-btn def-small">
                          Play Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="single-game">
                      <div className="part-img">
                        <img src="assets/img/games/assets-3.jpg" alt="" />
                        <img
                          className="icon-img"
                          src="assets/img/games/icon-5.png"
                          alt=""
                        />
                      </div>
                      <div className="part-text">
                        <h4 className="game-title">IceBall 71</h4>
                        <a href="#0" className="def-btn def-small">
                          Play Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Frame>
  );
};

export default Explore;
