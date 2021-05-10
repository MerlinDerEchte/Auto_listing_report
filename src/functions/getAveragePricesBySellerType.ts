import {IListing} from '../models/IListing';
import {SellerType} from '../models/SellerType';
import {ISellerTypeAveragePrice} from '../models/ISellerTypeAveragePrice';
import {getListingsAveragePrice} from '../functions/getListingsAveragePrice';


export function getAveragePricesBySellerType(listings: IListing[]): ISellerTypeAveragePrice[]{
    // function to get the average price by sellerType
    const getAveragePriceBySellerType = (sellerType: SellerType):ISellerTypeAveragePrice =>{
       
        const sellerTypeListings:IListing[] = listings.filter((l:IListing) => l.sellerType === sellerType);
        const averagePrice:number | null = getListingsAveragePrice(sellerTypeListings);

        const priceBySellingType: ISellerTypeAveragePrice = {
            sellerType: sellerType,
            averagePrice: averagePrice
        }
        return priceBySellingType;
    }
    // get average Price Objects for each seller type
    const privateAveragePrice: ISellerTypeAveragePrice = getAveragePriceBySellerType(SellerType.PRIVATE);
    const dealerAveragePrice: ISellerTypeAveragePrice = getAveragePriceBySellerType(SellerType.DEALER );
    const otherAveragePrice: ISellerTypeAveragePrice = getAveragePriceBySellerType(SellerType.OTHER);

    return [privateAveragePrice,dealerAveragePrice,otherAveragePrice]
}