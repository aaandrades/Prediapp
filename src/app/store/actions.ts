import { Action } from '@ngrx/store'


export enum VisitActionTypes {
  ADD_VISIT = 'ADD_VISIT',
}

export class AddProduct implements Action {
  readonly type = VisitActionTypes.ADD_VISIT
  constructor(public payload: any){}
}

export type VisitActions = AddProduct;
