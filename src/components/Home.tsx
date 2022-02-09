import { ChangeEvent,useState,useCallback } from "react";
import { useQuery } from "react-query";
import usePagination from "../customHooks/usePagination";
import { GameProps } from "../types";
import GameFilter from "./GameFilter";
import GameList from "./GameList";
import Pagination from "./Pagination";

const fetchGameData=async():Promise<GameProps[]> =>{
  // https://free-to-play-games-database.p.rapidapi.com/api/games
  const res=await fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      "x-rapidapi-key": "1dd9ee7ab1msh835f5e7f1a69d6cp1489c7jsn064ebcd252fb"
    }
  });
    return await res.json();
}

const Home:React.FC = () => {
  const [itemsPerPage,setItemsPerPage]=useState(6);
  const [filter,setFilter]=useState({
    platform:"Windows (PC)",
    
  });
  const {data,isLoading,error}=useQuery<GameProps[]>("gameData",fetchGameData);
  const { nextPage, prevPage, setPage, currentData, currentPage, maxPage }=usePagination(data as GameProps[],itemsPerPage);
  if(isLoading )
  return <p>game data is being loaded</p>
  if(error)
  return <p>error in fetching game data</p>
  return(
    <>
    <div className="border mx-auto w-8/12" >
      <GameFilter/>
    </div>
    <div className="border w-8/12 mx-auto py-6">
    <select
      className="w-16" 
      onChange={(event:ChangeEvent<HTMLSelectElement>)=>setItemsPerPage(Number.parseInt(event.target.value))}>
    <option value="9">9</option>
    <option value="12">12</option>
    <option value="24">24</option>
    </select>
    </div>
      <GameList games={currentData()}/>
      <Pagination nextPage={nextPage} prevPage={prevPage} setPage={setPage} currentPage={currentPage} maxPage={maxPage}/>
    </>
  );
};

export default Home;
