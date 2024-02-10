import React, { useEffect, useState } from 'react'
import { Header, MoviesCard, Tab } from '../../components'
import { FlatList, SafeAreaView } from 'react-native'
import tw from '../../tailwind'
import { PopularMovie } from '../../types'
import { fetchReleasedMovies, getImage, handleTitleShorten } from '../API'

const ReleasedMovie = ({ navigation }: any) => {
    const [popularMovies, setPopularMovies] = useState<PopularMovie[]>()


    /* The `useEffect` hook is used to perform side effects in a functional component. In this case, it
    is used to fetch data from the `fetchReleasedMovies` function and update the state variable
    `popularMovies` with the fetched data. */
    useEffect(() => {
        const fetchData = async () => {
            try {
                const releasedMovie = await fetchReleasedMovies()
                if (releasedMovie) {
                    setPopularMovies(releasedMovie)
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
            <Header logo={false} goBack={false} header='New Released Movies' navigation={navigation} />
            <FlatList
                style={tw`mb-22 m-auto mt-5`}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={tw``}
                data={popularMovies}
                numColumns={2}
                keyExtractor={(item) => item.original_title}
                renderItem={(item) => (
                    <MoviesCard key={item.index} image={getImage(item.item)} title={handleTitleShorten({state: (item.item), slicer: 12})} />                            
                )}
            />
            <Tab navigation={navigation} screen='ReleasedMovie' />
        </SafeAreaView>
    )
}

export default ReleasedMovie