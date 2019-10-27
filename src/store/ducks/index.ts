/* eslint-disable import/no-cycle */
import { combineReducers } from 'redux';
import pageCount, { PageCountActionType, PageCountState } from './pageCount';
import pageError, { PageErrorActionType, PageErrorState } from './pageError';
import pageLoading, { PageLoadingActionType, PageLoadingState } from './pageLoading';

export type ActionType = PageCountActionType | PageErrorActionType | PageLoadingActionType;

export interface State {
  pageCount: PageCountState;
  pageError: PageErrorState;
  pageLoading: PageLoadingState;
}

export default combineReducers({
  pageCount,
  pageError,
  pageLoading,
});
