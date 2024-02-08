import { StyleSheet, Text as RNText, TextProps } from 'react-native';

const Text: React.FC<TextProps> = ({ style, children }) => {
    return <RNText style={[fontFamily.centuryGothic, style]}>{children}</RNText>;
};

const fontFamily = StyleSheet.create({
    centuryGothic: {
        fontFamily: 'Century Gothic'
    }
})

export default Text