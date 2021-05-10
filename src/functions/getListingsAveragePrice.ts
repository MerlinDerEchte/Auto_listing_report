import  {IListing} from '../models/IListing';

export function getListingsAveragePrice(listings: IListing[]):number|null {

    // get the total Amount of prices
    let sum: number = 0;
     
    listings.forEach((l: IListing) => {
        sum += l.price;
    })
    // return the rounded average price or null if no listings have been passed
    const averagePrice: number| null = listings.length > 0 ? Math.round(sum / listings.length) : null;

    return averagePrice
}