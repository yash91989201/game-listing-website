import {FaAngleLeft,FaAngleRight,FaAngleDoubleLeft,FaAngleDoubleRight} from "react-icons/fa"
import {PaginationPropType} from "../types";

const Pagination = ({ nextPage, prevPage, setPage,  currentPage, maxPage}:PaginationPropType) => {
  let pageNumbers=[];
  for(let i=currentPage;i<=currentPage+5;i++)pageNumbers.push(i);

  return (
    <div className=" w-8/12 mx-auto my-12">
      <div className=" w-3/5 mx-auto flex justify-between">
       <div className="flex">
       <p className="paginationBtn" onClick={()=>setPage(1)} ><FaAngleDoubleLeft/></p>
          <p className="paginationBtn" onClick={()=>prevPage()} ><FaAngleLeft/></p>
       </div>
      <div className=" w-1/2  flex flex-1 justify-center">
        {
          pageNumbers.map(page=><p className="paginationBtn px-4 font-semibold"  onClick={()=>setPage(page)}>{page}</p>)
        }
      </div>
      <div className="flex">
      <p className="paginationBtn" onClick={()=>nextPage()} ><FaAngleRight/></p>
      <p className="paginationBtn" onClick={()=>setPage(maxPage)} ><FaAngleDoubleRight/></p>
      </div>
      </div>
  </div>
  );
};

export default Pagination;
