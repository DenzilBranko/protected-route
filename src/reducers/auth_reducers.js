
export default function(state={},action) {
    switch (action.type)  {
        case 'AUTH_DATA':
           return {...state,details: action.payload}
                       
        default:
            return state
    }
}