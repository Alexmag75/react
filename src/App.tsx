import './App.css'
import {Left1} from "./components/Left1.tsx";
import {Context} from "./context/MyContext.tsx";
import {useState} from "react";
import {Right1} from "./components/Right1.tsx";
function App() {
    const [themeColor, setThemeColor] = useState<string>('light');
  return (
    <>
        <Context.Provider  value={{
            theme:themeColor,
            changeTheme:(value) => {
                setThemeColor(value)
            }
        }}>
            <Left1/>
            <Right1/>
        </Context.Provider>

    </>
  )
}
export default App
