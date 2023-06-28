export default function calculate(calculation: string): string {
    const [firstNumber, operator, secondNumber] = calculation.split(" ");

    let result = "";

    if(operator === "+"){
       result = String(Number(firstNumber) + Number(secondNumber));
    }
    return result;
}