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

import TopHeader from '../../components/component/TopHeader';

const TopPopularScreen = ({navigation}) => {
  const [popularMovies, setPopularMovies] = useState([]);
  const getPopularMovies = async () => {
    await fetch(
      BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY,
      options,
    )
      .then(response => response.json())
      .then(res => setPopularMovies(res.results))
      .catch(
        err =>
          err.message === 'Network request failed' &&
          console.log('Connect to the internet'),
      );
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white',}}>
    <TopHeader Header={'Top Movies this week'} navigation={navigation} />
      <FlatList
        data={popularMovies.slice(0,2)}
        contentContainerStyle={{
          flexDirection: 'row',
        }}
        numColumns={2}
        keyExtractor={(item, key) => key}
        style={{ marginTop: -170,}}
        renderItem={() => (
            <View>
              {popularMovies.map(movie => (
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

export default TopPopularScreen;
