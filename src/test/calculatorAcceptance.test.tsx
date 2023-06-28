import {describe, test} from "vitest";
import {render, screen} from "@testing-library/react";
import {Calculator} from "../Calculator.tsx";
import userEvent from "@testing-library/user-event";

describe('Calculator Acceptance', () => {
    test('user can add two numbers together and see the result', async () => {
        render(<Calculator/>)

        const number1Button = screen.getByRole('button', {name: '1'});
        const number9Button = screen.getByRole('button', {name: '9'});
        const plusOperatorButton = screen.getByRole('button', {name: '+'});
        const number8Button = screen.getByRole('button', {name: '8'});
        const number2Button = screen.getByRole('button', {name: '2'});
        const equalsButton = screen.getByRole('button', {name: '='});

        await userEvent.click(number1Button);
        await userEvent.click(number9Button);
        await userEvent.click(plusOperatorButton);
        await userEvent.click(number1Button);
        await userEvent.click(number8Button);
        await userEvent.click(number2Button);
        await userEvent.click(equalsButton);

        const outputText = screen.getByRole('textbox');

        expect(outputText).toHaveTextContent('201');
    });
    test('user can substract two numbers together and see the result', async () => {
        render(<Calculator/>)

        const number1Button = screen.getByRole('button', {name: '1'});
        const number9Button = screen.getByRole('button', {name: '9'});
        const minusOperatorButton = screen.getByRole('button', {name: '-'});
        const number8Button = screen.getByRole('button', {name: '8'});
        const number2Button = screen.getByRole('button', {name: '2'});
        const equalsButton = screen.getByRole('button', {name: '='});

        await userEvent.click(number1Button);
        await userEvent.click(number9Button);
        await userEvent.click(number2Button);
        await userEvent.click(minusOperatorButton);
        await userEvent.click(number1Button);
        await userEvent.click(number8Button);
        await userEvent.click(equalsButton);

        const outputText = screen.getByRole('textbox');

        expect(outputText).toHaveTextContent('174');
    });
});