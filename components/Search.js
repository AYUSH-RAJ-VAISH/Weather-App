import React from 'react';
import { View,Text,StyleSheet,ScrollView,Linking } from 'react-native';
import { TextInput,Button,Card,List} from 'react-native-paper';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from './Header';

export default class Search extends React.Component{
	state = {
    text: ''
  };

  buttonclick(){
  	this.props.navigation.navigate('current city',{city:this.state.text})
  }

  fetchCities(text){
  	this.setState({text})
  }
	render()
	{
		return(
			<View style={styles.container}>
			<View style={{flex:1}}>
			<Header title="Search city"/>
			<TextInput
        label='Enter City'
        value={this.state.text}
        onChangeText={text => this.fetchCities( text )}
        style={styles.input}
      />
		<Button  mode="contained" onPress={() => this.buttonclick()} style={{backgroundColor:'#0abde3'}}>
    Search
  </Button>
  </View>
  <View style={{flex:2,justifyContent:'flex-end',paddingBottom:20}}>
  <View style={{flexDirection: "row",justifyContent: "center",alignItems:'center'}}>
      <Text style={styles.text2}>Developed By</Text>
     <Text style={styles.text2}>Ayush Raj Vaish</Text>
     </View>
      <View style={{flexDirection: "row",justifyContent: "center",alignItems:'center'}}>
      <Text style={styles.text2}>Contact Me:</Text>
     <Text style={styles.text2}>6388515213  /</Text>
     </View>
      <View style={{flexDirection: "row",justifyContent: "center",alignItems:'center',margin:10}}>
      <Icon name='whatsapp' onPress={() => Linking.openURL('whatsapp://send?text=Hi,Your name &phone=+your phone no')} color='#0abde3' size={20} />
     <Icon name='envelope' onPress={() => Linking.openURL('https://your email id')} color='#0abde3' style={{marginLeft:20}} />
     <Icon name='facebook' onPress={() => Linking.openURL('https://your facebooklink')} color='#0abde3' size={20} style={{marginLeft:20}}/>
     <Icon name='instagram' onPress={() => Linking.openURL('https://your instagram link')} color='#0abde3' size={20} style={{marginLeft:20}}/>
     <Icon name='linkedin' onPress={() => Linking.openURL('https://your linkedin link')} color='#0abde3' size={20} style={{marginLeft:20}}/>
     </View>
     </View>
			</View>
		); 
	}
}
const styles=StyleSheet.create({
	container:{
		backgroundColor:'#f3f3f3',
		flex:1
	},
	input:{
		backgroundColor:'#fff',
		marginTop:40,
	},
	text2:{
    color:'#000',
    margin:5,
    fontSize:16,
    fontWeight:'bold'
  },
});