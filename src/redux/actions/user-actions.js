export const UPDATE_USER = 'UPDATE_USER';
export function updateUser(info) {
    return {
        type: UPDATE_USER,
        payload: {
            info
        }
    }
}
