import {ageOfTrump, ageOfCheGuara,happyBirthDayToTrump} from './addition'
import {zip} from "rxjs";

const expectAgesToBe =(expectedAgeOfTrump,expectedAgeOfCheGuara,done)=>{

    zip(ageOfTrump,ageOfCheGuara)
        .subscribe((obj)=>{

            console.log(obj)
            done();

        })


}

test('ageOfTrump should be 74 and ageOfCheGuara should be 92', (done) => {


    expectAgesToBe(74,92,done)

});

test('if called happyBirthDayToTrump ageOfTrump should be 75 and ageOfCheGuara should be 93', (done) => {

    happyBirthDayToTrump();
    expectAgesToBe(75,93,done)

});
