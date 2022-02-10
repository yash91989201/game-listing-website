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

const GameFilter = ({ onFilterChange }: Prop) => {
  return (
    <form
		className=" relative py-5 flex justify-between" 
		onChange={onFilterChange}
	>
		<label 
			className="relative w-1/5"
			htmlFor="platform-select">
			<span className="selectLabel">Platform</span>
			<select
				className="selectBox"
				name="platform" 
				id="platform-select"
			>
				{PLATFORMS.map(platform => (
					<option 
						key={platform.value} 
						value={platform.value}
					>
						{platform.display}
					</option>
				))}
			</select>
		</label>

		<label htmlFor="genre-select" className="relative w-1/5">
		<span className="selectLabel">Genre</span>
			<select name="genre" id="genre-select" className="selectBox">
				<option value="">All Genres</option>
				{GENRES.map(genre => (
					<option key={genre.value} value={genre.value}>
						{genre.display}
					</option>
				))}
			</select>
		</label>

		<label htmlFor="tag-select" className="relative w-1/5">
		<span className="selectLabel">Tag</span>
			<select name="tag" id="tag-select" className="selectBox">
				<option value="">All Tags</option>
				{TAGS.map(tag => (
					<option key={tag.value} value={tag.value}>
						{tag.display}
					</option>
				))}
			</select>
		</label>

		<label htmlFor="sortBy-select" className="relative w-1/5">
		<span className="selectLabel">Sort By</span>
			<select name="sortBy" id="sortBy-select" className="selectBox">
				{SORT_BY.map(sortBy => (
					<option key={sortBy.value} value={sortBy.value}>
						{sortBy.display}
					</option>
				))}
			</select>
		</label>
	</form>
  );
};

export default GameFilter;
