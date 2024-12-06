import { addDoc, collection, getDocs } from "firebase/firestore"
import { db } from "../../Firebase/Firebase"
import { ERROR, LOADING, SUCCESSs } from "./actionType"

const ProductCollection = collection(db,"products")
export const addData = (dispatch)=>async(obj)=>{
    await addDoc(ProductCollection,obj)
    dispatch({type : "ADDEDSUCCESS"})
}

export const getData = async(dispatch)=>{
    dispatch({type : LOADING})
    let a =  await getDocs(ProductCollection)
    if(!a){
        dispatch({type : ERROR})
    }
    let data = a.docs.map((el)=>{
        return { id : el.id, ...el.data()}
    })
    dispatch({type : SUCCESSs, payload : data})
}