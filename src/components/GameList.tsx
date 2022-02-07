import { GameListProps } from "../types";
import GameCard from "./GameCard";

const GameList:React.FC<GameListProps> = ({err,games}) => {
  return <div className="grid grid-cols-3  grid-row-flow  gap-6 w-8/12 mx-auto">
      {games?.map(game=>
          <div key={game.id}>
              <GameCard content={game} />
          </div>
      )}
  </div>;
};

export default GameList;
