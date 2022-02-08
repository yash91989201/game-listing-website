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
    <Box display="flex" justifyContent="space-between">
      <FormGroup sx={{ width: "24%" }}>
        <InputLabel htmlFor="platform-select">Games by platform</InputLabel>
        <Select
          name="platform-select"
          value={filter.platform}
          label="platform"

        >
          {
            PLATFORMS.map(item => <MenuItem key={item.value} value={item.value}>{item.display}</MenuItem>)
          }
        </Select>
      </FormGroup>
      <FormGroup sx={{ width: "24%" }}>
        <InputLabel htmlFor="genre-select">Games by Genre</InputLabel>
        <Select
          name="genre-select"
          value={filter.genre}
          label="genre"
        >
          {
            GENRES.map(item => <MenuItem key={item.value} value={item.value}>{item.display}</MenuItem>)
          }
        </Select>
      </FormGroup>
      <FormGroup sx={{ width: "24%" }}>
        <InputLabel htmlFor="tag-select">Games by Tags</InputLabel>
        <Select
          name="tag-select"
          value={filter.tag}
          label="tag"
        >
          {
            TAGS.map(item => <MenuItem key={item.value} value={item.value}>{item.display}</MenuItem>)
          }
        </Select>
      </FormGroup>
      <FormGroup sx={{ width: "24%" }}>
        <InputLabel htmlFor="sortBy-select">Sort By</InputLabel>
        <Select
          name="sortBy-select"
          value={filter.sortBy}
          label="sort_by"
        >
          {
            SORT_BY.map(item => <MenuItem key={item.value} value={item.value}>{item.display}</MenuItem>)
          }
        </Select>
      </FormGroup>
    </Box>
  );
};

export default GameFilter;
