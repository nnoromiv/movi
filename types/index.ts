/* The code is defining a set of TypeScript interfaces and types. */
import { ChangeEvent, ReactNode } from "react";
import { KeyboardTypeOptions, textContentType } from "react-native";

export interface HeaderProps {
    goBack?: boolean
    navigation: any
    logo: boolean
    header?: string
}

export interface CustomButtonProps {
    children?: ReactNode
    title: string
    style?: any
    textStyle?: any
    disabled?: boolean
    onPress?: () => void
    image?: any
};

export interface IconProps {
    style?: any
    onPress?: () => void
    onPressOut?:() => void
    imageStyle: any
    imageUrl: any
}

interface OnBoardingSubmitValues {
    email: string
    password: string
}

export interface HandleSubmitValues {
    values: OnBoardingSubmitValues
}

interface ProfileFormValues {
    fullName: string
    userName: string
    email: string
    phoneNumber: string
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
    navigation: any
    email: string
}

export type Chip = string;

export interface FormInputProps {
    logic?: any
    sourceError?: string
    source?: string
    placeholder: string
    keyboardType?: KeyboardTypeOptions | undefined
    textContentType: textContentType | undefined
    onChangeText: (e: string | ChangeEvent<any>) => void
    onBlur?: (e: any) => void
    value: string
    secureTextEntry?: boolean
    maxLength?: number
}

export interface TitleProps {
    navigation: any
    title: string
    navigateTo?: string
}

export interface Genres {
    id: number
    name: string
}

interface ProductionCompany {
    id: number
    logo_path: string
    name: string
    origin_country: string

}

interface ProductionCountry {
    iso_3166_1: string
    name: string
}

interface Language {
    english_name: string
}

export interface Movies {
    adult: boolean
    backdrop_path: string
    belongs_to_collection: string | null
    budget: number
    genres: Genres[]
    homepage: string
    id: number
    imdb_id: string
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    production_companies: ProductionCompany[]
    production_countries: ProductionCountry
    release_date: string
    revenue: number
    runtime: number
    spoken_languages: Language[]
    status: string
    tagline: string | number | null
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

export interface PopularMovie {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

export interface MoviesCardProps {
    image: string
    title: string
}
export interface HeroProps {
    image: string
}

export type Params = (
    string
)

export interface handleTitleShortenProps {
    state: Movies | PopularMovie | undefined
    slicer: number
}