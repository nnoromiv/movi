import React, { useState } from 'react'
import { SafeAreaView, View } from 'react-native'
import { FormInput, Header, SearchMovie, Tab } from '../../components'
import tw from '../../tailwind'
import { Formik } from 'formik'
import { NO_SEARCH } from '../../constants'
import FastImage from 'react-native-fast-image'
import { Params } from '../../types'


const Explore = ({ navigation }: any) => {
/* The line `const [param, setParam] = useState<Params>()` is declaring a state variable called `param`
and a function called `setParam` to update its value. The initial value of `param` is `undefined`
because no initial value is provided. The type of `param` is specified as `Params`, which is a
custom type defined elsewhere in the code. */
    const [param, setParam] = useState<Params>()
    return (
        /* The code is rendering a component called `SafeAreaView` from the React Native library. This
        component ensures that the content inside it is displayed within the safe area of the device
        screen, taking into account notches, status bars, and other system UI elements. */
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