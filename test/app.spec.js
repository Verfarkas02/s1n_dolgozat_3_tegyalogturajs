/*
* File: app.spec.js
* Author: Molnár Csenge Anna
* Copyright: 2023, Molnár Csenge Anna
* Group: Szoft I-1 N
* Date: 2023-05-18
* Github: https://github.com/Verfarkas02/s1n_dolgozat_3_tegyalogturajs
* Licenc: GNU GPL
*/
describe('sablon sikertelen', () => {
    it('70 verseny és 25 célba, 45 sikertelen ', () => {
        let act =getUnsuccessCount(70,25);
        expect(act).toBe(45);
    });
    it('60 verseny és 40 célba, 20 sikertelen ', () => {
        let act =getUnsuccessCount(60,40);
        expect(act).toBe(20);
    });
    
});
describe('sablon sikertelen százalék', () => {
    it('70 verseny és 25 sikertelen százalék 64.2857', () => {
        let act =getUnsuccessPercent(45, 20);
        expect(act).toBeCloseTo(64.2857, 0.9);
    });
    
    it('60 verseny és 40 sikertelen százalék 33.33333', () => {
        let act =getUnsuccessPercent(60, 40);
        expect(act).toBeCloseTo(33.33333, 0.9);
    });
});