import { Chip } from "../types"

export const BG_IMAGE = require('../assets/layout.png')
export const BG_SHADOW = require('../assets/shadow.png')
export const NO_SEARCH = require('../assets/search.png')

export const LOGO = require('../assets/logo.png')
export const FACEBOOK_LOGO ='https://img.icons8.com/?size=48&id=114441&format=png'
export const GOOGLE_LOGO ='https://img.icons8.com/?size=48&id=V5cGWnc9R4xj&format=png'
export const APPLE_LOGO ='https://img.icons8.com/?size=50&id=30840&format=png'

export const EDIT = 'https://img.icons8.com/material/24/ffffff/edit--v1.png'

export const pattern = /[\^$.#%&!"|<>,@*+?()[\]{}\\]&[A-Z]|[0-9]/;

export const CHIPS: Chip[] = [
    "Action", "Drama", "Comedy", "Horror", "Adventure", "Thriller",
    "Romance", "Science", "Music", "Documentary", "Crime",
    "Fantasy", "Mystery", "Fiction", "Animation", "War", "History",
    "Television", "Superheroes", "Anime", "Sports", "K-Drama"
];

export const DUMMY_IMAGE = 'https://images.unsplash.com/photo-1707135999173-beab1fb736a2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

export const PLAY = 'https://img.icons8.com/fluency-systems-filled/48/ffffff/play.png'

export const LIST = 'https://img.icons8.com/sf-black-filled/48/ffffff/list.png'

export const NO_MOVIE_PICTURE = 'https://ouch-cdn2.icons8.com/_N6m_9EwxxUxxxECsVxnB3oEaeTW22XLzAIvFyy5j3A/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMjYz/LzI5ZDFhNTdhLTVk/ZDEtNGFhNi1hYTJm/LTczMDQzZDYyYTBl/OC5zdmc.png'

export const TABS = [
    {
        _id:9,
        title: 'Home',
        activeIcon: 'https://img.icons8.com/fluency-systems-filled/48/007aff/home.png',
        inActiveIcon: 'https://img.icons8.com/fluency-systems-filled/48/d3d3d3/home.png',
        screen: 'Home'
    },
    {
        _id:10,
        title: 'Explore',
        activeIcon: 'https://img.icons8.com/external-bearicons-glyph-bearicons/64/007aff/external-Explore-social-media-bearicons-glyph-bearicons.png',
        inActiveIcon: 'https://img.icons8.com/external-bearicons-glyph-bearicons/64/d3d3d3/external-Explore-social-media-bearicons-glyph-bearicons.png',
        screen: 'Explore'
    },
    {
        _id:8,
        title: 'List',
        activeIcon: 'https://img.icons8.com/sf-black-filled/64/007aff/list.png',
        inActiveIcon: 'https://img.icons8.com/sf-black-filled/64/d3d3d3/list.png',
        screen: 'List'
    },
    {
        _id:11,
        title: 'Popular',
        activeIcon: 'https://img.icons8.com/fluency-systems-filled/48/007aff/download.png',
        inActiveIcon: 'https://img.icons8.com/fluency-systems-filled/48/d3d3d3/download.png',
        screen: 'PopularMovies'

    },
    {
        _id:12,
        title: 'New',
        activeIcon: 'https://img.icons8.com/material-outlined/24/007aff/person-male.png',
        inActiveIcon: 'https://img.icons8.com/material-outlined/24/d3d3d3/person-male.png',
        screen: 'ReleasedMovie'

    },
]
