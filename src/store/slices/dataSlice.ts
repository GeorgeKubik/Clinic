	import { IData } from "../../typeInterface/typeInterface";
	import {createSlice, PayloadAction} from '@reduxjs/toolkit';

	interface DataSlice {
		loading: boolean;
		error: string;
		data: IData[];
	}

	const initialState: DataSlice = {
		loading: false,
		error: '',
		data: [],
	}

	export const dataSlice = createSlice({
		name: 'data',
		initialState,
		reducers: {
			fetching(state) {
				state.loading = true;
			},
			fetchSuccess(state, action: PayloadAction<IData[]>) {
				state.loading = false;
				state.data = action.payload;
				state.error = '';
			},
			fetchError(state, action: PayloadAction<Error>) { 
				state.loading = false;
				state.error = action.payload.message;
			}
		}
	})

	export default dataSlice.reducer;