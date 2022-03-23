import { themeContext } from "./themeContext";
import { useState } from "react";

const lightTheme ={
    primary:"primary",
    secondary:"success",
    light:"light",
    warnin:"warnin"
}

const darkTheme={
    primary:"secondary",
    secondary:"info",
    light:"dark",
    warnin:"danger"
}

function ThemeProvider({children}){
  
    let [filmsName, setFilmsName] = useState([])
    let [logName,setLogName]= useState('')
    let [access, updateAcces] = useState([]);
    let [filmsValue, setFilmsValue]=([''])
  
    const [theme, setTheme]=useState(lightTheme)

    const changeTheme=()=>{
        setTheme(v => v === lightTheme? darkTheme: lightTheme)
    }

    return (
        <themeContext.Provider value={[theme,setTheme,changeTheme,filmsName, setFilmsName,logName,setLogName,access, updateAcces,filmsValue, setFilmsValue ]}> {children} </themeContext.Provider>
    )

}
export default ThemeProvider;