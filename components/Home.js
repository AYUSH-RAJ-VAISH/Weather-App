import React from 'react';
import { View,Text,StyleSheet,Image,Alert } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Card,Title } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class AHome extends React.Component {
	 state = {
    searchQuery: 'Lucknow',
    data:[]
  };


getWeather()
{
  fetch('http://api.openweathermap.org/data/2.5/weather?q=lucknow&units=metric&APPID=your_api_key')
    .then(res=>res.json())
    .then(response=>{
      console.log(response)
   })
};

  componentDidMount(){
  this.getWeather()
}
  render(){
    return (
      <View style={styles.container}>
     
      </View>
    );
  }
}
const styles=StyleSheet.create({
  container:{
    backgroundColor:'#000',
    flex:1,
  }
});