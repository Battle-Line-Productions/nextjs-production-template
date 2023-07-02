import { configureStore, Action, ThunkAction } from "@reduxjs/toolkit";

// TODO: A dummy reducer, Removing this once we actually create a store
function dummyReducer(state = {}, action: Action) {
	return state;
}

export const store = configureStore({
	reducer: {
		dummy: dummyReducer,
	},
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
