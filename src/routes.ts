import useContextScreen from "./screens/UseContextScreen";
import HomeScreen from "./screens/HomeScreen";
import WIP from "./screens/WIP";
import ReduxScreen from "./screens/ReduxScreen";
import UseRefScreen from "./screens/UseRefScreen";
import UseReducerScreen from "./screens/UseReducerScreen";
import UseMemoScreen from "./screens/UseMemoScreen";
import UseCallbackScreen from "./screens/UseCallbackScreen";
import PokedexScreen from "./screens/PokedexScreen";
import PokemonSelectedScreen from "./screens/PokemonSelectedScreen";

const routes = [
    
    {
        name : "Profile",
        component : WIP,
        display : true,
    },
    {
        name : "Home",
        component : HomeScreen,
        display : true,
    },
    {
        name : "Settings",
        component : WIP,
        display : true,
    },
    {
        name : "Pokedex",
        component : PokedexScreen,
        display : 'home_tiles',
    },
    {
        name : "Pokemon Selected",
        component : PokemonSelectedScreen,
        display : 'home_tiles',
    },
    // ===========================
    {
        name : "useReducer",
        component : UseReducerScreen,
        display : false,
    },
    {
        name : "useContext",
        component : useContextScreen,
        display : false,
    },
    {
        name : "reduxToolKit",
        component : ReduxScreen,
        display : false
    },
    {
        name : "useRef",
        component : UseRefScreen,
        display : false
    },
    {
        name : "useMemo",
        component : UseMemoScreen,
        display : false
    },
    {
        name : "useCallback",
        component : UseCallbackScreen,
        display : false
    },
    {
        name : "WIP",
        component : WIP,
        display : 'dont_show'
    }
]
export default routes;