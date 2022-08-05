import { createContext, useState } from "react";

export const SettingsContext = createContext({
  isDarkModeSelected: false,
  toggleDarkMode: () => {},
});

export const SettingsProvider = ({ children }) => {
  const [isDarkModeSelected, setIsDarkModeSelected] = useState(false);

  function toggleDarkMode() {
    //Corect way to change previous state
    setIsDarkModeSelected((prevDarkModeState) => !prevDarkModeState);
  }

  const value = { isDarkModeSelected, toggleDarkMode };
  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};
