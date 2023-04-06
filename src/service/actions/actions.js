import {Info_List} from '../constants'
export const adduserinfo =(data)=>{
     console.log("action",data)
    return {
        type:Info_List,
        data:data
    }
}
export const AddCondInfo =(data)=>{
    console.log("action",data)
   return {
       type:Cond_list,
       data:data
   }
}
export const AddShiftInfo =(data)=>{
    console.log("action",data)
   return {
       type:Shif_list,
       data:data
   }
}