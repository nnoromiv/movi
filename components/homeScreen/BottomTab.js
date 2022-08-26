import { View, TouchableOpacity, StyleSheet, Image, Text, SafeAreaView } from 'react-native'
import React, {useEffect, useState} from 'react'

export const BOTTOMTABSICON = [
    {
        id:9,
        name: 'Home',
        imageUrl: 'https://img.icons8.com/fluency-systems-filled/48/007aff/home.png',
        inactiveUrl: 'https://img.icons8.com/fluency-systems-filled/48/d3d3d3/home.png',
        pageScreen: 'HomePageScreen'
    },
    {
        id:10,
        name: 'Explore',
        imageUrl: 'https://img.icons8.com/external-bearicons-glyph-bearicons/64/007aff/external-Explore-social-media-bearicons-glyph-bearicons.png',
        inactiveUrl: 'https://img.icons8.com/external-bearicons-glyph-bearicons/64/d3d3d3/external-Explore-social-media-bearicons-glyph-bearicons.png',
        pageScreen: 'ExploreScreen'
    },
    {
        id:8,
        name: 'List',
        imageUrl: 'https://img.icons8.com/sf-black-filled/64/007aff/list.png',
        inactiveUrl: 'https://img.icons8.com/sf-black-filled/64/d3d3d3/list.png'
    },
    {
        id:11,
        name: 'Download',
        imageUrl: 'https://img.icons8.com/fluency-systems-filled/48/007aff/download.png',
        inactiveUrl: 'https://img.icons8.com/fluency-systems-filled/48/d3d3d3/download.png'
    },
    {
        id:12,
        name: 'Profile',
        imageUrl: 'https://img.icons8.com/material-outlined/24/007aff/person-male.png',
        inactiveUrl: 'https://img.icons8.com/material-outlined/24/d3d3d3/person-male.png'
    },
]
const BottomTab = ({icons, navigation, activePage}) => {
    const [activeTab, setActiveTab] = useState(activePage)
    const Icon = ({icon}) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)} onPressOut={() => navigation.push(icon.pageScreen)}>
            <Image source={{ uri: activeTab === icon.name ? icon.imageUrl : icon.inactiveUrl}} 
            style={[ styles.icon ]}/>
            <Text style={icon.name === activeTab ? styles.textColor : styles.text}>{icon.name}</Text>
        </TouchableOpacity>
    )
  return (
    <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
     {
        icons.map((icon, index) => (
            <Icon key={index} icon={icon} />
        ))
     }
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
    wrapper: {
        position: 'absolute',
        width: '100%',
        zIndex: 999,
        backgroundColor: 'white',
        bottom: 0,
        borderTopRightRadius: 20
        
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        paddingTop: 10,
        height: '100%'

    },
    icon: {
        width: 30,
        height: 30,
        alignSelf: 'center'
    },
    text: {
        textAlign: 'center',
    },
    textColor: {
        textAlign: 'center',
        color: '#007aff'
    }
})

export default BottomTab