import { Buy_book } from "./bookType"

export const buyBook=(number=1)=>{
    return {
        type:Buy_book,
        payload:number
    }
}