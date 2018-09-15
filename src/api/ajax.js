import axios from "axios"

export default function (url,data={},method="GET") {
  return new Promise(function (resolve,reject) {
    let promise
    if(method==="GET"){
      let ParamStr=""
      Object.keys(data).forEach((key)=>{
        ParamStr+=key+"="+data[key]+"&"
      })
      ParamStr=ParamStr.substring(0,ParamStr.length-1)
      if(ParamStr){
        url+="?"+ParamStr
      }
      promise=axios.get(url)
    }else{
      promise=axios.post(url,data)
    }
    promise.then(response=>{
      resolve(response.data)
    }).catch(error=>{
      reject(error)
    })
  })
}
