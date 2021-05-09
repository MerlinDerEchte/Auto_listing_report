import {testListingContactAmounts} from './testListingContactAmounts';
import { testContacts } from './testContacts';
import {testListings} from './testListings';
import { getListingsContactAmounts } from '../functions/getListingsContactAmounts';
const assert = require('assert')

describe('getListingContactAmounts', function () {
    it('should return correct listing Amounts for testListings', function () {
       
        assert.deepEqual(getListingsContactAmounts(testListings,testContacts),testListingContactAmounts );



    })
})