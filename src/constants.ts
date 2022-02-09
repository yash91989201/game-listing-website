import { FilterType } from "./types";

const PLATFORMS: FilterType[] = [
  {
    value: "browser",
    display: "Browser (Web)",
  },
  {
    value: "pc",
    display: "Windows (PC)",
  },
];

const GENRES: FilterType[] = [
  {
    value: "mmo",
    display: "MMO",
  },
  {
    value: "mmorpg",
    display: "MMORPG",
  },
  {
    value: "shooter",
    display: "Shooter",
  },
  {
    value: "strategy",
    display: "Strategy",
  },
  {
    value: "moba",
    display: "Moba",
  },
  {
    value: "card",
    display: "Card Games",
  },
  {
    value: "racing",
    display: "Racing",
  },
  {
    value: "sports",
    display: "Sports",
  },
  {
    value: "social",
    display: "Social",
  },
  {
    value: "fighting",
    display: "Fighting",
  },
];

const TAGS: FilterType[] = [
  {
    value: "mmofps",
    display: "MMOFPS",
  },
  {
    value: "action-rpg",
    display: "Action RPG",
  },
  {
    value: "sandbox",
    display: "Sandbox",
  },
  {
    value: "open-world",
    display: "Open World",
  },
  {
    value: "survival",
    display: "Survival",
  },
  {
    value: "battle-royale",
    display: "Battle Royale",
  },
  {
    value: "mmotps",
    display: "MMOTPS",
  },
  {
    value: "anime",
    display: "Anime",
  },
  {
    value: "pvp",
    display: "PvP",
  },
  {
    value: "pve",
    display: "PvE",
  },
  {
    value: "fantasy",
    display: "Fantasy",
  },
  {
    value: "sci-fi",
    display: "Sci-Fi",
  },
];

const SORT_BY: FilterType[] = [
  {
    value: "relevance",
    display: "Relevance",
  },
  {
    value: "popularity",
    display: "Popularity",
  },
  {
    value: "release-date",
    display: "Release Date",
  },
  {
    value: "alphabetical",
    display: "Alphabetical",
  },
];

export { PLATFORMS, GENRES, TAGS, SORT_BY };
