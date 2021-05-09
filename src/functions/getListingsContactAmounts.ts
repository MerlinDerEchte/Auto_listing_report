import { IListing } from '../models/IListing';
import { IListingContactAmount } from '../models/IListingContactAmount';
import { IContact } from '../models/IContact';

export function getListingsContactAmounts(listings: IListing[], contacts: IContact[], proportion?: number): IListingContactAmount[]| []{
    let listingContactAmounts: IListingContactAmount[] = listings.map((l: IListing) => {
        const contactAmount: number = contacts.filter((c: IContact) => c.listingId === l.id).length;
        const listingContactAmount: IListingContactAmount = {
            listing: l,
            contactAmount: contactAmount
        }
        return listingContactAmount
    })

    if (proportion) {
        if (0 < proportion &&  proportion <= 1) {

            listingContactAmounts.sort((l: IListingContactAmount, b: IListingContactAmount) => {
                return l.contactAmount - b.contactAmount;
            })
            listingContactAmounts = listingContactAmounts.slice(0, Math.round(proportion * listingContactAmounts.length));
            return listingContactAmounts;
        }else{
            return [];
        }
        
    }
    return listingContactAmounts;
}