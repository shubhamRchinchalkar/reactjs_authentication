import { createSlice } from "@reduxjs/toolkit";
const authslice = createSlice({
    name:'auth',
    initialState: {
        authToken: null
    },
    reducers:{
        setAuthToken: (state, action) => {
            state.authToken = action.payload
        }
    }
})

export const {setAuthToken} = authslice.actions
export default authslice.reducer