import {Calculator} from "../Calculator.tsx";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('Calculator', () => {
   it('should display the number 1 pressed on the number pad', async () => {
       render(<Calculator/>);

       let number1Button = screen.getByRole('button', {name: '1'});

       await userEvent.click(number1Button);

       const outputWindowElement = screen.getByRole('textbox');

       expect(outputWindowElement).toHaveTextContent('1');
   })
});