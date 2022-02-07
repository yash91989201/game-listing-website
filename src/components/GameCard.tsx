import { GameProps } from "../types";
import {AiFillWindows} from "react-icons/ai"
import {CgBrowser} from "react-icons/cg"

const returnPlatformIcon=(platform:string)=>{
    switch(platform){
      case "PC (Windows)":
          return <AiFillWindows fontSize={20}/> 
        case "Web Browser" :
            return <CgBrowser fontSize={20}/> 
        case "PC (Windows), Web Browser" :
            return <> <AiFillWindows fontSize={24} style={{marginRight:"8px"}}/> <CgBrowser fontSize={20}/>  </>
      default:
        break;
    }
  }

const GameCard:React.FC<{content:GameProps}> = ({content}) => {
  return (
    <a
        href={content.game_url}
        target="_blank"
        rel="noreferrer"
            className="
              w-full h-full flex flex-col rounded-md shadow-lg
              overflow-hidden cursor-pointer 
              hover:scale-110 hover:transition-all hover:shadow-3xl
              focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
        <div>
            <img
                className="w-full  h-[180px] " 
                src={content.thumbnail} 
                alt={content.title} />
        </div>
        <div className="p-3 flex-1">
            <h3 className="py-0.5 text-xl font-semibold">{content.title}</h3>
            <h5 className="">{content.short_description}</h5>
        </div>
        <div className="w-full px-3 py-2 flex   justify-between items-center">
        <div className="flex">
            {returnPlatformIcon(content.platform)}
        </div>
        <h5 className="py-0.5 px-1 rounded-md bg-blue-600 font-bold  text-xs text-gray-100 ">
            {content.genre}
        </h5>
        </div>
    </a>
  );
};

export default GameCard;
