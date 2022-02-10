import { ChangeEvent,useState,useCallback } from "react";
// import prop types
import { GameProps } from "../types";
// import custom hooks
import usePagination from "../customHooks/usePagination";
import useFetch from "../customHooks/useFetch";
// import components
import GameList from "./GameList";
import GameFilter from "./GameFilter";
import Pagination from "./Pagination";

const Home:React.FC = () => {
  const [itemsPerPage,setItemsPerPage]=useState(9);
  const [filter,setFilter]=useState({
    platform:"browser",
    genre:"mmo",
    tags:"",
    sortBy:"relevance"
    
  });
  const {games,error}=useFetch(filter);
  const { nextPage, prevPage, setPage, currentData, currentPage, maxPage }=usePagination(games as GameProps[],itemsPerPage);
  // filter function for change in select element
  const onFilterChange=useCallback((event:ChangeEvent<HTMLFormElement>)=>{
    event.preventDefault()
    setFilter(current=>({...current,[event.target.name]:event.target.value}))
  },[]);
  if(error)
  return <p>Aww snap ! some error occoured</p>
  return(
    <>
    <div className=" mx-auto w-8/12" >
      <GameFilter filter={filter} onFilterChange={onFilterChange}/>
    </div>
    <div className="w-8/12 mx-auto py-10">
    <label htmlFor="itemsPerPage" className="relative">
      <span className="selectLabel -top-6">Games Per Page</span>
    <select
      className="selectBox w-1/5" 
      onChange={(event:ChangeEvent<HTMLSelectElement>)=>setItemsPerPage(Number.parseInt(event.target.value))}>
    <option value="9">9</option>
    <option value="12">12</option>
    <option value="24">24</option>
    </select>
    </label>
    </div>
      <GameList games={currentData()}/>
      <Pagination nextPage={nextPage} prevPage={prevPage} setPage={setPage} currentPage={currentPage} maxPage={maxPage}/>
    </>
  );
};

export default Home;
