import React from "react";
import Counter from './Counter';
import CounterHooks from "./CounterHooks";

export const ThemeContext = React.createContext()

function App() {
const [theme, setTheme] = React.useState('green')

  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      Counter
      <Counter initialCount={0} />
      Counter CounterHooks
      <CounterHooks initialCount={5} />
      <button onClick={() => setTheme(prevTheme => {
        return prevTheme === 'red' ? 'blue' : 'red'
      })}>Toggle Theme</button>
    </ThemeContext.Provider>
  )
}

export default App;
