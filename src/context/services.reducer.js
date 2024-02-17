// מקבל את הערך המקורי והאוביקט של הפעולה, וצריך להחזיר את הערך החדש
export const ServicesReducer = (service, action) => {
    const { type } = action;
    switch (type) {
        case 'load':
            return action.value
        default:
            return Services;
    }
}