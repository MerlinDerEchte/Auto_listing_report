import { getListingsContactAmountsPerMonth } from "../functions/getListingsContactAmountsPerMonth";
import { getTopListingContactsPerMonth } from "../functions/getTopListingContactsPerMonth";
import { testContacts } from "./testContacts";
import { testListingContactAmounts } from "./testListingContactAmounts";
import { testListings } from "./testListings";
import { testMonths } from "./testMonths";

const assert = require('assert');



describe('getListingsContactAmountsPerMonth', function(){



    it('should retun an empty Array if an empty Listings array is provided ', function(){

        assert.deepEqual(getListingsContactAmountsPerMonth([], testContacts,testMonths[0], 5),[])

    })

    it('should return one value if specified', function(){
        assert.deepEqual(getListingsContactAmountsPerMonth(testListings,testContacts,testMonths[0], 1), [testListingContactAmounts[3]])
    })
    it('should return all values if the number of listingsAmounts per month is bigger than specified', function(){
        const testListingAmounts = testListingContactAmounts.sort((a,b) => {
            return b.contactAmount - a.contactAmount;
        })
        assert.deepEqual(getListingsContactAmountsPerMonth(testListings,testContacts,testMonths[0], 10), testListingAmounts)
    })


})