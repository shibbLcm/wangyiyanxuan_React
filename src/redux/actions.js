import {
  RECEIVE_CATEGORYARR,
  RECEIVE_FINDMOREARR
} from "./action-types"
import {
  reqCategoryArr,
  reqFindMoreArr
} from "../api"

const receiveCategoryArr=({categoryArr})=>({type:RECEIVE_CATEGORYARR,data:categoryArr})

const receiveFindMoreArr=({findMoreArr})=>({type:RECEIVE_FINDMOREARR,data:findMoreArr})

export const asyncReceiveCategoryArr=()=>{
  return async dispatch=>{
    const result=await reqCategoryArr()
    if(result.code===0){
      dispatch(receiveCategoryArr({categoryArr:result.data}))
    }
  }
}
export const asyncReceiveFindMoreArr=()=>{
  return async dispatch=>{
    const result=await reqFindMoreArr()
    if(result.code===0){
      dispatch(receiveFindMoreArr({findMoreArr:result.data}))
    }
  }
}