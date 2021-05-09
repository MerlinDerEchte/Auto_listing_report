import { getAveragePricesBySellerType } from "../functions/getAveragePricesBySellerType";
import { IListing } from '../models/IListing';
import { ISellerTypeAveragePrice } from '../models/ISellerTypeAveragePrice';
import { SellerType } from '../models/SellerType'
import {testListings} from './testListings'

const assert = require('assert');



describe('getAveragePriceBySellerType', function () {

    it('should return null for Averageprices if listings have length 0', function () {
        const listings: IListing[] = [];
        const averagePrices: ISellerTypeAveragePrice[] = [
            {
                sellerType: SellerType.PRIVATE,
                averagePrice: null
            },
            {
                sellerType: SellerType.DEALER,
                averagePrice: null
            },
            {
                sellerType: SellerType.OTHER,
                averagePrice: null
            },

        ]
        assert.deepEqual(getAveragePricesBySellerType(listings), averagePrices)
    })

    it('sould return correct average prices by Seller type for  test Listings ', function () {
        const averagePrices: ISellerTypeAveragePrice[] = [
            {
                sellerType: SellerType.PRIVATE,
                averagePrice: 49717
            },
            {
                sellerType: SellerType.DEALER,
                averagePrice: 23716
            },
            {
                sellerType: SellerType.OTHER,
                averagePrice: 2725
            },

        ];
        assert.deepEqual(getAveragePricesBySellerType(testListings), averagePrices)

    })

})
