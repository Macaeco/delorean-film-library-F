import { useState } from "react";
import { accessContext } from "./accessContext";


function AccesProvider({ children }) {

    let [access, updateAcces] = useState([]); //esto luego se inicializará con la info del local storage

    return (
        <accessContext.Provider value={[access, updateAcces]}>
            {children}
        </accessContext.Provider>
    )
}

export default AccesProvider;
