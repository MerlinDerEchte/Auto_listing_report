import  {IListing} from '../models/IListing';

export function getListingsAveragePrice(listings: IListing[]):number|null {

    let sum: number = 0;
    listings.forEach((l: IListing) => {
        sum += l.price;
    })
    const averagePrice: number| null = listings.length > 0 ? Math.round(sum / listings.length) : null;

    return averagePrice
}