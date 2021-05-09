import { SellerType } from './SellerType';

export interface IListing {
    id: number,
    make: string,
    price: number,
    mileage: number,
    sellerType: SellerType
}

