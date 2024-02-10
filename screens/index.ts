/* The code is exporting a list of components and modules from different files. */
import { SetUpProfile } from "../components";
import Interest from "./Auth/Interest";
import Options from "./Auth/Options";
import Register from "./Auth/Register";
import Welcome from "./Auth/Welcome";
import Explore from "./Home/Explore";
import { Home } from "./Home/Home";
import PopularMovies from "./Home/PopularMovies";
import ReleasedMovie from "./Home/ReleasedMovie";


export {
    Welcome,
    Options,
    Register,
    Interest,
    SetUpProfile,

    Home,
    PopularMovies,
    ReleasedMovie,
    Explore
}