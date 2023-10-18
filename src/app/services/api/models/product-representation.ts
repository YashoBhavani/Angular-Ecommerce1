import { RatingRepresentation } from "./rating-representation"

export interface ProductRepresentaion{
    id?: number,
    title?: string,
    description?: string,
    category?: string,
    image?: string,
    price?: number
    rating?: RatingRepresentation
}