import React from 'react'
import { ImageBackground, SafeAreaView, View } from 'react-native'
import { FormInput, Header, Tab } from '../../components'
import tw from '../../tailwind'
import { Formik } from 'formik'
import { NO_SEARCH } from '../../constants'
import FastImage from 'react-native-fast-image'

const Explore = (navigation: any) => {
    return (
        <SafeAreaView style={tw`bg-white h-full px-3`}>
            <Header navigation={navigation} goBack={false} header='Explore' logo={false} />

            <View style={tw`mt-5`}>
                <Formik
                    initialValues={{
                        search: ''
                    }}
                    onSubmit={(i) => console.log(i)}
                    validateOnChange
                >
                    {({ handleChange, values, submitForm }) => (
                        <FormInput 
                        placeholder='Search' 
                        textContentType='location' 
                        value={values.search}
                        onChangeText={handleChange('search')} 
                        />
                    )}
                </Formik>
                <FastImage 
                source={NO_SEARCH} 
                style={tw`w-[300px] h-[640px] self-center`}
                resizeMode='center'
                />
            </View>

            <Tab navigation={navigation} screen='Explore' />
        </SafeAreaView>
    )
}

export default Explore