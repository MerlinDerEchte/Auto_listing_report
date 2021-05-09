import { IListingContactAmount } from "./IListingContactAmount";
import {IMonth} from './IMonth'

export interface IListingContactAmountPerMonth{
    month:IMonth,
    listingContactAmounts: IListingContactAmount[]
}
