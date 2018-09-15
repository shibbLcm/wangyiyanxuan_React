import ajax from "./ajax"

export const reqCategoryArr=()=>ajax("/category")

export const reqFindMoreArr=()=>ajax("/findmore")
