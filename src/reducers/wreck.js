import { WRECK_CHECKED } from "../actions/wreck";

export default function(state = null, action) {
  switch (action.type) {
    case WRECK_CHECKED:
      return action.payload;
    default:
      return state;
  }
}