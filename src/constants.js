import "babel-polyfill";

export const baseURL="https://ah-backend-xmen-staging.herokuapp.com";

export async function fetchDataAuth(url,token){
   const response=await fetch(url,{
       headers:{
        'Authorization':`Bearer ${token}`
       }
   })

   const reponseData=await response.json()
   return reponseData
}

export async function fetchDataNoAuth(url){
    const response=await fetch(url,{
    })
    const reponseData=await response.json()

    return reponseData
 }

export async function postDataAuth(url,token,data){
    const response=await fetch(url,{
        headers:{
         'Authorization':`Bearer ${token}`,
         'content-type':'application/json'
        },
        method:'POST',
        body:JSON.stringify(data)
    })
 
    const reponseData=await response.json()
    return reponseData
}

export async function postDataNoAuth(url,data){
    const response=await fetch(url,{
        headers:{
         'content-type':'application/json'
        },
        method:'POST',
        body:JSON.stringify(data)
    })
 
    const reponseData=await response.json()
    return reponseData
}

export async function updateData(url,token,updatedata){
    const response=await fetch(url,{
        headers:{
         'Authorization':`Bearer ${token}`,
         'content-type':'application/json'
        },
        method:'PATCH',
        body:JSON.stringify(updatedata)
    })
 
    const reponseData=await response.json()
    return reponseData
}

export async function deleteData(url,token){
    const response=await fetch(url,{
        headers:{
         'Authorization':`Bearer ${token}`
        },
        method:'DELETE'
    })
 
    const reponseData=await response.json()
    return reponseData
 }


