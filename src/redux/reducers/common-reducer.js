import {UPDATE_POSTBOX} from "../actions/common-actions";
const defaultStore = {
    showPostbox: false
}
export default function(state = defaultStore, action) {
    // Reducer里只能接收state，不能改变state
    switch (action.type) {
        case UPDATE_POSTBOX: {
            state.showPostbox = action.showPostbox;
            return {
                ...state,
            }
        }
    }
    return state;
}
