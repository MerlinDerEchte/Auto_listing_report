import {IContact} from '../models/IContact';
import {IMonth} from '../models/IMonth';
import {IListingContactAmount} from '../models/IListingContactAmount';
import {IListing} from '../models/IListing';
import {getListingsContactAmounts} from './getListingsContactAmounts';


export function getListingsContactAmountsPerMonth(listings:IListing[],contacts:IContact[], month: IMonth, listingAmount:number):IListingContactAmount[]{
    
    // get only the Contacts that are in the specified month
    const currentContacts = contacts.filter((c:IContact) => {
        const contactMonth:number = c.contactDate.getMonth();
        const contactYear: number = c.contactDate.getFullYear();
        if(contactMonth === month.month && contactYear === month.year){
            return true;
        }
    }) 

    // get LIstingContactAMounts for all listing and the contacts in the specified month
    const contactedListings = getListingsContactAmounts(listings, currentContacts);
    // sort the ListingContactAmounts DESCENDING
    contactedListings.sort((a:IListingContactAmount, b:IListingContactAmount) => {
        return b.contactAmount - a.contactAmount;
    })
    // return only the top 'listingAmount' objects 
    return contactedListings.splice(0,listingAmount)
}