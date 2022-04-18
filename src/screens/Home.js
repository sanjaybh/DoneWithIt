import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react'

import Menu from '../components/Menu';

const Home = (props) => {
  const description = `This app is our early staged app, we are current making changes to it and will make sure to setup.`;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>

      <Image 
        resizeMode='contain'
        style={styles.headerImage} 
        source={require('../../assets/logo.jpeg')} />

      <Text style={styles.mainHeader} >
        Welcome
      </Text>
      <Text style={[styles.mainHeader, { 
        fontSize: 15,       
        textTransform: 'lowercase'
      }]} >
        to
      </Text>

      <Text style={[styles.mainHeader, {
          fontSize: 18,
          color: '#4c5dab',
          marginTop: 5,
          textTransform: 'uppercase'
        }]
      } >
        {props.channelName}
      </Text>

      <Text style={styles.paraStyle} >{description}</Text>

      </View>
      <View style={styles.menuStyle}>
        <View style={styles.lineStyle}></View>
          <Menu />
        <View style={[styles.lineStyle, {
          marginVertical: 10
        }]}></View>
      </View>
    </View>
  )
}


/*Styles*/
const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    display:'flex',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor:'#fff',
    textAlign:'center'
  },
  homeTop: {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  headerImage:{
    height: undefined,
    width:'100%',
    aspectRatio: 1,
    display: 'flex',
    alignItems: 'stretch',
    marginTop: 50,
    borderRadius: 20
  },
  mainHeader: {
    fontSize: 30,
    color: '#344055',
    textTransform: 'uppercase'
  },  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paraStyle: {
    textAlign: "left",
    fontSize: 19,
    color: '#7d7d7d',
    marginTop: 30,
    paddingBottom: 50,
    lineHeight: 26
  },
  menuStyle:{

  },
  lineStyle:{
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: "gray"
  },
});

export default Home

