export type GameProps = {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
};

export type GameListProps = {
  err?: string;
  games: GameProps[] | undefined;
};

export type PaginationProps = {
  data: GameProps[];
  itemsPerPage: number;
};

export type PaginationPropType = {
  nextPage: () => void;
  prevPage: () => void;
  setPage: (page: number) => void;
  currentPage: number;
  maxPage: number;
};
