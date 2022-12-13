import React, { useState } from "react";
import Header from "./Header";
import TicketControl from "./TicketControl";
import ToggleTheme from "./ToggleTheme";
import { ThemeContext, themes } from "./../context/theme-context";

function App(){ 
  const [theme, setTheme] = useState(themes.light); 

  //Set values for 'background color' and 'text color' to be the current theme. 
  document.body.style.backgroundColor = theme.backgroundColor;  //New code! 
  document.body.style.color = theme.textColor;  //New code! 

  function toggleTheme() {
    setTheme(theme => 
      theme.textColor === "AntiqueWhite" ? themes.light : themes.dark
    );
  }

  return ( 
    <ThemeContext.Provider value={theme}> 
      <Header />
      <ToggleTheme toggleTheme={toggleTheme}/> 
      <TicketControl />
    </ThemeContext.Provider>
  );
}

export default App;
