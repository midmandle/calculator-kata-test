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
        })
    })
});

