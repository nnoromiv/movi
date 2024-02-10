import React from 'react'
import { Image, TextInput, View } from 'react-native'
import tw from '../tailwind'
import { FormInputProps } from '../types'

/* The code is defining a functional component called `FormInput` using TypeScript and React. */
const FormInput : React.FC<FormInputProps> = (
    {
        logic, 
        sourceError,
        source,
        placeholder,
        keyboardType,
        textContentType,
        onChangeText,
        onBlur,
        value,
        secureTextEntry,
        maxLength
    }) => {
    return (
        /* The code you provided is a React component called `FormInput`. It renders a `View` component
        that contains an `Image` component and a `TextInput` component. */
        <View style={tw`flex justify-center mt-3`}>
            {
                source === undefined && sourceError === undefined
                ? <></> :
                <Image src={logic ? sourceError : source }
                    style={tw`w-[25px] h-[25px] absolute z-2 mx-3`}
                />
            }
            <TextInput
                placeholder={placeholder} autoCapitalize={"none"}
                keyboardType={keyboardType} textContentType={textContentType}
                onChangeText={onChangeText} onBlur={onBlur}
                value={value}
                secureTextEntry={secureTextEntry}
                maxLength={maxLength}
                style={tw`text-lg rounded-lg bg-[#f1f1f1] font-semibold pl-12 py-5 z-1 
                ${logic === undefined ? 'pl-5' : logic ? '' : 'bg-[#ffd6d6]'}`
                }
            />
        </View>
    )
}

export default FormInput