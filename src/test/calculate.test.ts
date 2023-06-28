import calculate from "../calculate";

describe('calculate', () => {
   it('should calculate the result of the addition', () => {
       const result = calculate('20 + 3');

       expect(result).toEqual('23');
   });

   it('should calculate the result of the subtraction', () => {
      const result = calculate('21 - 7');

       expect(result).toEqual('14');
   });
   it('should calculate the result of the multiplication', () => {
      const result = calculate('30 * 69');

       expect(result).toEqual('2070');
   });
});