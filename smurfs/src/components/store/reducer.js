import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAIL,
  ADD_START,
  ADD_SUCCESS,
  ADD_FAIL,
  REMOVE_SMURF
} from "./actions";

const initialState = {
  smurfs: [],
  err: "",
  isFetching: false,
  removed: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        err: "",
        isFetching: true,
        smurfs: [],
        removed: false
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        err: "",
        isFetching: false,
        smurfs: action.payload,
        removed: false
      };
    case FETCH_FAIL:
      return {
        ...state,
        err: action.payload,
        isFetching: false,
        smurfs: [],
        removed: false
      };
    case ADD_START:
      return {
        ...state,
        err: "",
        isFetching: true,
        smurfs: [],
        removed: false
      };
    case ADD_SUCCESS:
      return {
        ...state,
        err: "",
        isFetching: false,
        smurfs: action.payload,
        removed: false
      };
    case ADD_FAIL:
      return {
        ...state,
        err: action.payload,
        isFetching: false,
        smurfs: [],
        removed: false
      };
    //   case REMOVE_SMURF:
    //       return{
    //           ...state,
    //           smurfs: state.filter(smurf => smurf.id !== action.id),
    //           removed: true
    //       }
    default:
      return state;
  }
};
