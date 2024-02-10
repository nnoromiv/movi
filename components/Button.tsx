import tw from "../tailwind";
import { Text, View, TouchableOpacity } from "react-native";
import { CustomButtonProps } from "../types";
import FastImage from "react-native-fast-image";

/**
 * The Button component is a custom button that can be used in a TypeScript React application.
 * @param {CustomButtonProps}  - - `title`: The text to be displayed on the button.
 */
export function Button({ title, style, onPress, children, textStyle, disabled, image}: CustomButtonProps) {
    return (
        /* The code you provided is a React component called "Button". It is a custom button component
        that can be used in a TypeScript React application. */
        <TouchableOpacity onPress={onPress} disabled={disabled} style={tw``}>
            <View style={tw` colors rounded-full flex flex-row gap-3 justify-center text-center items-center ${style}`} >
                {children}
                {
                    title &&
                    <Text style={tw`text-white text-xl ${textStyle}`}>{title}</Text>
                }
                {
                image &&
                    <FastImage 
                    source={{ 
                        uri: image,
                        priority: FastImage.priority.high
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                    style={tw`w-[30px] h-[30px]`}/>
                }
            </View>
        </TouchableOpacity>
    );
}