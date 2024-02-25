import { createContext, useState } from "react";


const ThemeContext = createContext();

const ThemeProvider =({children})=>{
    const [theme , setTheme] =useState("dark");
    const themes={
        theme,
        setTheme,
        ChangeTheme:()=>{
            if(theme==="light"){
                setTheme("dark")
            }
            else{
                setTheme("light")
            }
        },
    }
 return(
    <ThemeContext.Provider value={themes}>{children}</ThemeContext.Provider>
 )
}

export {ThemeContext,ThemeProvider}