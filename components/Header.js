import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

 const Header =(props)=>{
	return (
      <Appbar.Header theme={{ colors: { primary: "#0abde3" } }}>
        <Appbar.Content
          title="Weather Forecast"
          subtitle={props.title}
          Color='#0abde3'
          style={{alignItems:'center',}}
        />
      </Appbar.Header>
    );
}
export default Header;