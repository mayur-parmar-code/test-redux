import { Buy_book } from "../book/bookType"

const initialState={
    numberOfBooks:10
}

 const BookReducer=(state=initialState,action)=>{
    switch(action.type){
        case Buy_book:return{
            ...state,
            numberOfBooks:state.numberOfBooks-action.payload
        }
        default:return{
            ...state
        }
    }
 }
 export default BookReducer;