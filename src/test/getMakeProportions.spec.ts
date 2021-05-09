const assert = require('assert')
import { getMakeProportions } from "../functions/getMakeProportions"
import { IMakeProportion } from "../models/IMakeProportion"
import { testListings } from "./testListings"




describe('getMakeProportions', function () {

    const testMakeProportions: IMakeProportion[] = [
        {
            make: 'Audi',
            proportion: 2 / 5
        },
        {
            make: 'Mazda',
            proportion: 1 / 5
        },
        {
            make: 'Toyota',
            proportion: 1 / 5
        },
        {
            make: 'Renault',
            proportion: 1 / 5
        }
    ]

    assert.deepEqual(getMakeProportions(testListings), testMakeProportions);
    it('should return an empty Array no emptyTestListings', function(){

        assert.deepEqual(getMakeProportions([]), []);
    })
})