import { Info_List,Cond_list,Shif_list } from '../constants'
const initialState = {
    cardData: [],
    conddata: [],
    shiftData: []
}
export default function cardItems(state = initialState, action) {
    switch (action.type) {
        case Info_List:
            //  console.warn("reducer",action)
            return {
                ...state,
                cardData: action.data
            };
        case Cond_list:
                //  console.warn("reducer",action)
                return {
                    ...state,
                    conddata: action.data
                };
        case Shif_list:
            //  console.warn("reducer",action)
            return {
                ...state,
                shiftData: action.data
            }
        default:
            return state
    }


}
//  function Condinfo(state = [], action) {
//     switch (action.type) {
//         case Cond_list:
//             //  console.warn("reducer",action)
//             return [
//                 ...state,
//                 {conddata: action.data}
//             ]
//         default:
//             return state
//     }


// }
//  function shiftinfo(state = [], action) {
//     switch (action.type) {
//         case Shif_list:
//             //  console.warn("reducer",action)
//             return [
//                 ...state,
//                 {shiftData: action.data}
//             ]
//         default:
//             return state
//     }



