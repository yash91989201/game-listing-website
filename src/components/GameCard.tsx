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
            return <> <AiFillWindows fontSize={20}/> <CgBrowser fontSize={20}/>  </>
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
            className="bg-stone-100  w-full h-full flex flex-col rounded-md overflow-hidden cursor-pointer hover:scale-110 hover:transition-all">
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
        <div className="w-full px-3 py-2 flex   justify-between">
        <div className="flex">
            {returnPlatformIcon(content.platform)}
        </div>
        <h5 className="px-1 rounded-md bg-blue-600 text-gray-100">
            {content.genre}
        </h5>
        </div>
    </a>
  );
};

export default GameCard;
