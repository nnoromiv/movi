import { View, Image, StyleSheet, Text } from 'react-native'
import React from 'react'
import { Icon, icons, letYouInStyles } from './Exports'


const TopHeader = ({navigation, Header, logoURL, logo}) => {
  return (
    <View style={{ backgroundColor: 'white'}}>
    <View style={{ flexDirection: 'row', }}>
    <Icon imgStyle={letYouInStyles.icons} imgUrl={icons[0].imageUrl} press={() => navigation.goBack()}/>
    <Text style={{ color: '#212121', fontWeight: 'bold', marginTop: 5, marginBottom: -20,
    fontSize: 24, fontFamily: "Urbanist-Bold" }}>{Header}</Text>
    </View>
    <Image source={logo} style={logoStyle.logoIcon}/>
    </View>
  )
}

export const logoStyle = StyleSheet.create ({
    logoIcon: {
         width: 300,
         height: 200,
         alignSelf: 'center',
         borderRadius: 50,
    }
})

export default TopHeader