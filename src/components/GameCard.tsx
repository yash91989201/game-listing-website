import { GameProps } from "../types";
import {AiFillWindows} from "react-icons/ai"
import {CgBrowser} from "react-icons/cg"

const returnPlatformIcon=(platform:string)=>{
    switch(platform){
      case "PC (Windows)":
          return <AiFillWindows/> 
        case "Web Browser" :
            return <CgBrowser/> 
        case "PC (Windows), Web Browser" :
            return <> <AiFillWindows/> <CgBrowser/>  </>
      default:
        break;
    }
  }

const GameCard:React.FC<{content:GameProps}> = ({content}) => {
  return <div className="border w-full h-full flex flex-col rounded-lg overflow-hidden">
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
      <div className="border w-full px-3 py-1 flex items-center  justify-between">
<div className="border">
{returnPlatformIcon(content.platform)}
</div>
          <h5 className="border p-0 ">
              {content.genre}
          </h5>
      </div>
  </div>;
};

export default GameCard;
