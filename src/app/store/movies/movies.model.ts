export interface Movie {
  id: string;
  image: string;
  released: string;
  title: string;
  isModalOpen?: boolean;

  // We will fetch these props after we open the movie modal.
  download?: string;
  imdbid?: string;
  largeimage?: string;
  rating?: string;
  runtime?: string;
  synopsis?: string;
  type?: string;
  unogsdate?: string;
}

export function buildBasicMovie(rawMovie: Movie): Movie {
  return {
    id: rawMovie.id,
    image: rawMovie.image,
    released: rawMovie.released,
    title: rawMovie.title
  };
}
