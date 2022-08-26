import { View, SafeAreaView, TextInput, StyleSheet, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import {Formik} from 'formik'
import SearchMovie from '../../components/explore/SearchMovie'
import BottomTab, { BOTTOMTABSICON } from '../../components/homeScreen/BottomTab'
import { Icon, icons, letYouInStyles } from '../../components/component/Exports'

const ExploreScreen = ({navigation}) => {
    const [searchValues, setSearchValues] = useState('')
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
            <Formik initialValues={{ searchValue: ''}} 
            validateOnChange={true}
            onSubmit={(value) => {setSearchValues(value.searchValue)}}
            >
                {({handleChange,values, submitForm}) => (
                    <View style={{ flexDirection: 'row'}}>
                        <View style={styles.inputField}>
                        <TextInput placeholder='Search'
                        placeholderTextColor={'#cecece'}
                        style={{fontSize: 18}}
                        value={values.searchValue}
                        onChangeText={handleChange('searchValue')}
                        onChange={() => {submitForm() }}
                        />
                        </View>
                        <View style={styles.filterField}>
                        <Icon imgUrl={icons[9].imageUrl} imgStyle={letYouInStyles.icons}/>
                        </View>
                    </View>
                )}
            </Formik>
            {
                searchValues === '' ? 
               <ImageBackground source={require('../../assets/search.png')} 
                style={{ width: 500, height: 400, 
                alignSelf: 'center', 
                marginVertical: 100,
                 }}></ImageBackground>
                :
                <SearchMovie searchedValue={searchValues}/> 
            }
            <BottomTab icons={BOTTOMTABSICON} navigation={navigation} activePage={'Explore'}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
    inputField: {
        borderRadius: 10,
        marginHorizontal: 30,
        marginTop: 30,
        marginBottom: 10,
        backgroundColor: '#f1f1ef',
        paddingLeft: 20,
        zIndex: 1,
        width: '60%'
    },
    filterField: {
        borderRadius: 10,
        marginTop: 30,
        marginBottom: 10,
        backgroundColor: '#b0d6ff',
        width: '20%',
        paddingLeft: 10
    },
})

export default ExploreScreen