import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native'
import React from 'react'

const Menu = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Courses')} >
        <Image
            style={styles.iconStyle}
            source={{uri:'https://img.icons8.com/stickers/90/000000/training.png'}}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Student')} >
        <Image
            style={styles.iconStyle}
            source={{uri:'https://img.icons8.com/stickers/100/000000/phone-office.png'}}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('About')} >
        <Image
            style={styles.iconStyle}
            source={{uri:'https://img.icons8.com/stickers/100/000000/about.png'}}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Contact')} >
        <Image
            style={styles.iconStyle}
            source={{uri:'https://img.icons8.com/stickers/100/000000/conference.png'}}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    menuContainer:{
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    textStyle:{
        textTransform: 'uppercase'
    },
    iconStyle:{
        width: '100%',
        height: 30,
        aspectRatio: 1
    },
    buttonStyle:{}
})

export default Menu

