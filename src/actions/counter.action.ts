import {Action} from "@ngrx/store";

export enum ActionType {
  Increment = '[C C] I',
  Decrement = '[C C] D',
  Reset = '[C C] Rest',
}

export class Increment implements Action {
  readonly type = ActionType.Increment;
}

export class Decrement implements Action {
  readonly type = ActionType.Decrement;
}

export class Reset implements Action {
  readonly type = ActionType.Reset;
}
