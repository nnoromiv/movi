import React, { useEffect, useState } from 'react'
import { Button, MoviesCard } from '..'
import tw from '../../tailwind'
import { FlatList, View } from 'react-native'
import { getImage, handleSearchMovies, handleTitleShorten } from '../../screens/API'
import { Movies } from '../../types'
import FastImage from 'react-native-fast-image'
import { NO_SEARCH } from '../../constants'

const SearchMovie = (param: any) => {
    const [searchFound, setSearchFound] = useState<Movies[]>()
    const [number, setNumber] = useState<number>(15)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await handleSearchMovies(param.param)

                if (result) {
                    setSearchFound(result)
                }
            } catch (error) {
                console.error('Error when fetching Data. ', error)

            } finally{
                setNumber(15)
            }
        }
        fetchData()
    }, [param])
    return (
        searchFound?.length !== 0 ?
            <View style={tw`mb-60 mt-5`} >
                <FlatList
                    style={tw`m-auto`}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={tw``}
                    data={searchFound?.slice(0,number)}
                    numColumns={2}
                    keyExtractor={(item) => item.original_title}
                    renderItem={(item) => (
                        <MoviesCard key={item.index} image={getImage(item.item)} title={handleTitleShorten({ state: (item.item), slicer: 12 })} />
                    )}
                />
                <Button title='Load More' style={'mt-4 py-3'} onPress={() => setNumber(number+10)} />
            </View>
            :
            <FastImage
                source={NO_SEARCH}
                style={tw`w-[300px] h-[640px] self-center`}
                resizeMode='center'
            />
    )
}

export default SearchMovie