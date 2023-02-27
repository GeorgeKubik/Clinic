import { AppDispatch } from '../index';
import axios from "../../axios/index";
import {dataSlice} from "../slices/dataSlice";
import { IData } from "../../typeInterface/typeInterface";

export const fetchData = () => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(dataSlice.actions.fetching())
			const response = await axios.get<IData[]>('data');
			dispatch(dataSlice.actions.fetchSuccess(response.data))
		} catch (err) {
			dispatch(dataSlice.actions.fetchError(err as Error));
			console.log('Error');
		}
	}
}