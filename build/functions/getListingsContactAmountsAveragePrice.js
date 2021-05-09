"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMostContactedListingAveragePrice = void 0;
const getListingsContactAmounts_1 = require("./getListingsContactAmounts");
const getListingsAveragePrice_1 = require("./getListingsAveragePrice");
function getMostContactedListingAveragePrice(listings, contacts, proportion) {
    const listingsContacts = getListingsContactAmounts_1.getListingsContactAmounts(listings, contacts, proportion);
    if (listingsContacts.length > 0) {
        const newListings = listingsContacts.map((lc) => lc.listing);
        const averagePrice = getListingsAveragePrice_1.getListingsAveragePrice(newListings);
        return averagePrice;
    }
    else {
        return null;
    }
}
exports.getMostContactedListingAveragePrice = getMostContactedListingAveragePrice;
