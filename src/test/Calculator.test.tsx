import {Calculator} from "../Calculator.tsx";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('Calculator', () => {
    describe('should print single number when pressed', () => {
        it.each(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])('should display the number %d pressed on the number pad', async (numPadNumber: string) => {
            render(<Calculator/>);

            const numberButton = screen.getByRole('button', {name: numPadNumber});

            await userEvent.click(numberButton);

            const outputWindowElement = screen.getByRole('textbox');

            expect(outputWindowElement).toHaveTextContent(numPadNumber);
        });
    });
    it('should print first number, operator and second number when buttons pressed sequentially', async() => {
        render(<Calculator/>);

        const numberOne = "1";
        const firstNumPadNumber = screen.getByRole('button', {name: numberOne});
        await userEvent.click(firstNumPadNumber);

        const plusOperator = "+";
        const operator = screen.getByRole('button', {name: plusOperator});
        await userEvent.click(operator);

        const numberTwo = "2";
        const secondNumPadNumber = screen.getByRole('button', {name: numberTwo});
        await userEvent.click(secondNumPadNumber);

        const outputWindowElement = screen.getByRole('textbox');

        expect(outputWindowElement).toHaveTextContent(`${numberOne} ${plusOperator} ${numberTwo}`);
    });
});

