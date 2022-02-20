import axios from "axios";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAuthorizationHeader, SCENIC_SPOT_API } from "../constants/api";

export const fetchData = createAsyncThunk( 'users/fetchByIdStatus', async( categoryQuery ) => {
  const result = await axios.get(
    `https://ptx.transportdata.tw/MOTC/v2/Tourism/${categoryQuery}/Tainan?%24top=200&%24format=JSON`,
    {
      headers: getAuthorizationHeader()
    }
  )
  // ).then( res => console.log(`res: ${JSON.stringify(res)}`) )

  return result.data;
});

export const dataSlice = createSlice({
  name: 'spot',
  initialState: {
    data: [],
    status: 'idle',
    error: null
  },
  reducers: {
    fetchDataStart: ( state, action ) => ({
      ...state,
    }),
    fetchDataSuccess: ( state, action ) => ({
      ...state,
      data: action.payload.data,
      error: null,
    }),
    fetchDataFailure: ( state, action ) => ({
      ...state,
      error: action.payload.error
    })
  },
  extraReducers( builder ) {
    builder
      .addCase( fetchData.pending, ( state, action ) => {
        state.status = 'loading';
      })
      .addCase( fetchData.fulfilled, ( state, action ) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase( fetchData.rejected, ( state, action ) => {
        state.status = 'failed';
        state.data = []; // ? should place default data
        state.error = action.error.message;
      })
  }
})

export const spotInfo = state => state.spot;

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = dataSlice.actions;

export default dataSlice.reducer;