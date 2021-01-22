import { Action } from '@ngrx/store'


export enum VisitActionTypes {
  ADD_VISIT = 'ADD_VISIT',
  ADD_NEW_VISIT = 'ADD_NEW_VISIT'
}

export class AddProduct implements Action {
  readonly type = VisitActionTypes.ADD_VISIT
  constructor(public payload: any){}
}

export class AddNewVisit implements Action {
  readonly type = VisitActionTypes.ADD_NEW_VISIT
  constructor(public payload: any){}
}

export type VisitActions = AddProduct; 
