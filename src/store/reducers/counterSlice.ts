import { createSlice, PayloadAction } from '@reduxjs/toolkit';



interface catState {
	cats: any[],
	isloading: boolean,
	error: string,
}

const initialState: catState = {
  cats: [],
  isloading: false,
  error: '',
};

export const catSlice = createSlice({
  name: 'catsReducer',
  initialState,

  reducers: {
    getCatsFetch: (state) => {
      state.isloading = true;
    },
	 getCatsSuccess: (state, action: PayloadAction<any[]>) => {
      state.cats = action.payload;
		state.isloading = false;
    },
	 getCatsError: (state, action) => {
      state.error = action.payload;
		state.isloading = false;
    },
	}
});



export const { getCatsFetch,  getCatsSuccess, getCatsError} = catSlice.actions;

export default catSlice.reducer;
