import {combineReducers} from "redux"
import {
  RECEIVE_CATEGORYARR,
  RECEIVE_FINDMOREARR
} from "./action-types"

const initCategoryArr=[]
function categoryArr(state=initCategoryArr,action) {
  switch (action.type){
    case RECEIVE_CATEGORYARR:
      return action.data
    default :
      return state
  }
}

const initFindMoreArr=[]
function findMoreArr(state=initFindMoreArr,action) {
  switch (action.type){
    case RECEIVE_FINDMOREARR:
      return action.data
    default :
      return state
  }
}

export default combineReducers({
  categoryArr,
  findMoreArr
})

