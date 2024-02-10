import { API_KEY, BASE_IMG_URL, BASE_URL } from "@env"
import { Movies, PopularMovie, handleTitleShortenProps } from "../../types"
import { DUMMY_IMAGE } from "../../constants"

/* The `getOption` constant is an object that contains the method and headers for making an HTTP
request. In this case, it specifies that the method is a GET request and includes the API key in the
headers. This object is used in the `fetch` requests to provide the necessary options for making the
API calls. */
const getOption = {
    method: 'GET',
    headers: {
        'API-Key': API_KEY
    }
}

/**
 * The getRandomNumber function returns a random number between 0 and 1,000,000.
 * @returns The function getRandomNumber is returning a random number between 0 and 999,999.
 */
const getRandomNumber = () => {
    return (Math.floor(Math.random() * 1000000))
}

/**
 * The function fetchMovie is an asynchronous function that fetches a random movie from a given API
 * using a random number and an API key.
 * @returns The `fetchMovie` function is returning a Promise that resolves to the result of the fetch
 * request.
 */
const fetchMovie: () => Promise<any> = async () => {
    const result = await fetch(
        BASE_URL + '/movie/' + getRandomNumber() + '?' + API_KEY,
        getOption
    ).then(
        res => res.json()
    ).catch(
        err => console.error(err)
    )

    return result
}

/**
 * The function fetchPopularMovies fetches popular movies using an API and returns a promise with the
 * result.
 * @returns The function `fetchPopularMovies` returns a Promise that resolves to an array of popular
 * movies.
 */
const fetchPopularMovies: () => Promise<any> = async () => {
    const result = await fetch(
        BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY,
        getOption
    ).then(
        res => res.json()
    ).then(
        res => res.results
    ).catch(
        err => console.error(err)
    )

    return result
}

/**
 * The function fetchReleasedMovies fetches a list of released movies using the discover endpoint of a
 * movie API.
 * @returns The function `fetchReleasedMovies` returns a Promise that resolves to an array of released
 * movies.
 */
const fetchReleasedMovies: () => Promise<any> = async () => {
    const result = await fetch(
        BASE_URL + '/discover/movie?sort_by=release_date.desc&' + API_KEY,
        getOption
    ).then(
        res => res.json()
    ).then(
        res => res.results
    ).catch(
        err => console.error(err)
    )

    return result
}

/**
 * The function `handleTitleShorten` takes in an object with `state` and `slicer` properties and
 * returns a shortened version of the `state.title` string if it is longer than the `slicer` value,
 * otherwise it returns the original `state.title` string.
 * @param {handleTitleShortenProps}  - - `state`: The state object that contains the title property.
 * @returns a string value, which is the shortened title.
 */
const handleTitleShorten = ({state, slicer}: handleTitleShortenProps) => {
    let title: string = 'Loading...'
    if (state !== undefined) {
        if (state.title !== undefined) {
            title = state.title.length >= slicer ?
                state.title.slice(0, slicer) + '...' :
                state.title
        }
    }

    return title
}

/**
 * The function `getImage` takes in a state object and returns the URL of an image based on the state's
 * poster_path property, or a default image URL if the poster_path is undefined or empty.
 * @param {Movies | PopularMovie | undefined} state - The `state` parameter is of type `Movies |
 * PopularMovie | undefined`. This means it can accept values of type `Movies`, `PopularMovie`, or
 * `undefined`.
 * @returns The function `getImage` returns a string, which is the URL of an image.
 */
const getImage = (state: Movies | PopularMovie | undefined): string => {
    let image: string = DUMMY_IMAGE
    if (state !== undefined) {
        if (state.poster_path !== undefined || state.poster_path !== '') {
            image = BASE_IMG_URL + state.poster_path
        }else {
            image = DUMMY_IMAGE
        }
    }
    return image
}

/**
 * The function `getGenre` returns the name of the genre of a movie, or "Loading..." if the movie state
 * is undefined or the genres array is empty.
 * @param {Movies | undefined} state - The `state` parameter is of type `Movies | undefined`.
 * @returns The function `getGenre` returns a string value.
 */
const getGenre = (state: Movies | undefined): string => {
    let genre: string = 'Loading...'
    if (state !== undefined) {
        if (state.genres !== undefined) {
            state.genres.map(
                i => {
                    genre = i.name
                }
            )
        }
    }
    return genre
}

/**
 * The function `handleSearchMovies` is an asynchronous function that takes a string parameter and uses
 * it to search for movies using an API.
 * @param {string} param - The `param` parameter is a string that represents the search query for
 * movies. It is used to search for movies based on the user's input.
 * @returns The `handleSearchMovies` function is returning the result of the API call, which is an
 * array of movie results.
 */
const handleSearchMovies = async (param : string) => {
  const result = await fetch(
    BASE_URL + '/search/movie?' + API_KEY + '&query='+ param,
    getOption
    ).then(
        response => response.json()
    ).then(
        res => res.results
    ).catch(
        err => console.error(err)
    )

    return result
};

/* The `export` statement is used to export functions or variables from a module so that they can be
used in other files. In this case, the `export` statement is exporting several functions
(`fetchMovie`, `fetchPopularMovies`, `fetchReleasedMovies`, `handleTitleShorten`, `getImage`,
`getGenre`, `handleSearchMovies`) from the current module. This allows other files to import and use
these functions. */
export {
    fetchMovie,
    fetchPopularMovies,
    fetchReleasedMovies,
    handleTitleShorten,
    getImage,
    getGenre,
    handleSearchMovies
}