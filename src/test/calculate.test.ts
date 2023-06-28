import calculate from "../calculate";

describe('calculate', () => {
   it('should calculate the result of the addition', () => {
       let result = calculate('20 + 3');

       expect(result).toEqual('23');
   });
});