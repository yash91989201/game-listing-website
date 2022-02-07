import { useQuery } from "react-query";
import usePagination from "../customHooks/usePagination";
import { GameProps } from "../types";
import GameList from "./GameList";
import Pagination from "./Pagination";

const fetchGameData=async():Promise<GameProps[]> =>{
  // https://free-to-play-games-database.p.rapidapi.com/api/games
  const res=await fetch("http://localhost:3001", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      "x-rapidapi-key": "1dd9ee7ab1msh835f5e7f1a69d6cp1489c7jsn064ebcd252fb"
    }
  });
    return await res.json();
}

const Home:React.FC = () => {
  const {data,isLoading,error}=useQuery<GameProps[]>("gameData",fetchGameData);
  const { nextPage, prevPage, setPage, currentData, currentPage, maxPage }=usePagination(data as GameProps[],6);
  if(isLoading )
  return <p>game data is being loaded</p>
  if(error)
  return <p>error in fetching game data</p>
  return(
    <>
      <GameList games={currentData()}/>
      <Pagination nextPage={nextPage} prevPage={prevPage} setPage={setPage} currentPage={currentPage} maxPage={maxPage}/>
    </>
  );
};

export default Home;
