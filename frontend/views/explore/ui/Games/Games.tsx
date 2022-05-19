import { AllGenresIcon } from '../Icons/Icons';
import { EachGame, Game } from '../Game/Game';

interface Props {
  data: EachGame[][];
}

export const Games = ({ data }: Props) => {
  return (
    <div className="col-xl-9 col-lg-9 col-md-8">
      <div className="all-games anim-change">
        <div className="title-cover">
          <h4 className="games-title">
            <span className="icon icon-1">
              <AllGenresIcon />
            </span>
            All Games
          </h4>
        </div>
        <div className="row miscoo-row">
          {data.map((gameRow, index) => {
            return (
              <div className="row miscoo-row" key={index}>
                {gameRow.map((game, gIndex) => {
                  return (
                    <Game
                      imageSrc={game.imageSrc}
                      title={game.title}
                      ctaLink={game.ctaLink}
                      ctaText={game.ctaText}
                      key={gIndex}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
