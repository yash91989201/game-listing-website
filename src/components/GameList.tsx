import { GameListProps } from "../types";
import GameCard from "./GameCard";

const GameList:React.FC<GameListProps> = ({games}) => {
  return (
    <div 
        className="
            grid grid-cols-3  grid-row-flow  gap-7 w-8/12 mx-auto 
            md:grid-cols-3 sm:grid-cols-2
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
