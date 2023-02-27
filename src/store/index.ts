import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dataReducer from './slices/dataSlice';


const rootReducer = combineReducers({
	data: dataReducer,
})

export function setupStore() {
	return configureStore({reducer: rootReducer})
}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
