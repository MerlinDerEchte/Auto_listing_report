import {IListing} from '../models/IListing';
import {SellerType} from '../models/SellerType';
import {ISellerTypeAveragePrice} from '../models/ISellerTypeAveragePrice';
import {getListingsAveragePrice} from '../functions/getListingsAveragePrice';


export function getAveragePricesBySellerType(listings: IListing[]): ISellerTypeAveragePrice[]{

    const getAveragePriceBySellerType = (sellerType: SellerType):ISellerTypeAveragePrice =>{
        let carAmount: number = 0;
        let sum:number = 0;
        const sellerTypeListings:IListing[] = listings.filter((l:IListing) => l.sellerType === sellerType);
        const averagePrice:number | null = getListingsAveragePrice(sellerTypeListings);

        const priceBySellingType: ISellerTypeAveragePrice = {
            sellerType: sellerType,
            averagePrice: averagePrice
        }
        return priceBySellingType;
    }

    const privateAveragePrice: ISellerTypeAveragePrice = getAveragePriceBySellerType(SellerType.PRIVATE);
    const dealerAveragePrice: ISellerTypeAveragePrice = getAveragePriceBySellerType(SellerType.DEALER );
    const otherAveragePrice: ISellerTypeAveragePrice = getAveragePriceBySellerType(SellerType.OTHER);

    return [privateAveragePrice,dealerAveragePrice,otherAveragePrice]
}