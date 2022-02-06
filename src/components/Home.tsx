import { useQuery } from "react-query";
import usePagination from "../customHooks/usePagination";
import { GameProps } from "../types";
import GameList from "./GameList";
import {FaAngleLeft,FaAngleRight} from "react-icons/fa"

const fetchGameData=async():Promise<GameProps[]> =>{
  const res=await fetch("https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      "x-rapidapi-key": "1dd9ee7ab1msh835f5e7f1a69d6cp1489c7jsn064ebcd252fb"
    }
  });
    return await res.json();
}

const Home:React.FC = () => {
  const {data,isLoading,isIdle,error}=useQuery<GameProps[]>("gameData",fetchGameData);
  const { nextPage, prevPage, setPage, currentData, currentPage, maxPage }=usePagination(data as GameProps[],12);
  if(isLoading || isIdle)
  return <p>game data is being loaded</p>
  if(error)
  return <p>error in fetching game data</p>
  return(
    <div className="App w-full">
      <div className="w-8/12 mx-auto py-8 flex text-center">
        <a href="/" onClick={()=>prevPage}><FaAngleLeft/></a>

        <a href="/" onClick={()=>nextPage}><FaAngleRight/></a>
      </div>
      <GameList games={data}/>
    </div>
  );
};

export default Home;
