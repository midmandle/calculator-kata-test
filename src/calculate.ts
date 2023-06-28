export default function calculate(calculation: string): string {
    const [firstNumber, operator, secondNumber] = calculation.split(" ");

    let result: string;

    switch (operator){
        case "+":
            result = String(Number(firstNumber) + Number(secondNumber));
            break;
        case "-":
            result = String(Number(firstNumber) - Number(secondNumber));
            break;
        case "*":
            result = String(Number(firstNumber) * Number(secondNumber));
            break;
        default:
            result = "";
    }

    return result;
}