"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMakeProportions = void 0;
function getMakeProportions(listings) {
    const makes = [];
    listings.forEach((l) => {
        if (!makes.includes(l.make)) {
            makes.push(l.make);
        }
    });
    const totalListings = listings.length;
    const makeProportions = [];
    makes.forEach((m) => {
        const amount = listings.filter((l) => l.make === m).length;
        const makeDistribution = {
            make: m,
            proportion: Math.round(amount * 100 / totalListings)
        };
        makeProportions.push(makeDistribution);
    });
    makeProportions.sort((a, b) => b.proportion - a.proportion);
    return makeProportions;
}
exports.getMakeProportions = getMakeProportions;
