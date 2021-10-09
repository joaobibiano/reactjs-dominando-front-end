export type ReducerState = {
  name: string;
  id: string;
  token: string;
  totalClicks: number;
};

export type ReducerAction =
  | { type: "update_name"; newName: string }
  | { type: "update_id"; newId: string }
  | { type: "update_token"; newToken: string }
  | { type: "increment_clicks" };

export const initialState: ReducerState = {
  name: "",
  id: "",
  token: "",
  totalClicks: 0,
};

export function userReducer(state: ReducerState, action: ReducerAction) {
  switch (action.type) {
    case "update_name":
      return { ...state, name: action.newName };

    case "update_id":
      return { ...state, id: action.newId };

    case "update_token":
      return { ...state, token: action.newToken };

    case "increment_clicks":
      return { ...state, totalClicks: state.totalClicks + 1 };

    default:
      return state;
  }
}
