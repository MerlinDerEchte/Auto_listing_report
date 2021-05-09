"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTopListingContactsPerMonth = void 0;
const getMonthsFromContacts_1 = require("./getMonthsFromContacts");
const getListingsContactAmountsPerMonth_1 = require("./getListingsContactAmountsPerMonth");
function getTopListingContactsPerMonth(contacts, listings, listingAmount) {
    const months = getMonthsFromContacts_1.getMonthsFromContacts(contacts);
    const topMonthlyListingsContacts = months.map((m) => {
        const topListingsContacts = getListingsContactAmountsPerMonth_1.getListingsContactAmountsPerMonth(listings, contacts, m, listingAmount);
        const monthlyListingContactAmounts = {
            month: m,
            listingContactAmounts: topListingsContacts
        };
        return monthlyListingContactAmounts;
    });
    return topMonthlyListingsContacts;
}
exports.getTopListingContactsPerMonth = getTopListingContactsPerMonth;
