"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAveragePricesBySellerType = void 0;
const SellerType_1 = require("../models/SellerType");
const getListingsAveragePrice_1 = require("../functions/getListingsAveragePrice");
function getAveragePricesBySellerType(listings) {
    const getAveragePriceBySellerType = (sellerType) => {
        let carAmount = 0;
        let sum = 0;
        const sellerTypeListings = listings.filter((l) => l.sellerType === sellerType);
        const averagePrice = getListingsAveragePrice_1.getListingsAveragePrice(sellerTypeListings);
        const priceBySellingType = {
            sellerType: sellerType,
            averagePrice: averagePrice
        };
        return priceBySellingType;
    };
    const privateAveragePrice = getAveragePriceBySellerType(SellerType_1.SellerType.PRIVATE);
    const dealerAveragePrice = getAveragePriceBySellerType(SellerType_1.SellerType.DEALER);
    const otherAveragePrice = getAveragePriceBySellerType(SellerType_1.SellerType.OTHER);
    return [privateAveragePrice, dealerAveragePrice, otherAveragePrice];
}
exports.getAveragePricesBySellerType = getAveragePricesBySellerType;
