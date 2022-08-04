import { createContext, useState } from "react";

export const SettingsContext = createContext({
    isDarkModeSelected: false,
    toggleDarkMode: () => { },
});

export const SettingsProvider = ({ children }) => {
    const [isDarkModeSelected, setIsDarkModeSelected] = useState(false)

    function toggleDarkMode() {
        setIsDarkModeSelected(!isDarkModeSelected)
    }

    const value = { isDarkModeSelected, toggleDarkMode };
    return (
        <SettingsContext.Provider value={value}>
            {children}
        </SettingsContext.Provider>
    );
};