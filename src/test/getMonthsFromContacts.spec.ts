import {getMonthsFromContacts} from '../functions/getMonthsFromContacts';
import assert from 'assert';
import { testContacts } from './testContacts';
import { IMonth } from '../models/IMonth';
import { testMonths } from './testMonths';
describe('getMonthsFromContacts', function() {
    it('it should extract the right months for test contacts', function(){

    
        assert.deepEqual(getMonthsFromContacts(testContacts),testMonths );
    })
})