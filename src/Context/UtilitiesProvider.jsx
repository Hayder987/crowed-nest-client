import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const UtilitiContext = createContext(null)

const UtilitiesProvider = ({children}) => {
    const [theme, setTheme] = useState(true);

    

    const utilitiesInfo ={
        theme, 
        setTheme,
    }

    return (
        <UtilitiContext.Provider value={utilitiesInfo}>
            {children}
        </UtilitiContext.Provider>
    );
};

UtilitiesProvider.propTypes={
    children:PropTypes.object
}

export default UtilitiesProvider;