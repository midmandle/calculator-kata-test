import {useState} from "react";

export function Calculator() {
    const [calculation, setCalculation] = useState("");
    return <div>
        <div role='textbox'>{calculation}</div>
        <button onClick={() => {setCalculation("1")}}>1</button>
        <button onClick={() => {setCalculation("2")}}>2</button>
    </div>;
}