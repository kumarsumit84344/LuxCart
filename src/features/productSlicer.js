import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product:[],
    error:null,
    loading:false
}
const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        setproducts:(state,action)=>{
            state.product = action.payload
            state.error = null;
            state.loading = false
        },
        seterror:(state,action)=>{
            state.error = action.payload
        },
        setLoading:(state,action)=>{
            state.loading = action.payload
        }
    }

})

export const {setproducts,seterror,setLoading} = productSlice.actions;
export default productSlice.reducer;