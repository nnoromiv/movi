import React, { useEffect, useState } from 'react'
import { Hero, MoviesCard, Tab, Title } from '../../components'
import { SafeAreaView, ScrollView, View } from 'react-native'
import tw from '../../tailwind'
import { fetchMovie, fetchPopularMovies, fetchReleasedMovies, getGenre, getImage, handleTitleShorten } from '../API'
import { Movies, PopularMovie } from '../../types'

export const Home = ({ navigation, route }: any) => {
  const [data, setData] = useState<Movies>()
  const [popularMovies, setPopularMovies] = useState<PopularMovie[]>()
  const [releasedMovie, setReleasedMovie] = useState<PopularMovie[]>()

  const { 
    fullName,
    userName,
    email,
    phoneNumber,
    gender
  } = route?.params || {};


  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchMovie()
        const popularResult = await fetchPopularMovies()
        const releasedResult = await fetchReleasedMovies()

        if (result) {
          setData(result)
        }
        if (popularResult) {
          setPopularMovies(popularResult)
        }
        if (releasedResult) {
          setReleasedMovie(releasedResult)
        }
      } catch (error) {
        console.error('Error fetching data', error)
      }
    }

    fetchData()
  }, [email,true])

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Hero image={getImage(data)} />
        <Title title='Popular Movies' navigation={navigation} navigateTo='PopularMovies' />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={tw`flex-row gap-1`}>
            {
              popularMovies !== undefined &&
              popularMovies.slice(0, 11).map((item, key) => (
                <MoviesCard key={key} image={getImage(item)} title={handleTitleShorten({ state: item, slicer: 30 })} />
              ))
            }
          </View>
        </ScrollView>
        <Title title='New Movies' navigation={navigation} navigateTo='ReleasedMovie' />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={tw`flex-row gap-1`}>
            {
              releasedMovie !== undefined &&
              releasedMovie.slice(0, 11).map((item, key) => (
                <MoviesCard key={key} image={getImage(item)} title={handleTitleShorten({ state: item, slicer: 30 })} />
              ))
            }
          </View>
        </ScrollView>
      </ScrollView>
      <Tab navigation={navigation} screen='Home' />
    </SafeAreaView>
  )
}
