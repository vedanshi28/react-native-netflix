import { Text, View } from 'react-native'
import React from 'react'
import MovieRow from './MovieRow';
import movieURL from '../data/movieURL';

const MovieRows = () => {
    const data = movieURL;
  return (
    <View>
        {data.map((movie) => (
            <MovieRow title={movie.name} url={movie.url}/>
        ))}
      <Text>MovieRows</Text>
    </View>
  )
}

export default MovieRows

//const styles = StyleSheet.create({})