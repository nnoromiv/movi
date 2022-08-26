import {
    FlatList,
    StyleSheet,
    Image,
    SafeAreaView,
    Text,
    View,
    ScrollView,
  } from 'react-native';
  import React, {useEffect, useState} from 'react';
  import {
    API_KEY,
    BASE_IMG_URL,
    BASE_URL,
    options,
  } from '../../screens/Home/HomePageScreen';
  

  const SearchMovie = ({navigation, searchedValue}) => {
    const SEARCH_API =  BASE_URL + '/search/movie?' + API_KEY
    const [searchedMovies, setSearchMovies] = useState('')
    const getSearchedMovies = async() => {
      await fetch(
       SEARCH_API + '&query='+searchedValue,
        options,
      )
        .then(response => response.json())
        .then(res => setSearchMovies(res.results))
        .catch(
          err =>
            err.message === 'Network request failed' &&
            console.log('Connect to the internet'),
        );
    };
    useEffect(() => {
      getSearchedMovies();
    }, []);
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white',}}>
        <FlatList
        data={searchedMovies}
          contentContainerStyle={{
            flexDirection: 'row',
          }}
          numColumns={2}
          keyExtractor={(item, key) => key}
          style={{ marginTop: 20,}}
          renderItem={() => (
              <View>
                {searchedMovies.map(movie => (
                  <Image
                    key={movie.id}
                    source={{uri: BASE_IMG_URL + movie.poster_path}}
                    style={styles.movieContainer}
                  />
                ))}
              </View>
          )} />
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    movieContainer: {
      width: 170,
      height: 201,
      marginHorizontal: 10,
      borderRadius: 10,
      marginBottom: 10,
      marginLeft: 20,
    },
  });
  
  export default SearchMovie;
  