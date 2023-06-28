import {useState} from "react";
import calculate from "./calculate.ts";

export function Calculator() {
    const [calculation, setCalculation] = useState("");

    function updateCalculation(value: string) {
         setCalculation(`${calculation}${value}`);
    }

    function executeOperation(){
        const calculationResult = calculate(calculation);
        setCalculation(calculationResult);
    }

    return <div>
        <div role='textbox'>{calculation}</div>
        {['0','1','2','3','4','5','6','7','8','9'].map((number) => <button key={`numPad_${number}`} onClick={() => {updateCalculation(number)}}>{number}</button>)}
        <button onClick={() => updateCalculation(" + ")}>+</button>
        <button onClick={() => updateCalculation(" - ")}>-</button>
        <button onClick={() => updateCalculation(" * ")}>*</button>
        <button onClick={() => updateCalculation(" / ")}>/</button>
        <button onClick={executeOperation}>=</button>
    </div>;
}