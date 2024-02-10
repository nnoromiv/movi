/**
 * The above code is a TypeScript React component that renders a Text component with a specified style
 * and children, using the Century Gothic font family.
 * @param  - 1. `StyleSheet`: This is a module provided by React Native that allows you to create and
 * manage stylesheets for your components.
 * @returns The `Text` component is being returned.
 */
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