import React, { useEffect, useState } from 'react'
import { Header, MoviesCard, Tab } from '../../components'
import { FlatList, SafeAreaView, View } from 'react-native'
import tw from '../../tailwind'
import { PopularMovie } from '../../types'
import { fetchReleasedMovies, getImage, handleTitleShorten } from '../API'

const ReleasedMovie = ({ navigation }: any) => {
    const [popularMovies, setPopularMovies] = useState<PopularMovie[]>()


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