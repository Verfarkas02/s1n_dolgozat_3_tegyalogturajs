describe('bemenet ellenőrzése', () => {
    it('25 inputként', () => {
        let act = checkInput(25);
        expect(act).toBe(true);
    });
});