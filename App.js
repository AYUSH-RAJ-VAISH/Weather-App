import React from 'react';
import { View,Text,StyleSheet,Image,Alert } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Card,Title } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from './components/Header';
import Search from './components/Search';
import { LinearGradient } from 'expo-linear-gradient';

class Home extends React.Component{
	state={
		info:{
			name:'loading',
		temp:'loading',
		humidity:'loading',
		desc:'loading',
		icon:'loading',
		speed:'loading',
		pressure:'loading',
		visibility:'loading',
		}
	}
	getWeather(){
		const mycity=this.props.navigation.getParam('city','lucknow')
	fetch(`http://api.openweathermap.org/data/2.5/weather?q=
		${mycity}&units=metric&APPID=your_api_id`)
		.then(res=>res.json())
		.then(data=>{
			this.setState({
				info:{
				name:data.name,
				temp:data.main.temp,
				humidity:data.main.humidity,
				desc:data.weather[0].description,
				icon:data.weather[0].icon,
				speed:data.wind.speed,
				pressure:data.main.pressure,
				visibility:data.visibility
				}
			})
		})
}

componentDidMount(){
	this.getWeather()
}
	render()
	{
		 var date = new Date().toDateString();
		 var time = new Date().toLocaleTimeString();

		if(this.props.navigation.getParam('city')){
	this.getWeather()}
		return(
			<View style={styles.container}>

			<View style={styles.temp}>
			<Text style={styles.text1}>{this.state.info.temp}&deg;</Text>
			</View>
			<View style={styles.first}>
			<Text style={styles.text}>{date}</Text>
			<Title style={styles.place}>{this.state.info.name}</Title>
			<Text style={styles.text}>{this.state.info.desc}</Text>
			</View>

			<View style={styles.second}>
			<Image style={styles.img} source={{uri:'http://openweathermap.org/img/w/'+this.state.info.icon+'.png'}} />

			<View style={styles.line} />
			<Title style={styles.text}>Humidity </Title>
			<Title style={styles.text}>{this.state.info.humidity}</Title>
			</View>

			<View style={styles.wind}>
			<View>
			<Title style={styles.text}>Speed</Title>
			<Title style={styles.text}>{this.state.info.speed}</Title>
			</View>
			<View style={{width:1,height:100,backgroundColor:'#fff'}}/>
			<View>
			<Title style={styles.text}>Pressure </Title>
			<Title style={styles.text}>{this.state.info.pressure}</Title>
			</View>
			<View style={{width:1,height:100,backgroundColor:'#fff'}}/>
			<View>
			<Title style={styles.text}>Visibility </Title>
			<Title style={styles.text}>{this.state.info.visibility}</Title>
			</View>
			</View> 
			<View style={styles.line} />
			</View>
		);
	}
}

const styles=StyleSheet.create({
	container:{
		backgroundColor:'#0abde3',
		flex:1,
		justifyContent:'flex-end',
	},
	text:{
		textAlign:'center',
		color:'#fff',
		fontSize:23
	},
	place:{
		textAlign:'center',
		color:'#fff',
		fontSize:30,
		padding:20
	},
	temp:{
		position:'absolute',
		top:50,
		right:30,

	},
	text1:{
		color:'#fff',
		fontSize:50,
	},
	text2:{
		color:'#fff',
		fontSize:30,
	},
	img:{
		width:200,
		height:200,
		marginLeft:95,
	},
	first:{
		position:'absolute',
		top:180,
		width:'100%',
		height:300
	},
	second:{
		paddingBottom:50,
		alignContent:'center'
	},
	wind:{
		flexDirection:'row',
		justifyContent:'space-around',
		paddingBottom:30
	},
  line:{
    borderWidth:1,
    borderColor:'#fff',
    marginBottom:10
  },
});

const TabNavigator = createBottomTabNavigator({
  "current city": Home,
  "Search city": Search,
},
{
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'current city') {
          iconName = 'md-home'
        } else if (routeName === 'Search city') {
          iconName = 'md-cloud';
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#fff',
      inactiveTintColor: 'gray',
      activeBackgroundColor:'#0abde3',
      inactiveBackgroundColor:'#0abde3'
    },
  }
);

export default createAppContainer(TabNavigator);