import {Action} from "@ngrx/store";
import {ActionType} from "../actions/counter.action";

export const initailState = 0;

export function counterReducer(state = initailState, action: Action) {
  switch (action.type) {
    case  ActionType.Increment:
      return state + 1;
    case ActionType.Decrement:
      return state - 1;
    case ActionType.Reset:
        // state = 0;
      return 0;
    default:
      return state;
  }
}
