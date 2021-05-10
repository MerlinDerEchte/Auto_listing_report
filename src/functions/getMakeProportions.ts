import {IListing} from '../models/IListing'
import {IMakeProportion} from '../models/IMakeProportion'

export function getMakeProportions(listings: IListing[]): IMakeProportion[] {

    const makes: string[] = [];
    // extract make names
    listings.forEach((l: IListing) => {
        if (!makes.includes(l.make)) {
            makes.push(l.make)
        }
    });

    const totalListings = listings.length;
    const makeProportions: IMakeProportion[] = [];


    // for each make calculate its proportion of the total number of listings and push a makeProportion Object to makeProportions
    makes.forEach((m) => {
        const amount: number = listings.filter((l) => l.make === m).length
        const makeProportion: IMakeProportion = {
            make: m,
            proportion: amount  / totalListings
        }
        makeProportions.push(makeProportion);
    })
    // sort the makePropoortions DESCENDING
    makeProportions.sort((a: IMakeProportion, b: IMakeProportion) => b.proportion - a.proportion)
    return makeProportions;
}