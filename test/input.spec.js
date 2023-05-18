/*
* File: app.spec.js
* Author: Molnár Csenge Anna
* Copyright: 2023, Molnár Csenge Anna
* Group: Szoft I-1 N
* Date: 2023-05-18
* Github: https://github.com/Verfarkas02/s1n_dolgozat_3_tegyalogturajs
* Licenc: GNU GPL
*/
describe('bemenet ellenőrzése', () => {
    it('25 inputként', () => {
        let act = checkInput(25);
        expect(act).toBe(true);
    });
});