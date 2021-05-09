import {IListing} from '../models/IListing'
import {IMakeProportion} from '../models/IMakeProportion'

export function getMakeProportions(listings: IListing[]): IMakeProportion[] {

    const makes: string[] = [];
    listings.forEach((l: IListing) => {
        if (!makes.includes(l.make)) {
            makes.push(l.make)
        }
    });

    const totalListings = listings.length;
    const makeProportions: IMakeProportion[] = [];

    makes.forEach((m) => {
        const amount: number = listings.filter((l) => l.make === m).length
        const makeProportion: IMakeProportion = {
            make: m,
            proportion: amount  / totalListings
        }
        makeProportions.push(makeProportion);
    })
    makeProportions.sort((a: IMakeProportion, b: IMakeProportion) => b.proportion - a.proportion)
    return makeProportions;
}