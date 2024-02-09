import { API_KEY, BASE_IMG_URL, BASE_URL } from "@env"
import { Movies, PopularMovie } from "../../types"
import { DUMMY_IMAGE } from "../../constants"

interface handleTitleShortenProps {
    state: Movies | PopularMovie | undefined
    slicer: number
}

const getOption = {
    method: 'GET',
    headers: {
        'API-Key': API_KEY
    }
}

const getRandomNumber = () => {
    return (Math.floor(Math.random() * 1000000))
}

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

export {
    fetchMovie,
    fetchPopularMovies,
    fetchReleasedMovies,
    handleTitleShorten,
    getImage,
    getGenre,
    handleSearchMovies
}