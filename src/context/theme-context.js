import React from 'react';

export const themes = {
  light: {
    backgroundColor: "AntiqueWhite",
    textColor: "DarkSlateGrey",
    buttonBackground: "Lavender", 
    inputBackground: "Gainsboro"
  },
  dark: {
    backgroundColor: "DarkSlateGrey",
    textColor: "AntiqueWhite",
    buttonBackground: "#232b3c",
    inputBackground: "#45516d"
  }
};

export const ThemeContext = React.createContext();
// console.log(ThemeContext.Provider);    //Provider component:  "Provides data to a section of the (or entire) component tree" (Lsn 9). 
// console.log(ThemeContext.Consumer);    //Consumer component:  "Enables individual components to use the data that the provider component exposes" (Lsn 9). 
/* "Ultimately, it's important to understand that provider and consumer components enact a subscription-based relationship: consumer components are subscribed to the corresponding provider component, and any time the value of the provider component changes, all of the components that consume the providers data will be re-rendered"  (Lsn 9). */ 
