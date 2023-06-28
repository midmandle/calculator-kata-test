import {useState} from "react";

export function Calculator() {
    const [calculation, setCalculation] = useState("");
    return <div>
        <div role='textbox'>{calculation}</div>
        {['0','1','2','3','4','5','6','7','8','9'].map((number) => <button key={`numPad_${number}`} onClick={() => {setCalculation(number)}}>{number}</button>)}
    </div>;
}