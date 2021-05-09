import {SellerType} from './SellerType'

export interface ISellerTypeAveragePrice {
    sellerType: SellerType,
    averagePrice: number | null
}