export const UPDATE_POSTBOX = 'UPDATE_POSTBOX';
export function updatePostbox(info) {
    return {
        type: UPDATE_POSTBOX,
        payload: {
            info
        }
    }
}
// export default {
//     showPostbox: false
// }
