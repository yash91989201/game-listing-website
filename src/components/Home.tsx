import { useQuery } from "react-query";
import { GameProps } from "../types";
import GameList from "./GameList";

const fetchGameData=async():Promise<GameProps[]> =>{
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
  const {data,isLoading,error}=useQuery<GameProps[]>("gameData",fetchGameData);
  
  if(isLoading)
  return <p>game data is being loaded</p>
  if(error)
  return <p>error in fetching game data</p>
  return <div className="App w-full border-red-400 border-2">
    <GameList games={data}/>
  </div>;
};

export default Home;
