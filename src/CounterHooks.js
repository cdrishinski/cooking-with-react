import React, { useContext, useState } from "react";
import { ThemeContext } from "./App";

export default function CounterHooks({ initialCount}){
    const [state, setState] = useState(initialCount)
    const style = useContext(ThemeContext)
    return (
        <div>
            <button style={style} onClick={() => setState(prevState => prevState - 1)} >-</button>
            <span>{state}</span>
            <button style={style} onClick={() => setState(prevState => prevState + 1)}>+</button>
        </div>
    )
}