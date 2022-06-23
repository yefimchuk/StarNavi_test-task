import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import service from "../../DAL/service";

export const fetchSquaresData: any = createAsyncThunk(
  "squares/fetchSquaresData",
  async ({}, { rejectWithValue }) => {
    try {
      return await service.fetchData();
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const squares = createSlice({
  name: "squares",
  initialState: {
    squaresData: null,
    pickedData: null,
    error: null,
  } as any,

  reducers: {
    setPickData(state, action) {
      let arr: any[] = [];
      state.squaresData.filter((item: any) => {
        if (item.name === action.payload) {
          for (let i = 1; i <= item.field; i++) {
            arr.push({
              ...item,
              used: false,
              current: false,
              info: `rows ${Math.ceil(i / 5)} col ${
                5 - (5 * Math.ceil(i / 5) - i)
              }`,
            });
          }
          return [...arr];
        }
      });

      state.pickedData = [...arr];
    },
    setUsed(state, action) {
      let arr: any[] = [];
      action.payload[0].map((item: any, index: number) => {
        if (action.payload[1] === index) {
          let newObj: any = { ...item };
          newObj.used = action.payload[2];
          arr.push(newObj);
        } else {
          arr.push(item);
        }
      });

      state.pickedData = arr;
    },
  },
  extraReducers: {
    [fetchSquaresData.pending]: (state, action) => {},
    [fetchSquaresData.fulfilled]: (state, action) => {
      state.squaresData = action.payload.data;
    },
    [fetchSquaresData.rejected]: (state, action) => {
      state.error = action.payload.data;
    },
  },
});
export const { setPickData, setUsed } = squares.actions;
export default squares.reducer;
