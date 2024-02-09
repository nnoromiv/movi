import React, { useState } from 'react'
import { FlatList, SafeAreaView, View } from 'react-native'
import { FormInput, Header, SearchMovie, Tab } from '../../components'
import tw from '../../tailwind'
import { Formik } from 'formik'
import { NO_SEARCH } from '../../constants'
import FastImage from 'react-native-fast-image'

export type Params = (
    string
)

const Explore = ({ navigation }: any) => {
    const [param, setParam] = useState<Params>()
    return (
        <SafeAreaView style={tw`bg-white h-full px-3`}>
            <Header navigation={navigation} goBack={false} header='Explore' logo={false} />

            <View style={tw`mt-5`}>
                <Formik
                    initialValues={{
                        param: ''
                    }}
                    onSubmit={(i) => setParam(i.param)}
                    validateOnChange
                    validate={(i) => setParam(i.param)}
                >
                    {({ handleChange, values }) => (
                        <FormInput
                            placeholder='Search'
                            textContentType='location'
                            value={values.param}
                            onChangeText={handleChange('param')}
                        />
                    )}
                </Formik>

                {
                    param === undefined ?
                        <FastImage
                            source={NO_SEARCH}
                            style={tw`w-[300px] h-[640px] self-center`}
                            resizeMode='center'
                        /> :
                        <SearchMovie param={param} />
                }
            </View>

            <Tab navigation={navigation} screen='Explore' />
        </SafeAreaView>
    )
}

export default Explore