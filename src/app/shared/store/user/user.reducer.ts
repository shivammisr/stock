import { createReducer, on } from '@ngrx/store';
import { setUser, updateUser, clearUser } from './user.action';
import { User } from '../../models/user.model';


export type UserState = User | null ; // Allow state to be a User or null
export const initialState: UserState =  null // Initial state is null

const _userReducer = createReducer(
  initialState,
  on(setUser, (state, { user }: any) => ({...user}) ), // Replace state with the new user
  on(updateUser, (state: any, { user }) =>  ({ ...(state), ...user })), // Update only if state exists
  on(clearUser, () => null) // Clear user state
);


export function userReducer(state: any, action: any) {
  return _userReducer(state, action);
}
