import {getListingsContactAmounts} from './getListingsContactAmounts';
import {getListingsAveragePrice} from './getListingsAveragePrice';
import {IListingContactAmount} from '../models/IListingContactAmount';
import {IListing} from '../models/IListing';
import {IContact} from '../models/IContact';

export function getMostContactedListingAveragePrice(listings: IListing[], contacts: IContact[], proportion:number):number | null{

    const listingsContacts : IListingContactAmount[] = getListingsContactAmounts(listings, contacts, proportion);
    
    if(listingsContacts.length > 0){
        const newListings:IListing[] = listingsContacts.map((lc:IListingContactAmount) => lc.listing );
        const averagePrice:number | null = getListingsAveragePrice(newListings);
        return averagePrice;
    }else{
        return null;
    }
    
}   