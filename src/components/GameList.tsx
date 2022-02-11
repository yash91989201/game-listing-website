import { GameListProps } from "../types";
import GameCard from "./GameCard";

const GameList:React.FC<GameListProps> = ({games}) => {
  return (
    <div 
        className="
            grid grid-row-flow  gap-7 w-8/12 mx-auto 
            sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        ">
        {
        games?.map(game=>
            <div key={game.id}>
                <GameCard content={game} />
            </div>
        )
        }
    </div>
  );
};

export default GameList;
