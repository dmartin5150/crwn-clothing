import { UserData } from "../../utils/firebase/firebase.utils";
import { AnyAction } from "redux";
import { signInSuccess,signOutSuccess,signInFailed,signUpFailed,signOutFailed, } from "./user.action";

export type User_State = {
  readonly currentUser:UserData | null,
  readonly isLoading: boolean,
  readonly error:Error | null
}

const INITIAL_STATE:User_State = {
  currentUser: null,
  isLoading: false,
  error:null
};

export const userReducer = (state = INITIAL_STATE, action:AnyAction):User_State => {

  if (signInSuccess.match(action)) {
    return { ...state, currentUser: action.payload };
  }

  if (signOutSuccess.match(action)) {
    return { ...state, currentUser: null}
  }

  if (signInFailed.match(action) || signUpFailed.match(action) || signOutFailed.match(action)){
    return {...state, error:action.payload}
  }
  return state;

};
