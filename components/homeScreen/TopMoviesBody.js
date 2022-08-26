import { ScrollView, StyleSheet, Image, View } from 'react-native'
import React, { useEffect, useState }  from 'react'
import { API_KEY, BASE_IMG_URL, BASE_URL, options } from '../../screens/Home/HomePageScreen'

const NO_MOVIE_PICTURE = 'https://img.icons8.com/pastel-glyph/64/000000/cinema-.png'

export const TopPopularMovies = ({navigation}) => {
    const [popularMovies, setPopularMovies] = useState([])
    const getPopularMovies = async() => {
        await fetch(BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY, options)
        .then(response => response.json())
        .then(res => setPopularMovies(res.results))
        .catch( err => console.log(err.message)
        )
    }
    useEffect(() => {
        getPopularMovies()
    }, [])
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginLeft: 20}}>
    {
        popularMovies === [] ?
        <View style={styles.movieContainer}></View> :
        popularMovies.map((movie, key) => (
            <Image key={key} source={{ uri: BASE_IMG_URL + movie.poster_path}} style={styles.movieContainer}/>
        ))
    }
    </ScrollView>
  )
}

export const TopNewReleases = () => {
    const [topNewReleases, setTopNewReleases] = useState([])
    const getNewReleases = async() => {
        await fetch(BASE_URL + '/discover/movie?sort_by=release_date.desc&' + API_KEY, options)
        .then(response => response.json())
        .then(res => setTopNewReleases(res.results))
        .catch( err => err.message === 'Network request failed' && 
        console.log('Connect to the internet'))
    }
    useEffect(() => {
        getNewReleases()
    }, [])
      return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginLeft: 20}}>
    {
        topNewReleases.map((movie, key) => (
            movie.poster_path !== null &&
            <Image key={key} 
            source={{ uri: movie.poster_path == null ? NO_MOVIE_PICTURE : 
            BASE_IMG_URL + movie.poster_path}} 
            style={styles.movieContainer}/>
        ))
    }
    </ScrollView>
  )
}

const styles = StyleSheet.create ({
    movieContainer: {
        width: 152,
        height: 201,
        marginHorizontal: 5,
        borderRadius: 10,
        marginBottom: 10
    }
})
