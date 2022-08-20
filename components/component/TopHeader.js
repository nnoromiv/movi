import { View, Image, StyleSheet, Text } from 'react-native'
import React from 'react'
import { Icon, icons, letYouInStyles } from './Exports'

const MOVI_LOGO = '../../assets/logo.png'

const TopHeader = ({navigation, Header}) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white'}}>
    <View style={{ flexDirection: 'row', }}>
    <Icon imgStyle={letYouInStyles.icons} imgUrl={icons[0].imageUrl} press={() => navigation.goBack()}/>
    <Text style={{ color: 'black', fontWeight: 'bold', marginTop: 5, marginBottom: -20,
    fontSize: 20,  }}>{Header}</Text>
    </View>
     <Image source={require(MOVI_LOGO)} style={styles.logoIcon}/>
    </View>
  )
}

const styles = StyleSheet.create ({
    logoIcon: {
         width: 300,
         height: 200,
         alignSelf: 'center',
    }
})

export default TopHeader