import {Calculator} from "../Calculator.tsx";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('Calculator', () => {
   it('should display the number 1 pressed on the number pad', async () => {
       render(<Calculator/>);

       const numberButton = screen.getByRole('button', {name: '1'});

       await userEvent.click(numberButton);

       const outputWindowElement = screen.getByRole('textbox');

       expect(outputWindowElement).toHaveTextContent('1');
   })

    it('should display the number 2 pressed on the number pad', async () => {
        render(<Calculator/>);

        const numberButton = screen.getByRole('button', {name: '2'});

        await userEvent.click(numberButton);

        const outputWindowElement = screen.getByRole('textbox');

        expect(outputWindowElement).toHaveTextContent('2');
    })
});