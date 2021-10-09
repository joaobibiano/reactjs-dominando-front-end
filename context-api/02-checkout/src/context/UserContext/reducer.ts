export type ReducerState = { name: string; id: string };

export type ReducerAction =
  | { type: "update_name"; newName: string }
  | { type: "update_id"; newId: string };

export function userReducer(state: ReducerState, action: ReducerAction) {
  switch (action.type) {
    case "update_name":
      return { ...state, name: action.newName };

    case "update_id":
      return { ...state, id: action.newId };

    default:
      return state;
  }
}
