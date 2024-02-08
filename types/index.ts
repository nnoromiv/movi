import { ChangeEvent, ReactNode } from "react";
import { KeyboardTypeOptions, textContentType } from "react-native";

export interface HeaderProps {
    navigation: any
    logo: boolean,
    header?: string
}

export interface CustomButtonProps {
    children?: ReactNode
    title: string
    style?: any,
    textStyle?: any
    disabled?: boolean
    onPress?: () => void
};

export interface IconProps {
    style? : any,
    onPress? : () => void, 
    imageStyle: any, 
    imageUrl: any
}

interface OnBoardingSubmitValues {
    email : string,
    password: string
}

export interface HandleSubmitValues {
    values : OnBoardingSubmitValues
}

interface ProfileFormValues {
    fullName: string,
    userName: string,
    email: string,
    phoneNumber: string,
    gender: string
}

export interface HandleSubmitProfile {
    values: ProfileFormValues
}

export interface SocialTitles {
    faceBook: string
    google: string
    apple: string
    style?: any
    iconStyle?: any
}

export interface OptionsProps {
    navigation: any,
    email: string
}

export type Chip = string;

export interface FormInputProps {
    logic?: any
    sourceError?: string,
    source?: string
    placeholder: string
    keyboardType?: KeyboardTypeOptions  | undefined
    textContentType: textContentType | undefined
    onChangeText: (e: string | ChangeEvent<any>) => void
    onBlur: (e: any) => void
    value: string,
    secureTextEntry?: boolean,
    maxLength?: number
}