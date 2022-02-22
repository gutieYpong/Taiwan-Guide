import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getAuthorizationHeader } from "../constants/api";

export const fetchData = createAsyncThunk( 'users/fetchByIdStatus', async( {url, cate_type}, thunkAPI ) => {
  console.log(`query url: ${url}`)
  const result = await axios.get(
    url,
    {
      headers: getAuthorizationHeader()
    }
  )
  // ).then( res => console.log(`res: ${JSON.stringify(res)}`) )

  return { cateType: cate_type, data: result.data };
});

export const tourismSlice = createSlice({
  name: 'tourism',
  initialState: {
    data: {
      scenicSpot: [],
      delicacy: [],
      activity: [],
    },
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
        // console.log(`action.type: ${action.payload.cateType}`)
        state.status = 'succeeded';
        state.data[action.payload.cateType] = action.payload.data;
      })
      .addCase( fetchData.rejected, ( state, action ) => {
        state.status = 'failed';
        state.data = []; // ? should place default data
        state.error = action.error.message;
      })
  }
})

export const tourismInfo = state => state.tourism;
export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = tourismSlice.actions;
export default tourismSlice.reducer;