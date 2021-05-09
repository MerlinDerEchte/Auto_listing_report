"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getListingsContactAmountsPerMonth = void 0;
const getListingsContactAmounts_1 = require("./getListingsContactAmounts");
function getListingsContactAmountsPerMonth(listings, contacts, month, listingAmount) {
    const currentContacts = contacts.filter((c) => {
        const contactMonth = c.contactDate.getMonth();
        const contactYear = c.contactDate.getFullYear();
        if (contactMonth === month.month && contactYear === month.year) {
            return true;
        }
    });
    const contactedListings = getListingsContactAmounts_1.getListingsContactAmounts(listings, currentContacts);
    contactedListings.sort((a, b) => {
        return b.contactAmount - a.contactAmount;
    });
    return contactedListings.splice(0, listingAmount);
}
exports.getListingsContactAmountsPerMonth = getListingsContactAmountsPerMonth;
