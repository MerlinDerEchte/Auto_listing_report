import { IListingContactAmount } from "../models/IListingContactAmount";
import {getMostContactedListingAveragePrice} from  '../functions/getMostContactedListingAveragePrice';
import { testListings } from "./testListings";
import { testContacts } from "./testContacts";
import { testListingContactAmounts } from "./testListingContactAmounts";

const assert = require('assert');


describe('getListingsContactAmountAveragePrice', function(){
    
    it('should retun null for empty ListingContactAmount', function(){

        assert.equal(getMostContactedListingAveragePrice([],[],1), null);
    })

    it('should return correct value for top 30% of testListings ', function(){

        assert.equal(getMostContactedListingAveragePrice(testListings,testContacts,0.3),26965)
    })

    it('should return correct value for all testListings ', function(){
        const testListingAmounts = testListingContactAmounts.sort((a,b) => {
            return a.contactAmount - b.contactAmount;
        })
        assert.equal(getMostContactedListingAveragePrice(testListings,testContacts,1),20520)
    })




})