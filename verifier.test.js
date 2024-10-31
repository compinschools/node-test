import { verifyPass } from './verifier';


describe('verifyPass', () => { 
  describe('length', () => {
    it('is 8 characters long minimum', () => {
      const result = verifyPass('12345678');
      expect(result).toBe(true);
    }); 

    it('is 8 characters long minimum', () => {
      const result = verifyPass('1234567');
      expect(result).toBe(false);
    });
  });
  describe('empty', () => {
    it('is empty', () => {
      const result = verifyPass('');
      expect(result).toBe(false);
    });

  });

});