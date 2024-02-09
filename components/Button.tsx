import tw from "../tailwind";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { CustomButtonProps } from "../types";
import FastImage from "react-native-fast-image";

export function Button({ title, style, onPress, children, textStyle, disabled, image}: CustomButtonProps) {
    return (
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