import { getListingsContactAmounts } from "../functions/getListingsContactAmounts"
import { getTopListingContactsPerMonth } from "../functions/getTopListingContactsPerMonth"
import { testContacts } from "./testContacts"
import { testListingContactAmounts } from "./testListingContactAmounts"
import { testListings } from "./testListings"
import { testMonths } from "./testMonths"

const assert = require('assert')


describe('getTopListingContactsPerMonth', function(){

    it('should return month 5 year 2020 for testContacts and emptyListings', function(){

        const testListingAmountsPerMonth = [{
            listingContactAmounts: [],
            month: {
                month : 5,
                year: 2020
            }
        }]
        assert.deepEqual(getTopListingContactsPerMonth(testContacts,[],2), testListingAmountsPerMonth)
    })
    it('should return empty array for no values', function(){
        assert.deepEqual(getTopListingContactsPerMonth([],[],2),[])
    })

    it('should return correct values for testContacts and testListings', function(){
        const testListingAmountsPerMonth = [{
            listingContactAmounts: testListingContactAmounts.sort((a,b) => b.contactAmount - a.contactAmount),
            month: testMonths[0]
        }]
        
        assert.deepEqual(getTopListingContactsPerMonth(testContacts, testListings, 5), testListingAmountsPerMonth);
    })

})