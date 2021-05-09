"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getListingsAveragePrice = void 0;
function getListingsAveragePrice(listings) {
    let sum = 0;
    listings.forEach((l) => {
        sum += l.price;
    });
    const averagePrice = listings.length > 0 ? Math.round(sum / listings.length) : null;
    return averagePrice;
}
exports.getListingsAveragePrice = getListingsAveragePrice;
