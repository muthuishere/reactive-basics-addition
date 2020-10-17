import {BehaviorSubject} from 'rxjs';
import {map } from 'rxjs/operators/index.js';

//ageOfTrump, ageOfCheGuara,happyBirthDayToTrump

const ageOfTrump = new BehaviorSubject(74);
const ageOfCheGuara = ageOfTrump.pipe(
                            map(value => value + 18)

                        );


function happyBirthDayToTrump(){
    const incrementedAge = ageOfTrump.getValue() + 1
    ageOfTrump.next(incrementedAge);
}

export {ageOfTrump,ageOfCheGuara,happyBirthDayToTrump}
