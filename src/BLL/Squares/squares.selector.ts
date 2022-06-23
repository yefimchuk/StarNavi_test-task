import { createSelector } from "reselect";

export const selectPickedData = createSelector(
  (state: any) => state,
  (state) => state.squares.pickedData
);
