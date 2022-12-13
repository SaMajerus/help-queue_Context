import React, { useState } from "react";
import Header from "./Header";
import TicketControl from "./TicketControl";
import ToggleTheme from "./ToggleTheme";
import { ThemeContext, themes } from "./../context/theme-context";

function App(){ 
  const [theme, setTheme] = useState(themes.light); 

  //Set values for 'background color' and 'text color' to that of the current theme. 
  document.body.style.backgroundColor = theme.backgroundColor; 
  document.body.style.color = theme.textColor; 

  function toggleTheme() {
    setTheme(theme => 
      theme.textColor === "AntiqueWhite" ? themes.light : themes.dark
    );
  }

  return ( 
    <ThemeContext.Provider value={theme}> 
      <Header />
      {/* new code below */}
      <ThemeContext.Consumer>
        {contextTheme => <ToggleTheme theme={contextTheme} toggleTheme={toggleTheme}/>}
      </ThemeContext.Consumer>
      {/* new code above */} 
      <TicketControl />
    </ThemeContext.Provider>
  );
}

export default App;
