import {describe, test} from "vitest";
import {render, screen} from "@testing-library/react";
import {Calculator} from "../Calculator.tsx";
import userEvent from "@testing-library/user-event";

describe('Calculator Acceptance', () => {
    test('user can add two numbers together and see the result', async () => {
        render(<Calculator/>)

        const number9Button = screen.getByRole('button', {name: '9'});
        const plusOperatorButton = screen.getByRole('button', {name: '+'});
        const number8Button = screen.getByRole('button', {name: '8'});
        const equalsButton = screen.getByRole('button', {name: '='});

        await userEvent.click(number9Button);
        await userEvent.click(plusOperatorButton);
        await userEvent.click(number8Button);
        await userEvent.click(equalsButton);

        const outputText = screen.getByRole('textbox');

        expect(outputText).toHaveTextContent('17');
    });
});