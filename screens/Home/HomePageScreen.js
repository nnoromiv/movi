import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Icon, icons, PrimaryButton } from '../../components/component/Exports'
import { TopNewReleases, TopPopularMovies } from '../../components/homeScreen/TopMoviesBody'
import TopMoviesHeader, { TopNewReleasesHeader, TopPopularMoviesHeader } from '../../components/homeScreen/TopMoviesHeader'
import BottomTab, { BOTTOMTABSICON } from '../../components/homeScreen/BottomTab'

const MOVI_LOGO = '../../assets/logo.png'
export const API_KEY = 'api_key=90ce38122ec7beb767ad3cf476c7b5e8'
export const BASE_URL = 'https://api.themoviedb.org/3'
export const BASE_IMG_URL = 'https://image.tmdb.org/t/p/original'

export const options = {
  method: 'GET',
  headers: {
    'API-Key': '90ce38122ec7beb767ad3cf476c7b5e8',
  }
};

const HomePageScreen = ({navigation}) => {
  const [imageUrl, setImageUrl] = useState()
  const [title, setTitle] = useState()
  const [genres, setGenres] = useState([])

  const getData = async() => {
    await fetch( BASE_URL + '/movie/453395?' + API_KEY, options)
    .then(response => response.json())
    .then(res => {
     setImageUrl( BASE_IMG_URL + res.poster_path)
     setTitle(res.original_title)
     setGenres(res.genres[0].name)
    })
    .catch(err => console.error(err));
  }

  useEffect(() => {
    getData()
  },[])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:'white'}}>
      <ScrollView>
      <View>
      <Image  source={{ uri: imageUrl}} 
      style={{ position: 'absolute', width: '100%', height: '100%', resizeMode: 'cover'}}/>
      <View style={{ width: '100%', }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
        <Image source={require(MOVI_LOGO)} style={{ width: 100, height: 90, }}/>
        <View style={{ flexDirection: 'row', marginTop: 27, marginHorizontal: 20}}>
        <Icon imgUrl={icons[5].imageUrl} imgStyle={{ width: 30, height: 30,}}/>
        <Text>    </Text>
        <Icon imgStyle={{ width: 30, height: 30}} imgUrl={icons[6].imageUrl} />
        </View>
        </View>
        <View style={{ marginHorizontal: 20, marginTop: 80, marginBottom: 30}}>
          <Text style={{ fontSize: 30, fontWeight: '900', color: '#f1f1f1'}}>{title}</Text>
          <Text style={{ color: '#f1f1f1', fontSize: 18}}>
            {genres}
          </Text>
        <View style={{ flexDirection: 'row',  marginHorizontal: 25, marginTop: 10}}>
        <PrimaryButton buttonStyle={styles.buttonPlay} buttonText='Play' 
        buttonImgUrl={icons[7].imageUrl} buttonImgStyle={{ width: 20, height: 20, 
        position: 'absolute', zIndex: 99, bottom: 10, marginLeft: -10}}
        buttonFunc={() => console.log('play')}
        />
        <PrimaryButton buttonStyle={styles.buttonList} 
        buttonText='My List'  buttonImgUrl={icons[8].imageUrl} 
        buttonImgStyle={{ width: 20, height: 20, 
        position: 'absolute', zIndex: 99, bottom: 10, marginLeft: 35}}
        buttonFunc={() => console.log('list')}/>
        </View>
        </View>
      </View>
      </View>
      <TopPopularMoviesHeader navigation={navigation}/>
      <TopPopularMovies navigation={navigation}/>
      <TopNewReleasesHeader navigation={navigation}/>
      <TopNewReleases />
      </ScrollView>
      <BottomTab icons={BOTTOMTABSICON}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  buttonPlay: {
    color: '#007aff',
    width: 103,
    height: 41,
    backgroundColor: '#b0d6ff',
    paddingLeft: 40,
    paddingVertical: 8,
    borderRadius: 100,
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.2,
    marginLeft: -26
},
buttonList: {
    color: 'white',
    width: 130,
    height: 41,
    backgroundColor: '#007aff',
    paddingLeft: 40,
    paddingVertical: 8,
    borderRadius: 100,
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.2,
    marginLeft: 20
},
})

export default HomePageScreen