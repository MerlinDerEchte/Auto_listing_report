import {SellerType} from '../models/SellerType';
import {IListing } from '../models/IListing';

export const testListings: IListing[] = [
    {
        id: 1000,
        make: "Audi",
        price: 49717,
        mileage: 6500,
        sellerType: SellerType.PRIVATE
    },
    {
        id: 1001,
        make: "Mazda",
        price: 42718,
        mileage: 6500,
        sellerType: SellerType.DEALER
    },
    {
        id: 1002,
        make: "Toyota",
        price: 4714,
        mileage: 8500,
        sellerType: SellerType.DEALER
    },
    {
        id: 1003,
        make: "Renault",
        price: 1237,
        mileage: 12500,
        sellerType: SellerType.OTHER
    },
    {
        id: 1004,
        make: "Audi",
        price: 4213,
        mileage: 300,
        sellerType: SellerType.OTHER
    },
]