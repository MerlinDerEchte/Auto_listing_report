
import { IListingContactAmount } from '../models/IListingContactAmount';
import {SellerType} from '../models/SellerType';


export const testListingContactAmounts: IListingContactAmount[] = [
    {
        listing: {
            id: 1000,
            make: "Audi",
            price: 49717,
            mileage: 6500,
            sellerType: SellerType.PRIVATE
        },
        contactAmount: 0
    },
    {
        listing: {
            id: 1001,
            make: "Mazda",
            price: 42718,
            mileage: 6500,
            sellerType: SellerType.DEALER
        },
        contactAmount: 3
    },
    {
        listing: {
            id: 1002,
            make: "Toyota",
            price: 4714,
            mileage: 8500,
            sellerType: SellerType.DEALER
        },
        contactAmount: 3
    },
    {
        listing:{
            id: 1003,
        make: "Renault",
        price: 1237,
        mileage: 12500,
        sellerType: SellerType.OTHER
        },
        contactAmount: 4
        
    },
    {
        listing: {
            id: 1004,
            make: "Audi",
            price: 4213,
            mileage: 300,
            sellerType: SellerType.OTHER
        },
        contactAmount: 0
        
    },
];