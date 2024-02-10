import React, { useEffect, useState } from 'react'
import { Header, MoviesCard, Tab } from '../../components'
import { FlatList, SafeAreaView } from 'react-native'
import tw from '../../tailwind'
import { PopularMovie } from '../../types'
import { fetchPopularMovies, getImage, handleTitleShorten } from '../API'

const PopularMovies = ({ navigation }: any) => {
    const [popularMovies, setPopularMovies] = useState<PopularMovie[]>()


   /* The `useEffect` hook is used to perform side effects in functional components. In this case, it
   is used to fetch popular movies data and update the state with the fetched data. */
    useEffect(() => {
        const fetchData = async () => {
            try {
                const popularResult = await fetchPopularMovies()
                if (popularResult) {
                    setPopularMovies(popularResult)
                }
            } catch (error) {
                console.error('Error fetching data', error)
            }
        }

        fetchData()
    }, [true])
    return (
        /* The code is rendering a component called `SafeAreaView` from the React Native library. This
        component ensures that the content is displayed within the safe area of the device screen,
        taking into account notches, status bars, and other system UI elements. */
        <SafeAreaView style={tw`bg-white h-full px-3`}>
            <Header logo={false} goBack={false} header='Popular Movies' navigation={navigation} />
            <FlatList
                style={tw`mb-22 m-auto mt-5`}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={tw``}
                data={popularMovies}
                numColumns={2}
                keyExtractor={(item) => item.original_title}
                renderItem={(item) => (
                    <MoviesCard key={item.index} image={getImage(item.item)} title={handleTitleShorten({ state: (item.item), slicer: 12 })} />
                )}
            />
            <Tab navigation={navigation} screen='PopularMovies' />
        </SafeAreaView>
    )
}

export default PopularMovies