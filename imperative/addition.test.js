import {ageOfTrump, ageOfCheGuara,happyBirthDayToTrump} from './addition'

test('ageOfTrump should be 74 and ageOfCheGuara should be 92 by default', () => {
    expect(ageOfTrump).toBe(74);
    expect(ageOfCheGuara).toBe(92);
});

test('if called happyBirthDayToTrump ageOfTrump should be 75 and ageOfCheGuara should be 93', () => {

    happyBirthDayToTrump();
    expect(ageOfTrump).toBe(75);
    expect(ageOfCheGuara).toBe(93);
});
