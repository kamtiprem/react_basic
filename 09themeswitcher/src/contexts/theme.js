import { createContext, useContext} from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},//jab v koi context call karega 
    // tab hamko e thememode v mil jayega aur ye dono method 
    // v mil jaayega 
})


export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}