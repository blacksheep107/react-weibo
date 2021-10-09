import {UPDATE_USER} from "../actions/user-actions";

export default function(state = {}, action) {
    switch (action.type) {
        case UPDATE_USER: {
            return {
                ...state,
            }
        }
    }
    return state;
}
