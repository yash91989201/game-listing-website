import { ChangeEvent } from "react";
import { PLATFORMS, GENRES, TAGS, SORT_BY } from "../constants";

type Prop = {
  filter: {
    platform: string;
    genre?: string;
    tag?: string
    sortBy: string;
  }
  onFilterChange: (event: ChangeEvent<HTMLFormElement>) => void;
}

const GameFilter = ({ filter, onFilterChange }: Prop) => {
  return (
    <form >
          {
            PLATFORMS.map(item => <option key={item.value} value={item.value}>{item.display}</option>)
          }
          {
            GENRES.map(item => <option key={item.value} value={item.value}>{item.display}</option>)
          }
          {
            TAGS.map(item => <option key={item.value} value={item.value}>{item.display}</option>)
          }
          {
            SORT_BY.map(item => <option key={item.value} value={item.value}>{item.display}</option>)
          }
    </form>
  );
};

export default GameFilter;
