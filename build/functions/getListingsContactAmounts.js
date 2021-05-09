"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getListingsContactAmounts = void 0;
function getListingsContactAmounts(listings, contacts, proportion) {
    let listingContactAmounts = listings.map((l) => {
        const contactAmount = contacts.filter((c) => c.listingId === l.id).length;
        const listingContactAmount = {
            listing: l,
            contactAmount: contactAmount
        };
        return listingContactAmount;
    });
    if (proportion) {
        if (0 < proportion && proportion <= 1) {
            listingContactAmounts.sort((l, b) => {
                return l.contactAmount - b.contactAmount;
            });
            console.log(proportion * listingContactAmounts.length);
            listingContactAmounts = listingContactAmounts.slice(0, Math.round(proportion * listingContactAmounts.length));
            return listingContactAmounts;
        }
        else {
            return [];
        }
    }
    return listingContactAmounts;
}
exports.getListingsContactAmounts = getListingsContactAmounts;
