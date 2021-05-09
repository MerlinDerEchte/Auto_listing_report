import {getListingsAveragePrice} from '../functions/getListingsAveragePrice';
import {IListing} from '../models/IListing';
import {testListings} from './testListings';
const assert = require('assert');

describe('getListingAveragePrice', function(){
    it('should return null for empty listing list', function(){
        const emptyListings:IListing[] = [];
        assert.equal(getListingsAveragePrice(emptyListings), null)
    })

    it('should return correct average value for test listings', function(){
        let testListingPriceSum: number = 0;
        for(let l of testListings){
            testListingPriceSum += l.price;
        }
        const averagePrice:number = Math.round(testListingPriceSum / testListings.length);

        
        assert.equal(getListingsAveragePrice(testListings), averagePrice );
        
    })
})