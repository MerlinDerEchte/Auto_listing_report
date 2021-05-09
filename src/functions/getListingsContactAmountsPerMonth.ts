import {IContact} from '../models/IContact';
import {IMonth} from '../models/IMonth';
import {IListingContactAmount} from '../models/IListingContactAmount';
import {IListing} from '../models/IListing';
import {getListingsContactAmounts} from './getListingsContactAmounts';


export function getListingsContactAmountsPerMonth(listings:IListing[],contacts:IContact[], month: IMonth, listingAmount:number):IListingContactAmount[]{
    const currentContacts = contacts.filter((c:IContact) => {
        const contactMonth:number = c.contactDate.getMonth();
        const contactYear: number = c.contactDate.getFullYear();
        if(contactMonth === month.month && contactYear === month.year){
            return true;
        }
    }) 

    const contactedListings = getListingsContactAmounts(listings, currentContacts);
    contactedListings.sort((a:IListingContactAmount, b:IListingContactAmount) => {
        return b.contactAmount - a.contactAmount;
    })

    return contactedListings.splice(0,listingAmount)
}