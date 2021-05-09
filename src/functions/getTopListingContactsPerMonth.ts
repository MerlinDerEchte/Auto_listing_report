import {IListingContactAmountPerMonth} from '../models/IListingContactAmountPerMonth';
import {IListingContactAmount} from '../models/IListingContactAmount';
import {IMonth} from '../models/IMonth';
import {IContact} from '../models/IContact';
import {IListing} from '../models/IListing';
import {getMonthsFromContacts} from './getMonthsFromContacts';
import {getListingsContactAmountsPerMonth} from './getListingsContactAmountsPerMonth';

export function getTopListingContactsPerMonth(contacts: IContact[], listings:IListing[], listingAmount:number): IListingContactAmountPerMonth[]{
    const months: IMonth[] = getMonthsFromContacts(contacts);
    const topMonthlyListingsContacts: IListingContactAmountPerMonth[] = months.map((m: IMonth) => {

        const topListingsContacts: IListingContactAmount[] = getListingsContactAmountsPerMonth(listings, contacts, m, listingAmount);
        const monthlyListingContactAmounts: IListingContactAmountPerMonth = {
            month: m,
            listingContactAmounts: topListingsContacts
        }
        return monthlyListingContactAmounts;
    })
    return topMonthlyListingsContacts;
}