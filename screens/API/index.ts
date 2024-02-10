/* The code is exporting several functions and variables from the "./page" module. These exported
functions and variables can then be imported and used in other parts of the codebase. */
import { fetchMovie, fetchPopularMovies, fetchReleasedMovies, getGenre, getImage, handleSearchMovies, handleTitleShorten } from "./page"


export {
    fetchMovie,
    fetchPopularMovies,
    fetchReleasedMovies,
    handleTitleShorten,
    getImage,
    getGenre,
    handleSearchMovies
}