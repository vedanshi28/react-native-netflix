import { ScrollView} from 'react-native'
import React from 'react'
import Header from '../components/Header';
import TrendingComponent from '../components/TrendingComponent';
import MovieRow from '../components/MovieRows';

const HomeScreen = () => {
  return (
    <ScrollView style={{flex:1,backgroundColor:"black"}}>
      <Header/>
      <TrendingComponent/>
      <MovieRow/>
    </ScrollView>
  )
}

export default HomeScreen;

//const styles = StyleSheet.create({})